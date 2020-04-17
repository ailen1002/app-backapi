import { CategoryDto } from './category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto extends CategoryDto {
  @ApiProperty({ required: true, description: '分类标题' })
  @IsString({ message: '必须是字符类型' })
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;
}
