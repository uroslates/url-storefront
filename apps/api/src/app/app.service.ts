import { Injectable, Logger } from '@nestjs/common';
import { environment } from '../environments/environment';
import { UrlPuppeteer } from './url-puppeteer.service';
import * as requestPromise from 'request-promise';

@Injectable()
export class AppService {
  readonly logger = new Logger(AppService.name);

  async spreeApiProxyQuery(url: string): Promise<any> {
    try {
      // const data = await UrlPuppeteer.scrapeSpreeApiData(url); 
      const data =  await this.request(url);
      this.logger.log(JSON.stringify(data), 'Spree::BackEnd::Response::Success');
      return data;
    } catch (error) {
      this.logger.error(error, 'Spree::BackEnd::Response::Error');
      throw error;
    }
  }

  get spreeApiBaseUrl() {
    return environment.spree.apiBaseUrl;
  }

  async request(url: string, options?: requestPromise.RequestPromiseOptions): Promise<any> {
    const config = {
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      json: true,
      ...options
    };
    return requestPromise(config);
  }
}
