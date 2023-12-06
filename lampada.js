const ligar = document.querySelector('.ligar')
const desligar = document.querySelector('.desligar')
let imagem = document.querySelector('.imagem')
const restaurar = document.querySelector('.restaurar')


ligar.addEventListener('click', ()=> {
    if (!lampadaQuebrada()){
        imagem.setAttribute('src','/assets/img/ligada.jpg' )
    }else{
        alert('Lâmpada Quebrada não Liga Zé')

    }
})

desligar.addEventListener('click', function(){
    if (!lampadaQuebrada()){
        imagem.setAttribute('src', '/assets/img/desligada.jpg')
    }else{
        alert('Lâmpada Quebrada também não Desliga Zé')
    }
})

imagem.addEventListener('dblclick', ()=> {
    imagem.setAttribute('src', '/assets/img/quebrada.jpg')
    
})

restaurar.addEventListener('click', ()=> {
    location.reload()
})

function lampadaQuebrada(){
    return imagem.src.indexOf ('quebrada') > -1
    //indexOf retorna true ou false
}


