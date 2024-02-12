// let foo = 1;
//
// foo = foo + "2";
//
// let array = [1,2,4]
//
// array.push(5)
//
// //Les types primitifs
// /*
// Boolean (true, false, 0, 1)
// null
// undefined
// number
// bigInt (2n + 100n)
// string
// symbole
//  */
//
// let collection = new Set([1,2,2,3,3]);
//
// let map = new Map();
// map.set('val1', 12)
// map.set("val2", 14);
//
// console.log(collection.entries());
// console.log(map.get('val1'));
//
// class Model {
//     name;
//     attributes;
//
//     constructor(name) {
//         this.name = name
//     }
//
//     getName() {console.log(this.name)}
// }
//
// const model = new Model('user')
// model.getName();
//
// //let a = 9
// function scope () {
//
//     //console.log(a);
// }
//
// scope()
//
// //console.log(a);
//
// let n = "25";
// let x = 12;
// console.log("Somme : " + (n + x) + " et \n multiplication : " + (n + x) + ".")
//
// console.log(`Somme : ${n + x} et multiplication ${n*x}`)
//
// const bool = false;
//
// console.log(bool ? 'ok' : 'faux')
//
// let number = 23;
//
// console.log(`Vous avez ${number} ans , vous êtes ${number >= 18 ?
//     (number >= 25 ?
//         'vieux'
//         :
//         "majeur")
//     :
//     'mineur'}`)

/*
01 Exercice scope calcul (sans coder)
Est ce que le code qui suit vous semble correcte ? Répondre sans exécuter le code. Si ce dernier n'est pas valide modifiez-le afin qu'il puisse s'exécuter correctement.


let c = 1;

function calcul() {
   let a = 2 + c;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();
*/

/*
02 Exercice TDZ (temporal dead zone) (sans coder)
Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

function tdz() {
    let tdz_val = "Temporal Dead Zone";
    console.log(tdz_val);

}

tdz();
*/

/*
03 Exercice for let (sans coder)
Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.
let i = 100;

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);
*/
//
// const STUDENTS = ['bernard', "Sophie", 'Michel']
//
// STUDENTS.push('josianne')
//
// console.log(STUDENTS);
//
// for(const student of STUDENTS) {
//     console.log(student)
// }
//
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
//
// console.log('Exemple')
// function exemple() {
//     var x = 10;
//     if(true) {
//         var x = 2;
//         console.log(x)
//     }
//     console.log(x)
// }
//
// function exempleLet() {
//     let x = 10;
//     if(true) {
//         let x = 2;
//         console.log(x)
//     }
//     console.log(x)
// }
//
// exemple()
// exempleLet()

// function add(a, b = 1) {
//     console.log(a + b)
// }
//
// add(5)
// add(4, 7)
//
// function minus() {
//     console.log(arguments[0])
// }
//
// minus()

// function ttc(ht, tva = .2) {
//     if (isNaN(parseFloat(ht)) || isNaN(parseFloat(tva))) return 'Un paramètre n\'a pas le bon type, merci de ne saisir que des nombres';
//
//     return Math.floor((ht * (1 + tva)) * 100) / 100;
// }
//
// console.log(ttc(100))
// console.log(ttc(100, .3))
//
// console.log(ttc('100'))
//
// console.log(ttc("hello", .5))
//
// function sum(a,b,c) {
//     return a+b+c;
// }
//
// console.log(sum(3, 5, 12))
//
// const numbers = [2, 5, 10];
// console.log(sum(numbers[0], numbers[1], numbers[2]))
//
// console.log(sum(...numbers)) // console.log(sum(2, 5, 10))

// function sumTTC(...numbers) {
//     const tva = .2
//     if (isNaN(parseFloat(numbers[0])) || isNaN(parseFloat(numbers[1])) || isNaN(parseFloat(numbers[2])) || isNaN(parseFloat(numbers[3]))) return 'Erreur de type'
//
//     return Math.floor((numbers[0] + numbers[1] + numbers[2]) * (1+numbers[3]) * 100) / 100
// }
//
// const numbers = [125.99, 212.45, 14.99, .2];
//
// console.log(sumTTC(...numbers));

// function bar({a,b}) {
//     console.log(a, b)
// }
//
//
// bar({b: 12, a: 'hello'})