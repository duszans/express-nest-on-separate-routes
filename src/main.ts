import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

import { AppModule } from './app.module';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  wireSampleExpressAppUnderRootOfNestApp(app);
  await app.listen(3000);
}

function wireSampleExpressAppUnderRootOfNestApp(nestApp: NestExpressApplication) {
  nestApp.use('/', createSampleExpressApp());
}

function createSampleExpressApp() {
  const expressApp = express();
  expressApp.get('/', (req, res) => {
    res.send('Hello from express - first path! It is a showcase that it can be on root path for an entire app');
  });
  expressApp.get('/another_express_path', (req, res) => {
    res.send(
      'Hello from express! ' +
        'It is just showing how to add another routes - just as typically with expressjs.',
    );
  });
  return expressApp;
}
