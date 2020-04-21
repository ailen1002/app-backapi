import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cats {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
      comment: '自增ID'
  })
  id: number;

  /**
   * 昵称
   */
  @Column({
      comment: '昵称'
  })
  nickname: string;

  /**
   * 品种
   */
  @Column({
      comment: '品种'
  })
  species: string;
}
