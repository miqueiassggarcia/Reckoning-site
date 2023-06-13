async function verificarUsuario() {
  let usuario = localStorage.getItem("usuarioId");

  if(usuario) {
      let dadosUsuario = await fetch(`http://localhost:3333/usuario/${usuario}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
      })

      let status = dadosUsuario.status;
      let dados = await dadosUsuario.json();

      if(status == 200) {
        localStorage.setItem("dadosUsuario", JSON.stringify(dados));
        window.location.replace("http://10.0.0.124:5500/src");
      } else if (status == 404) {
        localStorage.removeItem("usuarioId");
      }
  }
}

async function singin(email, senha) {
  let obj;
  let status;

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
  status = res.status;

  return [obj, status];
}