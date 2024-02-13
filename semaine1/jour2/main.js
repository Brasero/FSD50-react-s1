let array = ["info1"]

let array2 = new Array(0)


//Exercice 1 : Référence Array

/*
1. Reprenez la variable "fruits" ci-dessous. Que vaut le console.log dans l'exemple suivant? Affichez le contenu des deux tableaux :
 */

let fruits =  ['Apple', 'Orange'];
let newFruit = fruits.map((fruit) => fruit)

/*
Exercice 2 : Cube number

Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs.
 */

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cubeNumbers = []
numbers.map((num) => {
    if(!(num % 2 === 0)) {

        cubeNumbers.push(num ** 3);
    }
})

console.log(cubeNumbers)*/

/*
Exercice 3 : Population

1) Parcourez le tableau populations et ajoutez un champ count qui compte le nombre d'occurence(s) de a et de l dans les noms. Utilisez un for of.

2) Ordonnez maintenant le tableau par ordre croissant de nombre de a et l dans les noms.
*/

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "John" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexandra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

// partie 1

for (const pop of populations) {
    const { name } = pop;
    const letters = [...name]
    const count = letters.reduce((acc, current) => ["a", "l"].includes( current.toLowerCase() ) ? acc += 1 : acc, 0);

    pop.count = count;
}

console.log(populations);

// partie 2

populations.sort((p1, p2) => p1.count - p2.count)

console.log(populations);

/*
Exercice 4 : Max

Soit le tableau d'entiers suivant :


const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

//Utilisez la méthode reduce pour calculer le max.

const maxNumber = numbers.reduce((acc, curent) => Math.max(acc, curent), 0)

console.log(maxNumber)
*/
/*
05 Exercice reduce sum impair (challenge)
Faites la somme des nombres impairs en utilisant la fonction reduce des valeurs suivantes :
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOdd = numbers.reduce((acc, current) => current % 2 ? acc + current : acc, 0);

console.log(sumOdd);

/*
06 Exercice fonction map sur un littéral
Utilisez la fonction map pour calculer le prix TTC des téléphones
 */

const phones = [
    { name: "iphone XX", priceHT: 900, stock: 15 },
    { name: "iphone X", priceHT: 700, stock: 18 },
    { name: "iphone B", priceHT: 200, stock: 12 },
];

const ttc = (ht) => Math.floor(ht * (1+.2) * 100) / 100;

const pricesTTC = phones.map((phone) => ttc(phone.priceHT));

console.log(pricesTTC);

const pricesTTC_V2 = phones.map(phone => ({name: phone.name, priceHT: phone.priceHT, priceTTC: ttc(phone.priceHT)}))

console.log(pricesTTC_V2);

const pricesTTC_V3 = phones.map(phone => ({...phone, priceTTC: ttc(phone.priceHT)}))

console.log(pricesTTC_V3);