// // esercizio 1
// let number = 100;
// console.log(number);

// // esercizio 2
// const PI = 3.14;
// console.log(PI);

// // esercizio 2/b
// /* PI = 3.1416
// console.log(PI) */

// // esercizio 2/c
// let radius = 8;
// let circle = radius * 2 * PI;
// console.log(circle);

// // esercizio 3
// let name = "carlo"
// name = "Marco"
// console.log(name)

// // esercizio 4
// let greet = "Ciao, Mondo!"
// console.log(greet);

// // esercizio 4/b
// /* let greet = "Come stai, Mondo?"
// console.log(greet); */

// // esercizio 4/c

// greet = greet + "come stai?";
// console.log(greet)

// let num_1 = 8;
// let num_2 = 5;

// let comparison;

// if(num_1 > num_2){
//     comparison = num_1;
// }
// else{
//     comparison = num_2;
// }
// console.log(comparison);

// // esercizio 2


// let nome_1 = "marco";

// let nome_2 = "marco";

// let comparison_1;

// if(nome_1 == nome_2){
//     comparison_1 = true
// }
// else{
//     comparison_1 = false
// }
// console.log(comparison_1)

// // esercizio 3

// let numb = 10;
// let comparison_2;
// if(numb == "10"){
//     comparison_2 = true
// }
// else{
//     comparison_2 = false
// }

// console.log(comparison_2);

// // esercizio 1/a

// for(let i=1; i<=42; i++){
//     console.log(i);
// }
// // esercizio 1/b

// for(let i=42; i>=1; i--){
//     console.log(i);
// }

// // esercizio 1/A

// const arrey = [1,2,3,4,5,6,7,8];
// console.log(arrey);

// // esercizio 1/B
// const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi", "papaya"];
// console.log(fruits);

// // esercizio 1/C

// console.log(fruits.length);

// // Esercizio 2/A

// const numOfElemnts =prompt("inserisci un numero");

// let numbers = [];
// for(let i=1; i<=numOfElemnts; i++){
//     // numbers.push(i);
//     numbers.push(parseInt(Math.random() * 10) + 1);
    
    
// };
// console.log(numbers);


// // Esercizio 2/B*
// // let sum = 0;

// // for(let i=0; i<numbers.length; i++){
    
// //     sum = sum + numbers[i];
    
// // };

// // console.log(sum);

// // **Esercizio 2/C**

// let max = 1;

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
// }
// console.log(max);


// let num = prompt("inserisci");
//  let a = 0, b = 1;
//  let c;

//  let i = 0;
//  while(i<num){
//     c = a + b;
//     a = b;
//     b = c;
//     i++;
//     console.log(c);
//  }

//  function helloWorld(){
//    alert("Ciao Mondo");
//  }


//  helloWorld();


//  function numbers (n_1, n_2){
//    let somma = n_1 + n_2;
//    return somma

//    // return n_1 + n_2;
//  }
 

 

//  let result = numbers (5, 9);
//  console.log (result);


// function getOneStringFromTwo(x,y){
//   let string =` ${x}  ${y};`
//   return string;
// }
// let str = "ciao"
// let str_2 = "mondo"

// let stringa = getOneStringFromTwo(str, str_2);
// console.log(stringa);


// setTimeout(function(){
//   alert("ciao a tutti")
// }, 3000)

// let cont = 0;
// setInterval(function(){
// console.log(cont++);
// }, 1000);



let persona = {
  nome : "dario",
  cognome : "lo forti"
}

persona.nome