function somar(){
    var tn1 = document.getElementById('txtn1')

    var tn2 = document.getElementById('txtn2')

    var var1 = Number(tn1.value)
    var var2 = Number(tn2.value)

    var soma = (var1 + var2)

    document.write(`${soma}`)
}