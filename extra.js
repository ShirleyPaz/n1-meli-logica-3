// use Map, filter, forEach, find e ou Reduce.

//1
// let numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]
// // retorne numeros multiplos de 3
// numbers = numbers.filter( num => num % 3 == 0);
// console.log(numbers, 'apenas 3');

// // retorne numeros multiplos de 3 e de 5
// numbers = numbers.filter( num => num % 3 == 0 && num % 5 == 0);
// console.log(numbers, '3 e 5');


//2
// const palavrinhas = [
//     "bolacha",
//     "biscoito",
//     "bombom",
//     "bala",
//     "abestalhado",
//     "MASSA",
//     "pastilha"
// ]
// retorne palavras que tenham menos de 5 letras
// const novaArr = palavrinhas.filter(item => item.length < 5)
// console.log(novaArr)


// //3
// let numbers = [3, 4, 5, 6, 6, 7]
// numbers = numbers.map((num) => num * 3)
// numbers.forEach((num) => num * 3)


// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois prite quantos numeros são maiores que 10
// maiores = 0;
// numbers.map((num) => {
//     if (num > 10) {
//         maiores++
//     }
// });

// menores = numbers.filter( num => num < 10).length
// menor = numbers.find( num => num < 10);


// use Map, filter, forEach, find e ou Reduce.
// // depois quantos são menores que 10.
// // printe o numero menor que 10.
// console.log(maiores);
// console.log(menores);
// console.log(menor);

//4
const numbers = [
    1,
    3,
    4,
    6,
    8,
    9,
    56,
    34,
    23,
    2,
    89,
    101,
    320,
    12,
    13,
    45,
    40,
    43,
    88
]

const soma = numbers.reduce((soma, item) => soma + item);
// calcule o valor total da soma dos items da array numbers

console.log(soma, 'soma')

//5 -
const mulheres = [
    {
        user: 234,
        name: "Marcia",
        idade: 40,
        hobbies: ["estudar", "comer", "falar"]
    },
    {
        user: 235,
        name: "Lorena",
        idade: 20,
        hobbies: ["dançar", "assistir tv", "estudar"]
    },
    {
        user: 236,
        name: "Patricia",
        idade: 24,
        hobbies: ["correr", "acampar", "surfar"]
    },
    {
        user: 237,
        name: "Mariana",
        idade: 15,
        hobbies: ["skate", "bicicleta", "break dance"]
    },
    {
        user: 238,
        name: "Isis",
        idade: 34,
        hobbies: ["ler", "estudar", "discutir"]
    },
    {
        user: 239,
        name: "Pietra",
        idade: 23,
        hobbies: ["jogar dominó", "sinuca", "cartas"]
    }
]

// retore a mulher que tiver o user = 238
console.log(mulheres.find(mulher => mulher.user == 238), 'W');
// retorne o nome das mulheres que gostam de estudar

const gostamEstudar = []
mulheres.map(mulher => {
    if (mulher.hobbies.indexOf('estudar') > -1) {
        console.log(mulher.name)
        gostamEstudar.push(mulher.name);
    }
});

console.log(gostamEstudar, 'gostamEstudar');
