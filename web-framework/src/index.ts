import { User } from "./models/User";

const user = new User({ id: 1, name: "dor", age: 35 });

user.set({ name: "ana2t" });

const user2 = new User({ name: "sdadasdr", age: 335 });

user2.save();

user.save();
