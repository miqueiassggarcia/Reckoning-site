function logOut() {
  localStorage.removeItem("usuarioId")
  localStorage.removeItem("dadosUsuario")
  location.reload();
}