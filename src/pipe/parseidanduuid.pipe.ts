import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import { Validator } from 'class-validator';

@Injectable()
export class ParseidanduuidPipe implements PipeTransform {
  public validator: Validator;
  constructor () {
    this.validator = new Validator();
  }
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isNaN(parseInt(value, 10)) || this.validator.isUUID(value)) {
      return value;
    } else {
      throw new HttpException(`传递的id必须是整形或者是uuid字符串,你传递的是:${value}`, HttpStatus.BAD_REQUEST);
    }
  }
}
