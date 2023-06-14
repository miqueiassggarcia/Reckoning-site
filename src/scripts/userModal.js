function userModal () {
  let usuario = JSON.parse(localStorage.getItem("dadosUsuario"))
  let html;

  if(usuario) {
    html = `<form method="dialog">
              <button onclick="user.close()">X</button>
              <div>
                <span>${usuario.nome}</span>
                <a href="pages/conta.html">Conta</a>
                <button onclick="logOut()">Logout</button>
              </div>
            </form>`
  } else {
    html = `<form method="dialog">
              <button onclick="user.close()">X</button>
              <div>
                <a href="pages/singin.html">Singin</a>
                <a href="pages/singup.html">Singup</a>
              </div>
            </form>`
  }

  let container = document.querySelector('#user');
  container.innerHTML = html;
}