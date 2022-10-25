import {
  Controller,
  Get,
  Request,
  UseInterceptors,
  CacheInterceptor,
  Logger,
  Query,
  CacheTTL
} from '@nestjs/common';
import { AppService } from './app.service';
import { UrlScraperService } from './url-scraper.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {

  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  /**
   * Proxies the call to the spree demo instance.
   * Workaround to a CORS Origin Issues that Spree Demo BE (https://demo.spreecommerce.org) has
   * which makes it non-reachable to the SpreeSdk.
   * 
   * As an example url
   *  http://localhost:3333/api/v2/storefront/products?include=default_variant&page=1
   * would act as a proxy delegating the calls to the
   *  https://demo.spreecommerce.org/api/v2/storefront/products?include=default_variant&page=1
   * Spree BE Demo Instance (https://demo.spreecommerce.org/api/v2/storefront is configurable env property).
   * Proxied call goes through the Puppeteer Scraper implementation and returns data back in a JSON format.
   * 
   * Important: Becuase the operation is expensive - responses are Cached (ttl set to CacheTTL)!
   * 
   * @returns Spree BE Instance api/v2 endpoint respose for whatever resource you required (represented by *)
   */
  @Get('/v2/storefront/*')
  async spreeProxyDelgate(@Request() req) {
    const url = `${this.appService.spreeApiBaseUrl}${req.originalUrl}`;
    this.logger.log(url, 'Proxying request to configured Spree BackEnd');
    return this.appService.spreeApiProxyQuery(url);
  }

  @Get('/url/scraper')
  // 1h cache
  @CacheTTL(3600)
  async scrapePage(@Query('url') url) {
    this.logger.log(url, 'Scrape:Request:Detected');
    return UrlScraperService.scrapePage(url);
  }

}
