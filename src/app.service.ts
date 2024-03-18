import { Injectable, OnModuleInit } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService implements OnModuleInit {

  async getHello(): Promise<any> {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox'],
    });

    const version = await browser.version();
    console.log({ version });
  }
  onModuleInit(): any {
    this.getHello();
  }

}
