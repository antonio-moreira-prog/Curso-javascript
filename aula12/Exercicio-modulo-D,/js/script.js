function carregar(){
    var imge = document.getElementById('imagem')
    var horas = document.querySelector(`div#msg`)
    var data = new Date()
    var hora = data.getHours()
    horas.innerHTML = `Agora são ${hora}.`
    if(hora >= 0 && hora < 12){
        imge.src = 'dia.png'
        document.body.style.backgroundColor = '#b3c9e1'
    }else
        if(hora >= 12 && hora < 18){
            imge.src = 'tarde.png'
            document.body.style.backgroundColor ='#f23a0b'
        }else
            if(hora >= 18 && hora < 24){
                imge.src = 'noite.png'
                document.body.style.backgroundColor = '#01293f'
            }
}


