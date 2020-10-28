import api from 'src/services/pokemon'
import { createModel } from '@rematch/core'
import { Pokemon } from './interface/pokemon'
import { RootModel } from '.'

type State = {
  pokemon: Pokemon
}

export const pokemon = createModel<RootModel>()({
  state: {
    pokemon: {},
  } as State,

  reducers: {
    setPokemons(state, payload: Pokemon) {
      return {
        ...state,
        payload,
      }
    },
  },

  effects: dispatch => ({
    async getPokemons() {
      const res = await api.getPokemons()
      if (res.status === 200 && res.data) {
        dispatch.pokemon.setPokemons(res.data)
      }
    },
  }),
})
