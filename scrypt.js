//Div da pesquisa só aparecer quando clicado
function pesquisa() {
    var caixa = document.getElementById('procurar')
    
    caixa.style.top  = " 0px";
    caixa.style.display = "flex";

    const buraco = document.getElementById('espaco')

    buraco.style.display = "none"
}

function fechar() {
    var caixa = document.getElementById('procurar')
    
    caixa.style.top  = " -300px";
}