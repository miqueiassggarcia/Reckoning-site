import { url } from "../globalUrl";

async function singup(nome, email, senha) {
  let obj;
  let status;

  const res = await fetch(`${url}:3333/singup`, {
      method: "POST",
      body: JSON.stringify({
          nome: nome,
          email: email,
          password: senha
      }),
      headers: {
          'Content-Type': 'application/json',
      }
  })

  obj = await res.json();
  status = res.status;

  return [obj, status];
}