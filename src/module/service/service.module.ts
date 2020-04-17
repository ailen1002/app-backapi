import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from '@src/service/front/goods/category/category.service';
import { GoodsCategoryEntity } from '@src/entities/goods_category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GoodsCategoryEntity,
    ])
  ],
  providers: [
    CategoryService,
  ],
  exports: [
    CategoryService
  ]
})
export class ServiceModule {}
