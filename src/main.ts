import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import * as expressApp from './app.js';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  wireSampleExpressAppUnderRootOfNestApp(app);
  await app.listen(3000);
}

function wireSampleExpressAppUnderRootOfNestApp(nestApp: NestExpressApplication) {
  nestApp.use('/', expressApp);
}
