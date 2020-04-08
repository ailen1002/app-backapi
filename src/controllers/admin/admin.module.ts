import { Module } from '@nestjs/common';
import { WorkHistoryController } from './work-history/work-history.controller';
import { GoodsController } from './goods/goods/goods.controller';
import { CategoryController } from './goods/category/category.controller';
import { OrderController } from './goods/order/order.controller';

@Module({
  controllers: [WorkHistoryController, GoodsController, CategoryController, OrderController]
})
export class AdminModule {}
