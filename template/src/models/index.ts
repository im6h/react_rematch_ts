import { Models } from '@rematch/core'
import { questions } from './questions'
import { pokemon } from './pokemon'

export interface RootModel extends Models<RootModel> {
  pokemon: typeof pokemon
  questions: typeof questions
}
export const models: RootModel = { pokemon, questions }
