import { Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { environment } from '../environments/environment';

export class UrlPuppeteer {

  static readonly logger = new Logger(UrlPuppeteer.name);

  static async scrapeSpreeApiData(url: string): Promise<any> {
    try {
      const executablePath = environment.puppeteer.executablePath;
      const browser = await puppeteer.launch({ executablePath });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // TODO: how to get a pure JSON from service (pass headers - how?)
      const bodyPreHandle = await page.$('body');
      const preInnerText: any = await bodyPreHandle.$$eval('pre', (nodes) => nodes.map((n: any) => n.innerText))
      const data = JSON.parse(preInnerText);

      UrlPuppeteer.logger.log(preInnerText, 'Spree BackEnd response retrieved and processed');

      await browser.close()
      return data
    } catch (error) {
      UrlPuppeteer.logger.error(error, 'Error Proxying and Processing Spree BackEnd response');
      throw error
    }
  }

}
