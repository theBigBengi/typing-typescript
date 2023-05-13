import { User } from "./models/User";

const user = new User({ name: "dor", age: 35 });

console.log(user.get("name"));

user.set({ name: "anat" });
console.log(user.get("name"));
console.log(user.get("age"));
