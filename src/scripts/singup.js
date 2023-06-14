async function singup(nome, email, senha) {
  let usuario;
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
  
  usuario = await res.json();
  status = res.status;

  if(status == 201) {
    localStorage.setItem("usuarioId", usuario.idUsuario)
    delete usuario.idUsuario;
    localStorage.setItem("dadosUsuario", JSON.stringify(usuario))

    window.location.replace(`${url}:5500/src`);
  } else if(status == 2) {

  }
}