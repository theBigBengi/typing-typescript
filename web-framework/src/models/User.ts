interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propertyName: string): number | string {
    return this.data[propertyName];
  }

  set(properties: UserProps): void {
    Object.assign(this.data, properties);
  }
}
