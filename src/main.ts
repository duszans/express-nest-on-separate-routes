import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const router = express();
  router.get('/', (req, res) => {
    res.send('Hello from express!');
  });
  app.use('/express', router);

  await app.listen(3000);
}
bootstrap();
