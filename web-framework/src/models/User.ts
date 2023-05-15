import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private eventing: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>();
  private attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.eventing.on;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.eventing.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (!id) throw new Error("no id");

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll()).then((response: AxiosResponse) => {
      this.eventing.trigger("save");
      console.log(response.data);
    });
  }
}
