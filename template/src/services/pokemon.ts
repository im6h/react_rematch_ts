import axios from 'axios'

class Pokemon {
  async getPokemons() {
    return axios.get('url')
  }
}
export default new Pokemon()
