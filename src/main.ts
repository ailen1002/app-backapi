import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error','warn']
  });
  
  app.enableCors();
  app.use(helmet());

  const options = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('a test API')
    .setVersion('V1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3100);
}
bootstrap();
