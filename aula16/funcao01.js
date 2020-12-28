function parimpar(n){
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
var res = parimpar(856214)
console.log(res)
//Também pode ser assim direto, sem jogar na variável.
console.log(parimpar(856214))