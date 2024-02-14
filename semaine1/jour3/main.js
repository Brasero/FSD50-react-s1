const array = [10, 25];
let [b, a] = array

console.log(a, b)

let rest;
const array2 = [10, 24, 678, 897, 23];

[a, b, ...rest] = array2

console.log(a,b,rest);

[,,,a,b] = array2

console.log(a,b)

const student = {mention: "AB", name: 'Franck', note: 12};
const {note: n, mention: m} = student

console.log({m, n})

const st = {
    name: 'Antoine',
    family: {
        sister: 'Alex',
        mother: "Cassandra"
    },
    age: 49
};

const {
    name,
    family: {sister}
} = st

console.log(name, sister)

const infoStudent = ({name, mention}) => `info : ${mention}, nom: ${name}`

console.log(infoStudent(student))

/*
01 Exercice permutations
Permutez les valeurs a et b suivantes :
 */

a = 1;
b = 2;
let c = 4;

[b, a] = [a, b];

console.log(a,b);

[a,b] = [1,2];

[b,c,a] = [a,b,c];

console.log(a,b,c);

/*
02 Exercice assigner par décomposition
Calculez la moyenne des notes de l'étudiant. Modifiez la référence du littéral.

Puis assignez les valeurs name, notes et average
dans les constantes name, notes et average dans le script courant.
 */

const student2 = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
};

const avg = Math.floor((student2.notes.reduce((acc, curr) => curr + acc, 0) / student2.notes.length) * 100) / 100;

console.log(avg);

student2.average = avg;

const studentCopy = {...student2}

console.log(studentCopy === student2)


const copyAndCalcStudent = (student) => {
    if (student.notes.length === 0) return "Pas de notes";

    const avg = Math.floor((student.notes.reduce((acc, curr) => curr + acc, 0) / student.notes.length) * 100) / 100

    const newStudent = {...student}
    newStudent.average = avg
    return newStudent
}

console.log(copyAndCalcStudent(student2))

console.log(copyAndCalcStudent(student2) === student2)

/*
03 Exercice iterate destructuring
Affichez le nom et le nom de la soeur de chaque étudiant
en utilisant une boucle for of dans le littéral students :

// Nom : Alan soeur : Sylvie
 */

const students = [
    {
        name: "Alan",
        family: {
            mother: "Yvette",
            father: "Paul",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Martine",
            father: "Cécile",
            sister: "Sophie",
        },
        age: 55,
    },
];

for( const student of students) {
    console.log(`Nom : ${student.name} Soeur : ${student.family.sister}`)
}

for (const {name, family} of students) {
    console.log(`Nom : ${name} Soeur : ${family.sister}`)
}

for (const {name, family: {sister}} of students) {
    console.log(`Nom : ${name} Soeur ${sister}`)
}

let numbers1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let numbers2 = [11, 12, 13];

let numMerge = numbers1.concat(...numbers2)

console.log(numMerge)

numMerge = [...numbers1, ...numbers2];

console.log(numMerge)

const st1 = { s1: "Alan", s2: "Alice" };
const st2 = { s3: "Bernard", s4: "Sophie" };

const stMerge = {...st2, ...st1}

console.log(stMerge)

const st11 = { s1: "Alan", s2: "Alice" };
const st22 = { s2: "Bernard", s4: "Sophie" };

const stMerge2 = {...st11, ...st22}

console.log(stMerge2)

const state = {
    name: "",
    age: 25,
    email: 'marc@marc.fr'
}

state.email = 'test@test.fr'

console.log(state)

const newState = {...state, email: 'sophie@sophie.fr'}

console.log(newState)

/*
04 Exercice push value
Soient les données suivantes. Créez un tableau strNumbers et pushez-y chacune de ses valeurs.
*/

const str1 = ["one", "two"];
const str2 = ["three", "four"];

const strNumbers = [...str1, ...str2];
console.log(strNumbers)

/*
06 Challenge Exercice accumulator
Créez une fonction récursive permettant de retourner la somme des nombres d'un tableau de valeurs numériques.
Utilisez un paramètre facultatif pour accumuler les valeurs de la somme.
Ce paramètre sera initialisé à zéro.

Utilisez la méthode shift() qui permet de dépiler la première valeur d'un tableau.
Dans votre fonction récursive définissez une condition d'arrêt,
sinon la fonction continuera de s'appeler elle-même indéfiniment (Stack Overflow).
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
//numbers.shift();

function accumulator(numbers, acc = 0) {
    if (numbers.length === 0) return acc;

    acc = acc + numbers.shift();

    return accumulator(numbers, acc);
}

console.log(accumulator(numbers)); // doit retourner 55

/*
07 Challenge deep copy
Faites une copie profonde de l'objet suivant :
*/

const students3 = [
    {
        name: "Alan",
        family: {
            mother: "Yvette",
            father: "Paul",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Martine",
            father: "Cécile",
            sister: "Sophie",
        },
        age: 55,
    },
];

const copy = students3.map((student) => {
    const {name, family, age} = student;
    const newFamily = { ...family }
    return {name, family: newFamily, age}
})

const spreadCopy = [{...students3}]

console.log(copy === students3)
console.log(copy[0].family === students3[0].family)
console.log(spreadCopy === students3)
console.log(spreadCopy[0].family === students3[0].family)
console.log(spreadCopy, students3)