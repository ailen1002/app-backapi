require('dotenv').config();
import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });
  const globalPrefix = 'api/v1';
  const port = process.env.PORT || 3000;
  app.enableCors();
  app.use(helmet());

  const options = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('a test API')
    .setVersion('V1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`, 'bootstrap');
  });
}
bootstrap();
