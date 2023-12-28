function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "Alt",
      "Lula molusco com cara de bebê e olhos gigantes brilhando"
    )
  }
  //se tiver normal, manter a imagem
  else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "Lula molusco levantando da cama com cara neutra")
  }
}
