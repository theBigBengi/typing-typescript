export class Attributes<T extends object> {
  constructor(private data: T) {}

  // Setting up a generic CONSTRAINT
  // K can only be one of the keys of type T
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (properties: T): void => {
    Object.assign(this.data, properties);
  };

  getAll(): T {
    return this.data;
  }
}
