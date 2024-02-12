let foo = 1;

foo = foo + "2";

let array = [1,2,4]

array.push(5)

//Les types primitif
/*
Boolean (true, false, 0, 1)
null
undefined
number
bigInt (2n + 100n)
string
symbole
 */

let collection = new Set([1,2,2,3,3]);

let map = new Map();
map.set('val1', 12)
map.set("val2", 14);

console.log(collection.entries());
console.log(map.get('val1'));

class Model {
    name;
    attributes;

    constructor(name) {
        this.name = name
    }

    getName() {console.log(this.name)}
}

const model = new Model('user')
model.getName();

let a = 9
function scope () {

    console.log(a);
}

scope()

console.log(a);

let n = "25";
let x = 12;
console.log("Somme : " + (n + x) + " et \n multiplication : " + (n + x) + ".")

console.log(`Somme : ${n + x} et multiplication ${n*x}`)

const bool = false;

console.log(bool ? 'ok' : 'faux')

let number = 23;

console.log(`Vous avez ${number} ans , vous êtes ${number >= 18 ? 
    (number >= 25 ? 
        'vieux' 
        : 
        "majeur") 
    : 
    'mineur'}`)