/*
1) En utilisant les données DataStudents et la clé average, créez un Map puis calculez la moyenne de chaque étudiant.
Les valeurs seront données avec une précision de deux décimales après la virgule.

2) Mettez à jour la mention en fonction de la moyenne obtenue,
voir la clé mention dans les données.
Pour les différentes moyennes vous utiliserez le code d'attribution de la mentions suivant :

-TB pour 17 à 20
-B pour 14 à 16
-AB pour 12 à 13
-P pour 10 à 11
-Pour les autres cas ne mettre aucune mention.

3) Créez un script qui permet d'ajouter un étudiant avec la convention de clé suivante :
sX, où X représente un nombre.
Vérifiez avant l'ajout que la clé n'existe pas dans le littéral.
 */

const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

// création du Map
const dataStMap = new Map(DataStudents);

const average = notes => {
    if (notes.length === 0) return null

    return Math.floor((notes.reduce((acc, curr) => acc + curr, 0) / notes.length) * 100) / 100;
}

for (const [id, student] of dataStMap) {
    const {notes} = student;
    const avg = average(notes)
    student.average = avg

    if (avg >= 17) {student.mention = 'TB'; continue;}
    if (avg >= 14) {student.mention = 'B'; continue;}
    if (avg >= 12) {student.mention = 'AB'; continue;}
    if (avg >= 10) {student.mention = 'P';}
}

console.log(dataStMap)

function addStudent(number, student) {
    if (dataStMap.has(`s${number}`)) return new Error(`la clé s${number} existe déjà`)

    return dataStMap.set(`s${number}`, student)
}

console.log(addStudent( 7, {
    name: "Test",
    mention: "",
    notes: [14.5, 19, 18],
    average : null,
    url: "http://lorempixel.com/100/100/cats/3"
}))

/*
Sujet 01 Population intérêts et analyse de données
 En utilisant les données ci-dessous dans la variable populations.

1) Comptez tous les docteurs.

2) Récupérez les noms des développeurs fullstack.

3) Récupérez les noms des personnes qui n'ont jamais travaillé.

4) Etudiez les mots de passe de chaque personne,
comptez leurs occurences pour chaque lettre distincte.

5) (Facultatif) Sélectionnez les personnes qui ont des mots de passe avec un nombre de lettre très différents,
chaque mot de passe fait exactement 9 caractères.
Puis, repérez les/le mot(s) de passe qui contiennent/contient un double 00.
Y-a-t-il des mots de passe identique ?
Si oui précisez le nom des personnes possédant ces mots de passe.

 */

const populations = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
    { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
    { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "tyeedsa00"},
    { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
    { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
    { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
    { id: 12, name: "Ian", password : "Axgkj00Kl" },
];

const doctorNb = populations
    .filter(person => person.jobs !== undefined)
    .filter(person => person.jobs.includes('doctor'))
    .length

console.log(`Il y a ${doctorNb} docteur`)

const devNames = populations
    .filter(person => person.jobs !== undefined)
    .filter(person => person.jobs.includes('dev fullstack'))
    .map(person => person.name)

console.group('Les developpeur fullstack')
    console.table(devNames)
console.groupEnd()

const noJobsNames = populations
    .filter(person => person.jobs === undefined || person.jobs.length === 0)
    .map(person => person.name)

console.group('Les chomeur')
console.table(noJobsNames)
console.groupEnd()

const ocurences = populations
    .filter(person => person.password !== undefined)
    .map(({password, name}) => {
        const letters = new Set(password)
        const chars = password.split('')
        const ocurence = [];
        for(const letter of letters) {
            ocurence.push( [letter, chars
                .filter(char => char === letter)
                .length])
        }
        return {
            name,
            password,
            ocurence
        }
    })

console.log(ocurences)
const ocurenceNbArray = []
for (const {name, password, ocurence} of ocurences) {
    const nb = ocurence.reduce((acc, curr) => {
        if (curr[1] !== 1) {
            return acc + curr[1] - 1
        }
        return acc
    }, 0)
    ocurenceNbArray.push({
        nb,
        name,
        password
    })
}

console.log(ocurenceNbArray)

const minOcurence = ocurenceNbArray.reduce((acc, curr) => {
    if (curr.nb < acc.nb) {
        return curr
    }
    return  acc
}).nb

console.log(minOcurence)

const personWithStrongPass = ocurenceNbArray.filter((person) => person.nb === minOcurence)

console.log(personWithStrongPass)

populations
    .filter((person) => person.password !== undefined)
    .forEach((person) => {
        const regex = new RegExp('00', 'g')
        if (person.password.match(regex)) {
            console.log(person)
        }
    })

const passwordRepetition = [];
populations
    .filter(person => person.password !== undefined)
    .forEach((person) => {
        if(passwordRepetition.length === 0) {
            passwordRepetition.push({
                password: person.password,
                persons: [person]
            })
        } else {
            let inserted = false
            passwordRepetition.forEach(({password, persons}) => {
                if (password === person.password) {
                    persons.push(person)
                    inserted = true
                }
            })
            if (inserted !== true) {
                passwordRepetition.push({
                    password: person.password,
                    persons: [person]
                })
            }
        }
    })

console.log(passwordRepetition)

passwordRepetition.forEach((pass) => {
    if(pass.persons.length > 1) {
        console.log(pass.persons, pass.password)
    }
})