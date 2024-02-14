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

/*
07 Exercice square numbers
Soit le point A suivant, calculez la distance de ce point à l'ensemble de chaques points de la liste positions.
Vous donnerez les résultats dans un nouveau tableau distances.
 */

const A = [8.3, 7.5];
const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];

/*
1) Rappelons comment on effectue le calcul de la distance avec une précision de deux chiffres après la virgule :
 */

const X = [1,2];
const B = [4,1.5];

const d = Math.floor( Math.sqrt( (X[0] - B[0] )**2 + (X[1] - B[1] )**2 ) * 100) / 100 ;

//2) Trouver le point le plus éloigné du point A

const calcDist = (a, b) => Math.floor( Math.sqrt( (a[0] - b[0] )**2 + (a[1] - b[1] )**2 ) * 100) / 100 ;

for (const [x, y] of positions) {
    distances.push({
        point: [x, y],
        distance: calcDist(A, [x, y])
    })
}

console.log(distances);
let futherPoint = {p: null, d: 0}

for (const {point, distance} of distances) {
    if(distance > futherPoint.d) {
        futherPoint.d = distance
        futherPoint.p = point
    }
}

console.log(futherPoint)

/*
08 Exercice string
1) Inversez la chaîne de caractères sentence ci-après.

2) Comptez le nombre de caractères de chaque mot.

3) Faites un script qui prend en argument une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot. Vous ne compterez pas les espaces comme un caractère.

Indication : utilisez la méthode split pour transformer la chaîne de caractères en tableau.
 */

const sentence = "Bonjour tout le monde, vous aimez JS ?";

// partie 1 : Version Algorithmique

const newSentence = [...sentence];
let str = '';
while (newSentence.length > 0) {
    str += newSentence.pop();
}

console.log(str);

//partie 1 : Version native

str = [...sentence].reverse().join('');
console.log(str);

//partie 2
const words = sentence.split(' ').map(word => ({word, count: word.length}))
console.log(words);

//partie 3
const countChar = (sentence) => {
    return sentence.split(' ').map(word => ({word, count: word.length}))
}

const phrase = 'Test de fonction';
console.log(countChar(phrase));

/*
09 Exercice count letters
Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données lisible.

Généralisez et créez maintenant une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre d'occurences de chacune de ses lettres.
 */

const word = "Mississipi";
let stats = {};

const searchLetters = new Set(word);

console.log(searchLetters)

for (const letter of searchLetters) {
    let count = 0;

    for(const p of word) {
        if(letter == p) count++
    }

    stats[letter] = count;
}

console.log(stats)

stats = {};

[...searchLetters].map(letter => {
    const regex = new RegExp(letter, "g");
    stats = {...stats, [letter]: word.match(regex).length}
})

const calcOccurance = (word) => {
    let stats = {}
    const searchLetters = new Set(word);
    [...searchLetters].map(letter => {
        const regex = new RegExp(letter, 'g');
        stats = {...stats, [letter]: word.match(regex).length}
    })
    return stats;
}

console.log(calcOccurance('blabla'))

/*
10 Exercice count digit
Soit la chaîne de caractères suivante, récupérez tous les numériques de cette chaîne dans un tableau :
 */

const phrases = '8790:bonjour le monde:8987:7777:Hello World:9007';

const nums = phrases.split(':').filter(Number)

console.log(nums);