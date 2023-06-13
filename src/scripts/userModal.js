function userModal () {
  let usuario = JSON.parse(localStorage.getItem("dadosUsuario"))
  let html;

  if(usuario) {
    html = `<form method="dialog">
              <span>${usuario.nome}</span>
              <button onclick="user.close()">close</button>
              <button onclick="logOut()">sair</button>
            </form>`
  } else {
    html = `<form method="dialog">
            <a href="pages/singin.html">Singin</a>
            <a href="pages/singup.html">Singup</a>
            <button onclick="user.close()">close</button>
          </form>`
  }

  let container = document.querySelector('#user');
  container.innerHTML = html;
}