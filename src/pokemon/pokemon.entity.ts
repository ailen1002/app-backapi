import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('pokemon')
export class pokemonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', {length: 500, unique: true})
  name: string

  @Column('varchar', {length: 500})
  type: string

  @Column('numeric')
  pokedex: number
}
