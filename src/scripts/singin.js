async function singin(email, senha) {
  let obj;

  const res = await fetch("http://10.0.0.124:3333/singin", {
      method: "POST",
      body: JSON.stringify({
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