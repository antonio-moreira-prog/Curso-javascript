function vel(){
    let txtv = document.querySelector('input#txtvel')
    let res = document.querySelector('div#res')
    let vell = Number(txtv.value) /*Essa é a conversão para núme*/
    res.innerHTML = `<p>
        A sua velocidade é <strong>${vell} Km/h</strong>.
    </p>`
    if(vell > 60){
        res.innerHTML += `<p>Você está dirigindo a ${vell} Km/h. Multado!</p>`
    } else{res.innerHTML += ` Diriga sempre com o cinto.`}
}