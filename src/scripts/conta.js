function carregarUsuario() {
  let html;
  let dados = JSON.parse(localStorage.getItem("dadosUsuario"));

  html = `<h2>Dados do perfil:</h2>
          <span>Nome de usuário: ${dados.nome}</span>
          <span>Nome de usuário: ${dados.email}</span>`

  let container = document.querySelector('.dados');
  container.innerHTML = html;
}

async function deletarUsuario() {
  let idUsuario = localStorage.getItem("usuarioId")
  let status;
  let dados;

  if(idUsuario) {
    const res = await fetch(`${url}:3333/usuario/${idUsuario}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      }
    })

    dados = await res.json();
    status = res.status;

    if(status == 200) {
      localStorage.removeItem("usuarioId")
      localStorage.removeItem("dadosUsuario")
      window.alert("Usuário deletado");

      
      window.location.replace(`${url}:5500/src`);
    }
    console.log(dados)
  }
}