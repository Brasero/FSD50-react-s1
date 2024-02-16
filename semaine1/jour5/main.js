console.log('hello')

setTimeout(() => console.log('ti'), 500)

console.log('End')

/*
02 Exercice additions callback
En utilisant deux fois la fonction add qui est asynchrone
et avec sa fonction de callback additionner 1 et 2
 */

const add = (number, callback) => {
    if(isNaN(parseFloat(number))) {
        throw new Error('Ce n\'est pas une valeur numérique')
    }
    setTimeout(() => {
        callback(number)
    }, 1000);
}
let num = 0;

add(num, function(num) {
    num += 1;
    console.log(num)
    add(num, function(resultat) {
        resultat += 2
        console.log(resultat)
        add(resultat, function(res) {
            res += 3;
            console.log(res)
        })
    })
})