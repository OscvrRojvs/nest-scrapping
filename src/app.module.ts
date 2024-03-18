import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppeteerModule } from 'nest-puppeteer';

@Module({
  imports: [
    PuppeteerModule.forRoot(
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
