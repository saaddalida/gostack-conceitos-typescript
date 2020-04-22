// name?: == variavel opcional
// techs: Array<string | TechObject> com novo interface ou techs: string[]

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>
}

export default function createUser({name, email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}