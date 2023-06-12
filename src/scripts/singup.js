async function singin(nome, email, senha) {
  let obj;

  const res = await fetch("http://10.0.0.124:3333/singup", {
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
  console.log(res.status)

  console.log(obj);

  return obj;
}