import { createModel } from '@rematch/core'
import { RootModel } from '.'

export const questions = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload
    },
  },
  effects: dispatch => ({
    async incrementAsync(payload: number) {
      dispatch.questions.increment(payload)
    },
  }),
})
