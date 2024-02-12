'use strict';
//
// const o1 = {
//     f1: function() {
//          console.log(this);
//     }
// }
//
// o1.f1();
//
// const o2 = {
//     f2: o1.f1
// }
//
// foo();
//
// o2.f2()
//
// const o3 = o1.f1
// o3()
//
// setTimeout(o1.f1, 100);
//
// setTimeout(() => {o1.f1()}, 100)
//
// function foo() {
//     console.log('foo')
// }
//
//
//
// const func = () => {
//     console.log('func')
// }
// func();

// bar();
//
// function bar(){
//     console.log("bar");
// }
//
// myFunc();
//
// const myFunc = function(){
//     console.log("Expression");
// }

const Add = {
    a: 0,
    b: 0,
    numbers: [],
    sum: function() {
        if(isNaN(parseFloat(this.a)) || isNaN(parseFloat(this.b))) throw new Error('Valeur invalide');

        this.numbers.map((num) => {
            if (isNaN(parseFloat(num))) throw new Error('Valeurs du tableau numbers invalide');
        })

        let total = this.a + this.b;
        total += this.numbers.reduce((acc, current) => {
            return acc + parseFloat(current)
        }, 0);
        console.log(total);
    },
    reset: function() {
        this.a = 0;
        this.b = 0;
        this.numbers = [];
    }
}

Add.a = 10;
Add.b = 12;

Add.sum();

Add.numbers = [15, 20];

Add.sum();

Add.reset();

Add.sum();

Add.numbers = ["10", 25];

Add.sum();