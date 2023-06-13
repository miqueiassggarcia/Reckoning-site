async function verificarUsuario() {
  let usuario = localStorage.getItem("usuarioId");

  if(usuario) {
      let dadosUsuario = await fetch(`${url}:3333/usuario/${usuario}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      })

      let status = dadosUsuario.status;
      let dados = await dadosUsuario.json();

      if(status == 200) {
        localStorage.setItem("dadosUsuario", JSON.stringify(dados));
        window.location.replace(`${url}:5500/src`);
      } else if (status == 404) {
        localStorage.removeItem("usuarioId");
      }
  }
}