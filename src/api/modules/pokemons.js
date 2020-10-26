import { ApiClient } from '@/services/client';

let client = new ApiClient();

export default {
  get(obj) {
    return client.get(`https://pokeapi.co/api/v2/pokemon/${obj}`);
  },
};
