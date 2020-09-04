import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { pokemonEntity } from './pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PokemonService extends TypeOrmCrudService<pokemonEntity> {
  constructor(@InjectRepository(pokemonEntity) repo) {
    super(repo)
  }
}
