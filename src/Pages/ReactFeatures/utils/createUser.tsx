export function createUser(name: string, surname: string): { name: string; surname: string; } {
  const user = { name, surname };
  console.log(user);
  return user;
}
