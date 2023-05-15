import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  fetch(id: number): AxiosPromise {
    return axios.get(`http://localhost:3000/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`http://localhost:3000/users/${id}`, data);
    } else {
      return axios.post(`http://localhost:3000/users`, data);
    }
  }
}
