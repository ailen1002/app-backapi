import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error','warn']
  });
  await app.listen(3100);
  app.enableCors();
  app.use(helmet());
}
bootstrap();
