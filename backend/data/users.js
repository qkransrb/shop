import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Customer1",
    email: "customer1@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: false,
  },
  {
    name: "Customer2",
    email: "customer2@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: false,
  },
];

export default users;
