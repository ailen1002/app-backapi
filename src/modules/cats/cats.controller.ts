import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Result } from '../../common/result.interface';
import { CatsService } from './cats.service';
import { Cats } from './cats.entity';

@Controller('cats')
export class CatsController {
  constructor(@Inject(CatsService) private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: Cats): Promise<Result> {
    await this.catsService.creatCat(cat);
    return { code: 200, message: '创建成功' };
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: number): Promise<Result> {
    await this.catsService.deleteCat(id);
    return { code: 200, message: '删除成功' };
  }

  @Put(':id')
  async updateCat(@Param('id') id: number, @Body() cat: Cats): Promise<Result> {
    await this.catsService.updateCat(id, cat);
    return { code: 200, message: '更新成功' };
  }

  @Get(':id')
  async findOneCat(@Param('id') id: number): Promise<Result> {
    const data = await this.catsService.findOneCat(id);
    return { code: 200, message: '查询成功', data };
  }
}
