import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { CatsModule } from './cats/cats.module';
import { ErrorsInterceptor } from './common/errors.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    },
    AppService,
    ConfigService
  ],
  exports: [],
})
export class AppModule {}
