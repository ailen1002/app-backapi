import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { pokemonEntity } from './pokemon.entity';
import { PokemonService } from './pokemon.service';

@Crud({
  model: { type: pokemonEntity },
  params: {
    id:{
      field: 'id',
      type: 'uuid',
      primary: true
    }
  }
})
@Controller('pokemon')
export class PokemonController {
  constructor(public service: PokemonService) {}
}
