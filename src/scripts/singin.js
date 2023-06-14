async function singin(email, senha) {
  let usuario;
  let status;

  const res = await fetch(`${url}:3333/singin`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: senha
      }),
      headers: {
        'Content-Type': 'application/json',
      }
  })

  usuario = await res.json();
  status = res.status;

  if(status == 200) {
    localStorage.setItem("usuarioId", usuario.idUsuario)

    const dadosUsuario = await fetch(`${url}:3333/usuario/${usuario.idUsuario}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })

    let statusBusca = dadosUsuario.status;
    let dadosUsuarioJson = await dadosUsuario.json();

    if(statusBusca == 200) {
      localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuarioJson))

      window.location.replace(`${url}:5500/src`);
    }
  } else if(status == 401) {
    window.alert("Senha incorreta")
  } else if(status == 404) {
    window.alert("Email não existe")
  }
}