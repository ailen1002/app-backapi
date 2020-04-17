import { Injectable } from '@nestjs/common';
import { BaseService } from '@src/service/base/base.service';
import { GoodsCategoryEntity } from '@src/entities/goods_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends BaseService {
  constructor (
    @InjectRepository(GoodsCategoryEntity)
    private readonly goodsCategoryRepository: Repository<GoodsCategoryEntity>,
  ) {
    super(goodsCategoryRepository);
  }

  async categoryList(): Promise<any> {
    try {
      return await this.goodsCategoryRepository.find({ where: { status: 1 }, order: { sort: 'ASC' } });
    } catch (e) {
      console.log(e);
    }
  }
}
