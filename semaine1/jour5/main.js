console.log('hello')

setTimeout(() => console.log('ti'), 500)

console.log('End')

/*
02 Exercice additions callback
En utilisant deux fois la fonction add qui est asynchrone
et avec sa fonction de callback additionner 1 et 2
 */

const add = (number, callback, error) => {
    console.log(parseFloat(number))
    if(isNaN(parseFloat(number)) || parseFloat(number) != number) {
        error("Ce n'est pas une valeur numérique")
    }
    setTimeout(() => {
        callback(number)
    }, 1000);
}
let num = 0;

const error = (err) => {
    throw new Error(err)
};

add(num, function(num) {
    num += 1;
    console.log(num)
    add(num, function(resultat) {
        resultat += "aze"
        console.log(resultat)
        add(resultat, function(res) {
            res += 3;
            console.log(res)
        }, error)
    }, error)
}, error)

const p = number => (new Promise((resolve, reject) => {
    setTimeout(() => {
        if(number > 100) {
            reject(new Error('too big'))
        }
        resolve(number)
    }, 1000)
}));

p(150)
    .then(num => console.log(num))
    .catch(error => console.error(error))

const add2 = (number) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(parseFloat(number) != number || isNaN(parseFloat(number))) {
                reject(new Error('Ce n\'est pas une valeur numérique'))
            }
            resolve(number)
        }, 100)
    })
)

Promise.all([add2(1), add2(2), add2(3)])
    .then((numbers) => {
        console.log(numbers)
        console.log(numbers.reduce((acc, curr) => acc + curr, 0))
    })

add2(1)
    .then((number) => add2(number + 'test'))
    .then((number) => console.log('then',number))
    .catch((err) => console.error(err))