import fs from 'fs'

// function fileAsync (filePath) {
//     return new Promise((resolve, reject) => {
//         if (!fs.existsSync(filePath)) {
//             reject(new Error('Le fichier n\'existe pas'))
//         }
//         fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
//             // impossible de lire le fichier
//             if (err) {
//                 reject(new Error(`Lecture du fichier impossible : ${err}`));
//             }
//             // success
//             // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
//             resolve(JSON.parse(data))
//         })
//     })
// }
//
//
// fileAsync('./data/dragons.json')
//     .then((data) => {
//         const {dragons} = data
//         const oldestDragon = dragons.reduce((acc, curr) => {
//             return acc.age < curr.age ? curr : acc
//         })
//
//         console.log(`Le dragon le plus agé est : ${oldestDragon.name} avec ${oldestDragon.age} ans`)
//
//         const youngestDragon = dragons.reduce((acc, curr) => {
//             return acc.age < curr.age ? acc : curr
//         })
//
//         console.log(`Le dragon le plus jeune est : ${youngestDragon.name} avec ${youngestDragon.age} ans`)
//
//         console.log(dragons.sort((d1, d2) => d2.age - d1.age))
//     }).catch((err) => {
//     console.error(err)
//     console.log('erreur catché')
// })

const add = (number) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(parseFloat(number) != number || isNaN(parseFloat(number))) {
                reject(new Error('Ce n\'est pas une valeur numérique'))
            }
            resolve(number)
        }, 100)
    })
)

async function process() {
        let sum = 0
        const res1 =   await add(1)
        sum += res1
        const res2 = await add("tzst")
        sum += res2
        return sum
}

process()
    .then((sum) => console.log(sum))
    .catch((e) => console.error(e))

/*
Exercice anim
Soit la Promesse anim,
elle retournera une valeur aléatoire composée d'un chiffre de 1 à 9 et d'une lettre comprise entre A et X.

Executez 10 fois ce générateur pour construire une chaîne aléatoire
en utilisant la technique async/await décrite ci-dessus.
 */

function generateRandomValue () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const chiffre = Math.floor(Math.random() * 9) + 1;
            const letterCode = Math.floor(Math.random() * 24) + 65;// Génère une valeur ASCII de la lettre
            const lettre = String.fromCharCode(letterCode);// Transforme la valeur ASCII en un caractère
            resolve(chiffre + lettre)
        }, 100)
    })
}

async function generateRandomString () {
    let string = '';
    for(let i = 0; i < 10; i++) {
        const valeur = await generateRandomValue()
        string += valeur
    }
    return string;
}

generateRandomString()
    .then((string) => console.log(`Chaine aléatoire ${string}`))
    .catch((err) => console.error('une erreur s\'est produite', err))