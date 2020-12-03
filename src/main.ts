import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

import { AppModule } from './app.module';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  addExpressAppToNestApp(app);
  await app.listen(3000);
}

function addExpressAppToNestApp(nestApp: NestExpressApplication) {
  const router = express();
  router.get('/', (req, res) => {
    res.send('Hello from express!');
  });
  nestApp.use('/express', router);
}
