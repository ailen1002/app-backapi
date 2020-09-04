import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pokemonEntity } from './pokemon.entity';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([ pokemonEntity ]) ],
  providers: [PokemonService],
  controllers: [PokemonController]
})
export class PokemonModule {}
