import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Validator } from 'class-validator';
@Injectable()

export class BaseService {
  private tableModel: any
  public validator: Validator;
  constructor (tableModel: Repository<any>) {
    this.tableModel = tableModel;
    this.validator = new Validator();
  }

  public isUUID(id: string): boolean {
    return this.validator.isUUID(id);
  }

  public isInt(id: string): boolean {
    return this.validator.isInt(Number(id));
  }

  public async save(entity: any, options?: any): Promise<any> {
    return this.tableModel.save(entity, options);
  }

  public async create(data: object): Promise<any> {
    return await this.tableModel.create(data);
  }

  public async findOne(options?: object): Promise<any | undefined> {
    return await this.tableModel.findOne({ where: options });
  }

  public async findById(id: string): Promise<any> {
    if (this.isUUID(id)) {
      return await this.tableModel.findOne({ uuid: id });
    } else if (this.isInt(id)) {
      return await this.tableModel.findOne({ id });
    } else {
      throw new HttpException(`传递的id必须是整形或者是uuid字符串,你传递的是:${id}`, HttpStatus.OK);
    }
  }

  public async findPage(options?: { [propsName: string]: any }): Promise<any> {
    let { pageSize, pageNumber, ...others } = options;
    pageSize = pageSize || 10;
    pageNumber = pageNumber || 1;
    if (!this.validator.isInt(Number(pageSize)) || !this.validator.isInt(Number(pageNumber))) {
      throw new HttpException(`传递的pageSize:${pageSize},pageNumber:${pageNumber}其中一个不是整数`, HttpStatus.OK);
    } else {
      const [data, total] = await this.tableModel.findAndCount({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        order: {
          createdAt: 'DESC',
        },
        where: {
          ...others,
        }
      });
      return {
        data,
        total,
        pageNumber,
        pageSize,
      };
    }
  }

  public async deleteById(id: string): Promise<any> {
    if (this.validator.isUUID(id)) {
      return await this.tableModel.delete({ uuid: id });
    } else if (this.validator.isInt(Number.parseInt(id))) {
      return await this.tableModel.delete({ id });
    } else {
      throw new HttpException(`传递的id必须是整形或者是uuid字符串,你传递的是:${id}`, HttpStatus.OK);
    }
  }

  public async updateById(id: string, data: any): Promise<any> {
    if (this.isUUID(id)) {
      return await this.tableModel.update({ uuid: id }, data);
    } else if (this.isInt(id)) {
      return await this.tableModel.update({ id }, data);
    } else {
      throw new HttpException(`传递的id必须是整形或者是uuid字符串,你传递的是:${id}`, HttpStatus.OK);
    }
  }
}
