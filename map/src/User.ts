import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    (this.name = faker.name.firstName()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }

  markerContent(): string {
    return `
    <div>
    <h1>${this.name}</h1>
    <h3>Hi there</h3>
    </div>
    `;
  }
}
