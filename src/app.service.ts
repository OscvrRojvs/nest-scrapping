import { Injectable } from '@nestjs/common';
import { InjectBrowser } from 'nest-puppeteer';
import type { Browser } from 'puppeteer';

@Injectable()
export class AppService {
  constructor(@InjectBrowser() private readonly browser: Browser) {}

  async getHello(): Promise<any> {
    const version = await this.browser.version();
    return { version };
  }
}
