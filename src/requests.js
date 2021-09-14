export async function login(username, password) {
  const result = await fetch('/users.json');
  const verifyUser = result.json();
  return verifyUser.find(user => user.password === password.value && user.username === username.value)

}

export async function getUser() {

  const result = await fetch('/current.json');
  const user = await result.json();
  return user

};
