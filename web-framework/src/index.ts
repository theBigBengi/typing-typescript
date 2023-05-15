import { User } from "./models/User";

const user = new User({ id: 1, name: "dor", age: 35 });

const user2 = new User({ name: "sdadasdr", age: 335 });

user2.on("change", () => console.log("changed"));

user2.set({ name: "titi" });
