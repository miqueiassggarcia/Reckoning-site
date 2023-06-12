function autoAjust(element) {
    element.style.height = "6px";
    element.style.height = (element.scrollHeight)+"px";
}


window.onload = () => {
    const header = document.getElementById("cabecalho")

    const tamanhoTela = document.getElementById('tela-inicial').clientHeight
    
    window.addEventListener("scroll", () => {
        if(window.scrollY > tamanhoTela) {
            header.classList.add("mudar-header")
        } else {
            header.classList.remove("mudar-header")
        }
    })

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let element = document.querySelector(this.getAttribute("href")).offsetTop
            window.scrollTo({
                top: element - document.getElementById('cabecalho').clientHeight,
                left: 0,
                behavior: "smooth",
            })
        })
    })
}