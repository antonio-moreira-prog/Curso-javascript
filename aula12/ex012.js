var hora = 24
console.log(`Agora são extamente ${hora} horas.`)

if (hora > 5 && hora < 12){
    console.log(`bom dia`)
} else{
    if(hora >= 12 && hora < 19){
        console.log(`Boa tarde`)
    } else {
        if (hora >= 19 && hora <= 24){
            console.log(`Boa noite`)
        }else{
            console.log(`A hora está errada!`) 
        }   
    }
}