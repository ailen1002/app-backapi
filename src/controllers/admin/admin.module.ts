import { Module } from '@nestjs/common';
import { WorkHistoryController } from './work-history/work-history.controller';
import { ServiceModule } from '@src/module/service/service.module';
import { GoodsController } from './goods/goods/goods.controller';
import { CategoryController } from './goods/category/category.controller';
import { OrderController } from './goods/order/order.controller';

@Module({
  imports: [
    ServiceModule,
  ],
  controllers: [WorkHistoryController, GoodsController, CategoryController, OrderController]
})
export class AdminModule {}
