import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './controllers/admin/admin.module';
import { FrontUiModule } from './controllers/front-ui/front-ui.module';
import { ServiceModule } from './module/service/service.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, FrontUiModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
