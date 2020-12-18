function converter(){
    let c = Number(prompt('Digite uma temperatura em °C (Ceksius)'))

    let temp = document.querySelector('h1#temptxt')
    temp.innerHTML = `A temperatura de ${c.toFixed(2).replace('.',',')}°C, corresponde a...`
    let k = c + 273.15
    let f = (c * 1.8) + 32
    let res = document.querySelector('p#res1')
    res.innerHTML = `${k.toFixed(2).replace('.', ',')}°K (Kelvin)`
    
    res.innerHTML += ` ${f.toFixed(2).replace('.', ',')}°F (Fahrenheit)`
    
}