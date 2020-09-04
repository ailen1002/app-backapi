import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cats } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cats) private readonly catRepo: Repository<Cats>) {}

  async creatCat(cat: Cats): Promise<Cats> {
    delete cat.id;
    return this.catRepo.save(this.catRepo.create());
  }

  async deleteCat(id: number): Promise<void> {
    await this.findOneById(id);
  }

  async updateCat(id: number, cat: Cats): Promise<void> {
    const existCat = await this.findOneById(id);
    existCat.nickname = cat && cat.nickname ? cat.nickname : existCat.nickname;
    existCat.species = cat && cat.species ? cat.species : existCat.species;
    this.catRepo.save(existCat);
  }

  async findOneCat(id: number): Promise<Cats> {
    return this.findOneById(id);
  }

  private async findOneById(id: number): Promise<Cats> {
    const catInfo = await this.catRepo.findOne(id);
    if (!catInfo) {
      throw new HttpException(`制定 id=${id} 的猫猫不存在`, 404);
    }
    return catInfo;
  }
}
