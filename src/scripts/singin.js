async function singin(email, senha) {
  let obj;
  let status;

  const res = await fetch(`${global.url}:3333/singin`, {
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
  status = res.status;

  return [obj, status];
}