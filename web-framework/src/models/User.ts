import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propertyName: string): number | string {
    return this.data[propertyName];
  }

  set(properties: UserProps): void {
    Object.assign(this.data, properties);
  }

  on(eventName: string, callback: Callback): void {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers) return;

    handlers.forEach((h) => h());
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => this.set(response.data))
      .catch((err) => console.log(err));
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
