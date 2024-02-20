import { Logger } from '@nestjs/common';
import { load } from 'cheerio';
import * as requestPromise from 'request-promise';

export class UrlScraperService {

  static readonly logger = new Logger(UrlScraperService.name);

  static async scrapePage(url: string): Promise<any> {
    try {
      const cheerioTransformOptions = {
        uri: url,
        transform: (body) => load(body)
      };
      const response = await UrlScraperService.request(url, cheerioTransformOptions);
      const $ = load(response.html());
      
      const data = Array.from($('li.item')).map(li => {
        const priceHtml = $(li).find('.price-box .price').html() || '';
        return {
          title: $(li).find('.product-name > a').text(),
          priceHtml,
          price: priceHtml.trim().split('&nbsp;')[0],
          currency: priceHtml.trim().split('&nbsp;')[1],
          imgSrc: $(li).find('.product-image img').attr('src')
        }
      });
      
      UrlScraperService.logger.log(JSON.stringify(data), 'Scraper:Parsed:Data');

      return data;
    } catch (error) {
      UrlScraperService.logger.error(error, `Scraper:Error:<${url}>`);
      throw error
    }
  }

  static async request(url: string, options?: requestPromise.RequestPromiseOptions): Promise<any> {
    const config = {
      url,
      ...options
    };
    return requestPromise(config);
  }
}
