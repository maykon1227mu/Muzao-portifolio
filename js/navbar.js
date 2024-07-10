
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header');
    let imagem = this.document.querySelector('#imgnavbar');
    
    if (window.scrollY > 0) {
        header.classList.add('rolagemnavbar');
        imagem.src = "./assents/logonavbar-Claro.png";  // Substitua pelo caminho da sua logo clara
    } else {
        header.classList.remove('rolagemnavbar');
        imagem.src = "./assents/logonavbar-Escuro.png"; // Substitua pelo caminho da sua logo escura
    }
});
