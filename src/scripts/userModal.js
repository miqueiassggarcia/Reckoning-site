function userModal () {
  let usuario = JSON.parse(localStorage.getItem("dadosUsuario"))
  let html;

  if(usuario) {
    html = `<form method="dialog">
              <button onclick="user.close()">X</button>
              <span>${usuario.nome}</span>
              <button onclick="logOut()">sair</button>
            </form>`
  } else {
    html = `<form method="dialog">
              <button onclick="user.close()">close</button>
              <a href="pages/singin.html">Singin</a>
              <a href="pages/singup.html">Singup</a>
            </form>`
  }

  let container = document.querySelector('#user');
  container.innerHTML = html;
}