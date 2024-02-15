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

/*
03 sujet Challenge populations

1) Ordonnez les données populations par ordre croissant de longueur de nom.
2) Ajoutez une clé lenName aux éléments du tableau populations afin d'assigner la longueur de chaque nom à cette variable.
3) Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur.
 */

const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "John" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexandra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

//Vous pouvez présenter les résultats recherchés comme suit :
const exemple = [
    [ { id: 12, name: 'Ian', lenName: 3 } ],
    [
        { id: 0, name: 'Alan', lenName: 4 },
        { id: 2, name: 'John', lenName: 4 },
        { id: 5, name: 'Brad', lenName: 4 },
        { id: 6, name: 'Carl', lenName: 4 }
    ],
    [
        { id: 3, name: 'Brice', lenName: 5 },
        { id: 9, name: 'Edgar', lenName: 5 },
        { id: 10, name: 'Erika', lenName: 5 },
        { id: 11, name: 'Isaac', lenName: 5 }
    ],
    [
        { id: 1, name: 'Albert', lenName: 6 },
        { id: 7, name: 'Dallas', lenName: 6 },
        { id: 8, name: 'Dennis', lenName: 6 }
    ],
    [ { id: 4, name: 'Alexandra', lenName: 9 } ]
]

//1) Ordonnez les données populations par ordre croissant de longueur de nom.
populations.sort((p1, p2) => p1.name.length - p2.name.length)

console.log('Triage', populations)
//2) Ajoutez une clé lenName aux éléments du tableau populations afin d'assigner la longueur de chaque nom à cette variable.

for (const pop of populations) {
    pop.lenName = pop.name.length
}

console.log('lenName', populations)

//3) Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur.

const groupNames = [];
const lenNames = new Set(populations.map(pop => pop.lenName))

console.log('lenNames', lenNames)

for (const len of lenNames){
    groupNames.push(populations.filter(pop => pop.lenName === len))
}

console.log('groupName', groupNames)

const groupNames2 = [];
const testLen = []; //On stock toutes les longueurs déjà testée

for (const pop of populations) {
    const len = pop.lenName

    if (!testLen.includes(len)) {
        groupNames2.push(populations.filter(pop => pop.lenName === len))
    }

    testLen.push(len)
}

console.log('groupName2', groupNames2)

// 4) (Facultatif)
// Créez une clé relations au tableau populations et ajoutez pour chaque personne le nom de ses relations.
// Ordonnez-les par ordre croissant de nombre de relations.
// Affichez la personne qui a le plus de relations.

const relations = [
    { id : 0 , relation : [1, 2, 4]},
    { id : 3 , relation : [7, 8]},
    { id : 4 , relation : [2, 7, 8, 11]},
    { id : 5 , relation : [1, 2, 4]},
    { id : 7 , relation : [2, 3, 5, 9]},
    { id : 9 , relation : [1, 2, 4, 8, 11]},
    { id : 11 , relation : [1, 2, 9, 10,]},
]

for (const {id, relation} of relations) {
    const person = populations.find(pop => pop.id === id)

    if (person) {
        person.relation = populations.filter(pop => relation.includes(pop.id)).map(pop => pop.name)
    }
}

console.log('PopRelation', populations)

const mostRelation = populations.filter(pop => pop.relation !== undefined).reduce((acc, curr) => acc.relation.length > curr.relation.length ? acc : curr, {relation:[]})

console.log(mostRelation)