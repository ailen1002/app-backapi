import { CategoryDto } from './category.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateCategoryDto extends CategoryDto {
  @ApiPropertyOptional({ required: true, description: '分类标题' })
  @IsString({ message: '必须是字符类型' })
  @IsOptional()
  readonly title?: string;
}
