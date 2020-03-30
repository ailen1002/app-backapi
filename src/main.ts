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

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3100;

  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  });
}
bootstrap();
