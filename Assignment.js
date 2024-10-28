/*
function findFirst(string) {
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)==='x'){
            return i;
        }
    }return -1;
    
}*/

//const str = 'The quick brown fox jumps over the lazy dog.';
//console.log(str.slice(31));
//console.log(str.slice(-5,-2));

/*function longerHalfAroundX(str) {
    const index = str.indexOf('x');  // Find the index of the first 'x'
    
    if (index === -1) {
        return '';  // If no 'x' is found, return an empty string
    }
    
    const firstHalf = str.slice(0, index);   // String before 'x'
    const secondHalf = str.slice(index + 1); // String after 'x'

    // Return the longer half or the second half if they're equal
    return firstHalf.length >= secondHalf.length ? firstHalf : secondHalf;
}*/

/*console.log(typeof true);
console.log(typeof 23);
console.log(typeof 25.5);
console.log(typeof 'Martin');
let year;
console.log(year);
console.log(typeof year);
year = 252;
console.log(year);
console.log(typeof year);
  let a=90;
  let b=10;
  let c = a+b;
  //console.log('The value of c is', c);
  const isAgeMate = a >= 90;
  console.log(isAgeMate);*/


                    //CHALLENGE #1//
/*
let markHight =1.69;
let markMass = 78;
let jonHights= 1.95;
let johnMass=92;
//const BMI = mass/height**2;
//Calculating the Body Mass Index.
let markHigherBMI = markMass/markHight**2;
console.log('The value Mark Height is ', markHigherBMI);//Getting the Mark hight.
let johnHigherBMI = johnMass/jonHights**2;
console.log('The value of John Hight is ', johnHigherBMI);
let isSameMass = markHigherBMI>johnHigherBMI;
console.log('Is Mark BMI greater than John BMI', isSameMass);

markHight =1.88;
markMass=95;
jonHights=1.76;
johnMass=85;
markHigherBMI = markMass/markHight**2;
console.log('The value Mark Height is ', markHigherBMI,'kg');//Getting the Mark hight.
johnHigherBMI = johnMass/jonHights**2;
console.log('The value of John Hight is ', johnHigherBMI,'kg');
isSameMass = markHigherBMI>johnHigherBMI;
console.log('Is Mark BMI greater than John BMI', isSameMass);*/


/*const firstName = 'Malachy';
const villa = 'Ikot otu';
const job = 'Blockchain Developer';
const birthday = 27;
const Mark = "I'm " + firstName + ', and a native of '+ villa + ' a ' + job  +', wow my ' + birthday +' is my day!'
console.log(Mark);
const firstName = ' Jon';
const anotherName = 'Mary';
const mimiApp = 'Nicegram';
const helloMessage =`Hi there ${firstName}, have you being hearing from ${anotherName}? I wanted to invite you to join ${mimiApp}`;
console.log(helloMessage);
//Make sure you are using backtick, is found above tap key. Remember single or double qoute won't work.
console.log(`Am happy to learn about backtick`) //this will display the result at once.*/
// console.log(`Working on today's challenges`)

            
                        //ASSIGNMENT
/* Write a programe to check wether a person is allow to start taking a driver's license or not and if she is then show 'You are of age to drive a car' but if not then show the numbers of years left for her to start using Driver's License.*/

            //SOLUTION

/*const now = 2024;
const birthYear =2022;
const myAge = now- birthYear;
//console.log(myAge);
const isOldEnough = myAge>=18;
if(isOldEnough){
    console.log('You are of Age to drive a CAR');
}
else{
    const yearsleft = 18-myAge;
    console.log("Years left to start using Driver's License is", yearsleft);
}*/
 

// console.log(`Good morning friends let's go again`);

//CHALLENGE #2
/* Use the BMI example from challenge #1 and code you already wrote and improve it.
                YOUR TASK
1) Print a nice output to the console, saying who has the higher BMI. The message  is either Marks is higher than John's or otherwise.
2) Use a template literal to include the BMI value in the outputs. Example: Marks BMI (28.3) is higher than John's (23.9)!
Hint: Use if/else statement.*/

            //SOLUTION
//From #1
/*
if(markHigherBMI>johnHigherBMI){
    console.log(`Mark's BMI (${markHigherBMI}) is higher than John's (${johnHigherBMI})`);
}
else{
    console.log(`John's BMI (${johnHigherBMI}) is higher than Mark's (${markHigherBMI})`);

}*/
/* let array = [70, 80, 65, 100, 90, 95];
let total =0;
for(i=0;i<Array.length;i++){
    total = total + array[i];
}     console.log(total);
const average = total/array.length;
console.log(average);

// let x =0;
for(i=0;i<=10;i++){
    x += i;
    console.log(x)
}
// Type conversion
const inputYear = '1990';
console.log(inputYear);
console.log(inputYear +10);
console.log(Number(inputYear));
console.log(Number(inputYear) +10);
console.log(typeof(Number(inputYear)));*/


/*
// type coercion
console.log('10'+'12'+10);
console.log(String (10)-1);
console.log('10'-'12'-10);
// guess game 
let n ='10'+1;
n=n-1;
console.log(n); //100*/
/*
let money;
if (money){
    console.log("Don't spend it all mate");
}else {
    console.log('You need to get a job buddy.');
}
*/


/* const array =[2,1,3,4,5];
let x=0;
for(let i=0;i<array.length;i++){
    x+= x+array[i];
    console.log(x)
}
const arr =['h','a','p','p','y'];
 let y = 0;
for (let i=0;i<arr.length;i++ ){
    console.log(arr[i]);
}
let b=0;
for (let i=1; i<=5;i=i+1){
    b=b+i;
    console.log(b,);
}*/


        /*
        TO CHECK IF ONE IF QUALIFY TO TAKE A DRIVING LICENCE
 const myName =(prompt(`What is your  your name?`));
 const myAge = Number(prompt(`What is your Age `));
console.log(`Welcome ${myName} to our site.`);
console.log(`Your are ${myAge} years old.`);
const licenseAge = 18;
const wait = 18-myAge;
if(myAge>=18){
    console.log(`You are of age to take a drive, congrate`);
}
else{
    console.log(`Sorry you still have to wait for ${wait}years before taking a drive, see you next time.`);
    }
*/
/*
const array = [1,0,4,5,7,11];
function lessThanTen (array){
    let less = true;
    for(let i=0;i<array.length;i++){
        if(array[i]>=10){
            less=false;
            console.log(less);
            
        }
    }onsole.log(true);
}
*/
/*
// Prompt the user for three values, separated by commas
let input = prompt("Enter three numbers separated by commas (e.g., 1,2,3):");


// Split the input string into an array
let values = input.split(',');

// Convert the input values to numbers and sum them
let value1 = parseFloat(values[0].trim());
let value2 = parseFloat(values[1].trim());
let value3 = parseFloat(values[2].trim());

let sum = value1 + value2 + value3;

// Output the sum
console.log("The sum of the three numbers is:", sum);
*/


            // CHALLENGE #3
/* There are two gymnastic teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest score wins a trophy.
                YOUR TASKS
1. Calculate the average score for each team using the test data below. 
2. Compare the team's average score to determine the winner of the competition and print it to the console. Don't forget that there can be a draw , so test for that as well(draw means they have the same average score)
3. BONUS1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higer score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score as well as multiple else-if blocks.
4. BONUS2: Minimum score also applies to a draw! So a draw only happens when both team have the same score and both have a score greather or equal to 100 points. Otherwise, no team wins the trophy.
*/

            //SOLUTION
            /*

// For Dolphins Team
const scoreForDolphins = prompt(`Input scores values for Dolphins team as :value1,value2, value3`);
// Split the input string into an array
const values = scoreForDolphins.split(',');

// Convert the input values to numbers and sum them
const value1 = parseFloat(values[0].trim());
const value2 = parseFloat(values[1].trim());
const value3 = parseFloat(values[2].trim());

// The total scores for Dolphins
const totalScoreForDolphins = value1 + value2 + value3;
console.log(`Total score for Dolphins Team is ${totalScoreForDolphins}`);

// Average score for Dolphins Team
const average = totalScoreForDolphins/3;
console.log(`Dolphins'Average score is ${average}`);

//  For Koalas Team
const scoreForKoalas = prompt(`Enter the score values for Koalas Team as: score1, score2, score3`);
//Split the input strings into an array
const scores = scoreForKoalas.split(',');

//Convert the input scores into numbers and sum them 
const score1 = parseFloat(scores[0].trim());
const score2 = parseFloat(scores[1].trim());
const score3 = parseFloat(scores[2].trim());

//Total scores for Koalas Team
const totalScoreForKoalas = score1 + score2 + score3;
console.log(`Total score for Koalas Team is ${totalScoreForKoalas}`);

//Average for the Koalas Team
const average1 = totalScoreForKoalas/3;
console.log(`Koalas'Average score is ${average1}`);

//Determining the winner for both team using the Total score and must score at least 100 points otherwise no winner.
// const passScore =true >=100;
if(average>average1 && average>=100){
    console.log(`Dolphins is the winner! Congratulations`);
}
else if (average===average1 && average>=100 && average1>=100 ){
    console.log(`Both team are draw! Wow this is Incredible`);
}
else if (average1>average && average1>=100) {
    console.log(`Koalas is the winner! Congratulations`);
}
else {
    console.log(`No team wins`);

}*/

//This code shows the important of using switch statement to write a code, which is an alternative way to else if statement. 

/*
const day = prompt(`Enter a valid day`);
switch (day){
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
*/
            // using the esle if statement to run the same code.

            /*
const day = prompt(`Enter your day to know your activity`);
if (day === 'monday'){
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
}
else if (day === 'tuesday'){
    console.log(`Prepare theory videos`);
}
else if (day === 'wednesday' || day==='thursday'){
    console.log(`Write code examples`);
}
else if(day === 'friday'){
    console.log('Record Videos');
}
else if(day === 'saturday' || day==='sunday'){
    console.log('Enjoy the weekend');
}
else{
    console.log('Not a valid day');
}
*/

            //CONDITIONAL OPERATOR
/*
const age = Number(prompt('Enter your age'));
age>=18? console.log(`I like to drink wine`):
console.log(`I like to drink water`);
*/

        //CHALLENGE

        //SOLUTION
        /*
const bill = Number(prompt(` Enter your desire amount for the purchase.`));
switch (bill) {
    case (bill >=50 && bill <=300):
        const tip1 =bill *0.15;
        const total = bill + tip1;
        console.log(`The bill amount is ${bill}, the tip is ${tip1}, and the total value is ${total}`);
        break;
    default:
         const tip2 = bill *0.2;
         const total1 = bill + tip2;
         console.log(`The bill amount is ${bill}, the tip is ${tip2}, and the total value is ${total1}`);
}*/

/*

const bill = Number(prompt(` Enter your desire amount for the purchase.`));
bill >=50 && bill <=300? console.log(`The bill amount is ${bill}, the tip is ${bill *0.15}, and the total value is ${bill +(bill *0.15)}`):

// const tip1 =bill *0.15;
// const total = bill + tip1;
console.log(`The bill amount is ${bill}, the tip is ${bill *0.2}, and the total value is ${bill +(bill*0.2)} `);


'use strict';
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can now take a drive`);
*/

/*
function logger (){
    console.log(`My name is Malachy.`)
}

logger();
logger();
logger();


        //FUNCTION 
function fruitProcessor(Apples, Oranges){
    const juice = (`Juice with ${Apples} apples and ${Oranges} oranges.`);
    // console.log(Apples,Oranges);
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(5,6);
console.log(appleOrangeJuice);*/




/*function findFirst(string) {
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)==='x'){
            return i;
        }
    }return -1;
    
}*/

//const str = 'The quick brown fox jumps over the lazy dog.';
//console.log(str.slice(31));
//console.log(str.slice(-5,-2));

/*function longerHalfAroundX(str) {
    const index = str.indexOf('x');  // Find the index of the first 'x'
    
    if (index === -1) {
        return '';  // If no 'x' is found, return an empty string
    }
    
    const firstHalf = str.slice(0, index);   // String before 'x'
    const secondHalf = str.slice(index + 1); // String after 'x'

    // Return the longer half or the second half if they're equal
    return firstHalf.length >= secondHalf.length ? firstHalf : secondHalf;
}*/

/*console.log(typeof true);
console.log(typeof 23);
console.log(typeof 25.5);
console.log(typeof 'Martin');
let year;
console.log(year);
console.log(typeof year);
year = 252;
console.log(year);
console.log(typeof year);
  let a=90;
  let b=10;
  let c = a+b;
  //console.log('The value of c is', c);
  const isAgeMate = a >= 90;
  console.log(isAgeMate);*/

                    //CHALLENGE #1//
/*
let markHight =1.69;
let markMass = 78;
let jonHights= 1.95;
let johnMass=92;
//const BMI = mass/height**2;
//Calculating the Body Mass Index.
let markHigherBMI = markMass/markHight**2;
console.log('The value Mark Height is ', markHigherBMI);//Getting the Mark hight.
let johnHigherBMI = johnMass/jonHights**2;
console.log('The value of John Hight is ', johnHigherBMI);
let isSameMass = markHigherBMI>johnHigherBMI;
console.log('Is Mark BMI greater than John BMI', isSameMass);

markHight =1.88;
markMass=95;
jonHights=1.76;
johnMass=85;
markHigherBMI = markMass/markHight**2;
console.log('The value Mark Height is ', markHigherBMI,'kg');//Getting the Mark hight.
johnHigherBMI = johnMass/jonHights**2;
console.log('The value of John Hight is ', johnHigherBMI,'kg');
isSameMass = markHigherBMI>johnHigherBMI;
console.log('Is Mark BMI greater than John BMI', isSameMass);*/


/*const firstName = 'Malachy';
const villa = 'Ikot otu';
const job = 'Blockchain Developer';
const birthday = 27;
const Mark = "I'm " + firstName + ', and a native of '+ villa + ' a ' + job  +', wow my ' + birthday +' is my day!'
console.log(Mark);
const firstName = ' Jon';
const anotherName = 'Mary';
const mimiApp = 'Nicegram';
const helloMessage =`Hi there ${firstName}, have you being hearing from ${anotherName}? I wanted to invite you to join ${mimiApp}`;
console.log(helloMessage);
//Make sure you are using backtick, is found above tap key. Remember single or double qoute won't work.
console.log(`Am happy to learn about backtick`) //this will display the result at once.*/
// console.log(`Working on today's challenges`)

            
                        //ASSIGNMENT
/* Write a programe to check wether a person is allow to start taking a driver's license or not and if she is then show 'You are of age to drive a car' but if not then show the numbers of years left for her to start using Driver's License.*/

            //SOLUTION

/*const now = 2024;
const birthYear =2022;
const myAge = now- birthYear;
//console.log(myAge);
const isOldEnough = myAge>=18;
if(isOldEnough){
    console.log('You are of Age to drive a CAR');
}
else{
    const yearsleft = 18-myAge;
    console.log("Years left to start using Driver's License is", yearsleft);
}*/
 

// console.log(`Good morning friends let's go again`);

//CHALLENGE #2
/* Use the BMI example from challenge #1 and code you already wrote and improve it.
                YOUR TASK
1) Print a nice output to the console, saying who has the higher BMI. The message  is either Marks is higher than John's or otherwise.
2) Use a template literal to include the BMI value in the outputs. Example: Marks BMI (28.3) is higher than John's (23.9)!
Hint: Use if/else statement.*/

            //SOLUTION
//From #1
/*
if(markHigherBMI>johnHigherBMI){
    console.log(`Mark's BMI (${markHigherBMI}) is higher than John's (${johnHigherBMI})`);
}
else{
    console.log(`John's BMI (${johnHigherBMI}) is higher than Mark's (${markHigherBMI})`);

}*/
/* let array = [70, 80, 65, 100, 90, 95];
let total =0;
for(i=0;i<Array.length;i++){
    total = total + array[i];
}     console.log(total);
const average = total/array.length;
console.log(average);

// let x =0;
for(i=0;i<=10;i++){
    x += i;
    console.log(x)
}
// Type conversion
const inputYear = '1990';
console.log(inputYear);
console.log(inputYear +10);
console.log(Number(inputYear));
console.log(Number(inputYear) +10);
console.log(typeof(Number(inputYear)));*/


/*
// type coercion
console.log('10'+'12'+10);
console.log(String (10)-1);
console.log('10'-'12'-10);
// guess game 
let n ='10'+1;
n=n-1;
console.log(n); //100*/
/*
let money;
if (money){
    console.log("Don't spend it all mate");
}else {
    console.log('You need to get a job buddy.');
}
*/


/* const array =[2,1,3,4,5];
let x=0;
for(let i=0;i<array.length;i++){
    x+= x+array[i];
    console.log(x)
}
const arr =['h','a','p','p','y'];
 let y = 0;
for (let i=0;i<arr.length;i++ ){
    console.log(arr[i]);
}
let b=0;
for (let i=1; i<=5;i=i+1){
    b=b+i;
    console.log(b,);
}*/


        /*
        TO CHECK IF ONE IF QUALIFY TO TAKE A DRIVING LICENCE
 const myName =(prompt(`What is your  your name?`));
 const myAge = Number(prompt(`What is your Age `));
console.log(`Welcome ${myName} to our site.`);
console.log(`Your are ${myAge} years old.`);
const licenseAge = 18;
const wait = 18-myAge;
if(myAge>=18){
    console.log(`You are of age to take a drive, congrate`);
}
else{
    console.log(`Sorry you still have to wait for ${wait}years before taking a drive, see you next time.`);
    }
*/
/*
const array = [1,0,4,5,7,11];
function lessThanTen (array){
    let less = true;
    for(let i=0;i<array.length;i++){
        if(array[i]>=10){
            less=false;
            console.log(less);
            
        }
    }onsole.log(true);
}
*/
/*
// Prompt the user for three values, separated by commas
let input = prompt("Enter three numbers separated by commas (e.g., 1,2,3):");


// Split the input string into an array
let values = input.split(',');

// Convert the input values to numbers and sum them
let value1 = parseFloat(values[0].trim());
let value2 = parseFloat(values[1].trim());
let value3 = parseFloat(values[2].trim());

let sum = value1 + value2 + value3;

// Output the sum
console.log("The sum of the three numbers is:", sum);
*/


            // CHALLENGE #3
/* There are two gymnastic teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest score wins a trophy.
                YOUR TASKS
1. Calculate the average score for each team using the test data below. 
2. Compare the team's average score to determine the winner of the competition and print it to the console. Don't forget that there can be a draw , so test for that as well(draw means they have the same average score)
3. BONUS1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higer score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score as well as multiple else-if blocks.
4. BONUS2: Minimum score also applies to a draw! So a draw only happens when both team have the same score and both have a score greather or equal to 100 points. Otherwise, no team wins the trophy.
*/

            //SOLUTION
            /*

// For Dolphins Team
const scoreForDolphins = prompt(`Input scores values for Dolphins team as :value1,value2, value3`);
// Split the input string into an array
const values = scoreForDolphins.split(',');

// Convert the input values to numbers and sum them
const value1 = parseFloat(values[0].trim());
const value2 = parseFloat(values[1].trim());
const value3 = parseFloat(values[2].trim());

// The total scores for Dolphins
const totalScoreForDolphins = value1 + value2 + value3;
console.log(`Total score for Dolphins Team is ${totalScoreForDolphins}`);

// Average score for Dolphins Team
const average = totalScoreForDolphins/3;
console.log(`Dolphins'Average score is ${average}`);

//  For Koalas Team
const scoreForKoalas = prompt(`Enter the score values for Koalas Team as: score1, score2, score3`);
//Split the input strings into an array
const scores = scoreForKoalas.split(',');

//Convert the input scores into numbers and sum them 
const score1 = parseFloat(scores[0].trim());
const score2 = parseFloat(scores[1].trim());
const score3 = parseFloat(scores[2].trim());

//Total scores for Koalas Team
const totalScoreForKoalas = score1 + score2 + score3;
console.log(`Total score for Koalas Team is ${totalScoreForKoalas}`);

//Average for the Koalas Team
const average1 = totalScoreForKoalas/3;
console.log(`Koalas'Average score is ${average1}`);

//Determining the winner for both team using the Total score and must score at least 100 points otherwise no winner.
// const passScore =true >=100;
if(average>average1 && average>=100){
    console.log(`Dolphins is the winner! Congratulations`);
}
else if (average===average1 && average>=100 && average1>=100 ){
    console.log(`Both team are draw! Wow this is Incredible`);
}
else if (average1>average && average1>=100) {
    console.log(`Koalas is the winner! Congratulations`);
}
else {
    console.log(`No team wins`);

}*/

//This code shows the important of using switch statement to write a code, which is an alternative way to else if statement. 

/*
const day = prompt(`Enter a valid day`);
switch (day){
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
*/
            // using the esle if statement to run the same code.

            /*
const day = prompt(`Enter your day to know your activity`);
if (day === 'monday'){
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
}
else if (day === 'tuesday'){
    console.log(`Prepare theory videos`);
}
else if (day === 'wednesday' || day==='thursday'){
    console.log(`Write code examples`);
}
else if(day === 'friday'){
    console.log('Record Videos');
}
else if(day === 'saturday' || day==='sunday'){
    console.log('Enjoy the weekend');
}
else{
    console.log('Not a valid day');
}
*/

            //CONDITIONAL OPERATOR
/*
const age = Number(prompt('Enter your age'));
age>=18? console.log(`I like to drink wine`):
console.log(`I like to drink water`);
*/

        //CHALLENGE

        //SOLUTION
        /*
const bill = Number(prompt(` Enter your desire amount for the purchase.`));
switch (bill) {
    case (bill >=50 && bill <=300):
        const tip1 =bill *0.15;
        const total = bill + tip1;
        console.log(`The bill amount is ${bill}, the tip is ${tip1}, and the total value is ${total}`);
        break;
    default:
         const tip2 = bill *0.2;
         const total1 = bill + tip2;
         console.log(`The bill amount is ${bill}, the tip is ${tip2}, and the total value is ${total1}`);
}



const bill = Number(prompt(` Enter your desire amount for the purchase.`));
bill >=50 && bill <=300? console.log(`The bill amount is ${bill}, the tip is ${bill *0.15}, and the total value is ${bill +(bill *0.15)}`):

// const tip1 =bill *0.15;
// const total = bill + tip1;
console.log(`The bill amount is ${bill}, the tip is ${bill *0.2}, and the total value is ${bill +(bill*0.2)} `);



//  Function Declaration 
const age1 = calcAge(1996);
console.log(age1);
function calcAge (birthyear){
   
    const age = 2024-birthyear;
    return age;
}

//Function Expression 

const calcAge1 = function(birthYear){
    return 2024-birthYear;
}
const age2 = calcAge1(1997);
console.log(age2, age1);

//Arrow function 
const calcAge2 = birthYear => 2024-birthYear;
const age3 = calcAge2(1998);
console.log(age1, age2, age3);

const cutpiece = function (fruit){
    return fruit*2;
} 
const fruitProcessor = function (apple, orange){
    const cutp1 = cutpiece(apple);
    const cutp2 = cutpiece(orange);
    const juice = `${cutp1} pieces of apple and ${cutp2} pieces of oranges are required to make a fruit juice, wow. `;
    return juice;
}
console.log(fruitProcessor(2,4));
*/


        // CHALENGE #1 PART 2
/*
// For Dolphins Team
const scoreForDolphins = prompt(`Input scores values for Dolphins team as :value1,value2, value3`);
// Split the input string into an array
const values = scoreForDolphins.split(',');

// Convert the input values to numbers and sum them
const value1 = parseFloat(values[0].trim());
const value2 = parseFloat(values[1].trim());
const value3 = parseFloat(values[2].trim());

// The total scores for Dolphins
const totalScoreForDolphins = value1 + value2 + value3;
console.log(`Total score for Dolphins Team is ${totalScoreForDolphins}`);

// Average score for Dolphins Team
const average = calcAverage => totalScoreForDolphins/3;
const av1 = average(totalScoreForDolphins);
// const average = totalScoreForDolphins/3;
console.log(`Dolphins'Average score is ${av1}`);

//  For Koalas Team
const scoreForKoalas = prompt(`Enter the score values for Koalas Team as: score1, score2, score3`);
//Split the input strings into an array
const scores = scoreForKoalas.split(',');

//Convert the input scores into numbers and sum them 
const score1 = parseFloat(scores[0].trim());
const score2 = parseFloat(scores[1].trim());
const score3 = parseFloat(scores[2].trim());

//Total scores for Koalas Team
const totalScoreForKoalas = score1 + score2 + score3;
console.log(`Total score for Koalas Team is ${totalScoreForKoalas}`);

//Average for the Koalas Team
const average1 = calcAverage1 => totalScoreForKoalas/3;
const av2 = average1(totalScoreForKoalas);
// const average1 = totalScoreForKoalas/3;
console.log(`Koalas'Average score is ${av2}`);

//Determining the winner for both team using the Total score and must score at least 100 points otherwise no winner.
// const passScore =true >=100;
const checkWinners = function( av1, av2){
    if( av1>av2 &&  av1>=100 &&  av1 >= 2*av2){
        console.log(`Dolphins is the winner with (${ av1} vs ${av2})! Congratulations`);
    // }
    // else if (average===average1 && average>=100 && average1>=100 ){
        // console.log(`Both team are draw! Wow this is Incredible`);
    }
    else if (av2> av1 && av2>=100 && av2 >= 2*  av1) {
        console.log(`Koalas is the winner with (${av1} vs ${av2})! Congratulations`);
    }
    else {
        console.log(`No team wins`);
    }

}
checkWinners(totalScoreForDolphins, totalScoreForKoalas);


        // Working With Array
        const birthYear = Number(prompt('Enter your birthYear'));
        const age = 2024-birthYear;
        const friends = [1990, 'Mary', 'John',age];
        console.log(friends);
        console.log(friends[3]);
        

        const calcAge = function (birthYeah){
            return 2025-birthYeah;
        }
        const years = [1990, 2000, 2001, 2002, 2003, 2004];
        const age1 = calcAge(years[0]);
        const age2 = calcAge(years[1]);
        const age3 = calcAge(years[2]);
        const age4 = calcAge(years.length-1);
        const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years.length-1)];
        const ages1 =[age1, age2, age3, age4];
        console.log(ages);
        console.log(ages1);

        // METHOD IN ARRAY 
const friends = ['John', 'Mary', 'Okon','Agatha'];
console.log(friends);
//  TO ADD ELEMENTS TO AN ARRAY 
console.log(friends.push('Jane')); // Add to the back of an array
console.log(friends.unshift('Martyr')); //Add to the front of an array
console.log(friends);
//   TO REMOVE ELEMENTS FROM AN ARRAY 
console.log(friends.pop()); // To remove from back
console.log(friends.shift()); // To remove fron front
console.log(friends);
// The indexOf method
console.log(friends.indexOf('Okon')); // log out the index value i.e 2 in this case.
// include method also works as indexOf method but that the include method only log out a boolean value i.e either true or false.
console.log(friends.includes('John'));// will log out true because John is included in the list
console.log(friends.includes('Eno')); //Will log out false because Eno isn't in the list.
// let's do a little stuff
if (friends.includes('John')){
    console.log(`Wow you have a friend called John`);
}
    

function calcTip(bill){
    bill >=50 && bill <=300? console.log(`The bill amount is ${bill}, the tip is ${bill *0.15}, and the total value is ${bill +(bill *0.15)}`):
    console.log(`The bill amount is ${bill}, the tip is ${bill *0.2}, and the total value is ${bill +(bill*0.2)} `);
    return bill;
}
const billValue = calcTip(800);
console.log(billValue);
const bills = [125, 555, 44];
// console.log(bills);
const value1 = calcTip(bills[0]);
const value2 = calcTip(bills[1]);
const value3 = calcTip(bills[2]);
const billsValues = [value1,value2,value3];
console.log(billsValues);
const tips = [bills[0]*.15, bills[1]*.2, bills[2]*.2];
console.log(tips);
const total = [bills[0]+(bills[0]*.15), bills[1]+(bills[1]*.2), bills[2]+(bills[2]*.2)];
console.log(total);
*/

/*
//OBJECT IN JS
const malachy = {
    firstName:'Aniefiok',
    LastName : 'Malachy',
    age : 2024-1998,
    sex : 'Male',
    Ocupation : 'Student',
    friends : ['Otu', 'Ubong']
}
console.log(malachy['LastName']);
const interestedIn = prompt(`What do you want to know about malachy? (firstName, LastName, Age, Sex, Occupation or friends?)`);
console.log(malachy[interestedIn]);
*/

/*
const jonas = {
    firstName : 'Jonas',
    fri1 : 'Michael',
    fri2 : 'John',
    fri3 : 'Mary',
}
const me = (` ${jonas.firstName} has three friends ${jonas.fri1}, ${jonas.fri2}, ${jonas.fri3} and his best friend is ${jonas.fri1}`);
console.log(me);
*/
/*
const malachy = {
    firstName:'Aniefiok',
    LastName : 'Malachy',
    birthYear: 1998,
    sex : 'Male',
    Ocupation : 'Student',
    friends : ['Otu', 'Ubong'],
    hasDriversLicense: true,
    // license : if(hasDriversLicense){
        // const has =(`driver's license`);
    // }else{
        // const has1 = (`No driver's license`);
    // },
    // calcAge : function(birthYear){
        // return 2024-birthYear;
    calcAge : function(){               // The 'this'  method help to call in the value from the object which birthyear has it value.
        return 2024-this.birthYear;
    }
    

}
console.log(`${malachy.LastName} is a ${malachy.calcAge()}-years old ${this.Ocupation} and he has ${malachy.hasDriversLicense? 'a': 'no'} driver's license`); // Note 'this.Ocupation' is the same has 'malachy.Ocupation'.
*/


/*
            Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK*/

/*
            // SOLUTION

const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi=this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi=this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// John's BMI (28.3) is higher than Mark's (23.9)!
if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}!`);
}else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}!`)
}



            // LOOP
//  For loop: this will make a code to run repeatedly in the console mutiple times until the condition became false.
// for statement execute a block of code if the condition is true, then if false the code will stop runnng. 
  for (let rep=0; rep<=5; rep++){
    console.log(`I did play ball ${rep}`);
  }
                // How to loop through an array
const birthYeah = [1991, 1992, 1993, 1994, 1995, 1996,1997, 1998, 1999];
const age = [];
for(let i =0; i<birthYeah.length; i++){
    // console.log(birthYeah[i]); //Here the birthyeah will be printed out again
    age.push(2024-birthYeah[i]);//this will push the age to the new array called age

}
console.log(age);
*/

/*
// Here we want to loop out typeof this array maybe into another array 
const malachy = [
    firstName='Aniefiok',
    LastName = 'Malachy',
    age = 2024,
    sex = 'Male',
    Ocupation = 'Student',
    friends = ['Otu', 'Ubong']
]
const type =[];
for(i=0; i<malachy.length; i++){
    console.log(malachy[i], typeof malachy[i]);
   type.push(typeof malachy[i]); 
}
console.log(type);

console.log('--- ONLY STRING---');
for(i=0; i<malachy.length; i++){
    if(typeof malachy[i]!=='string') continue;
    console.log(malachy[i], typeof malachy[i]);
}

console.log('--- ONLY NUMBER---');
for(i=0; i<malachy.length; i++){
    if(typeof malachy[i] !=='number') break;
    console.log(malachy[i], typeof malachy[i]);
}


// Backward loop 
const mala = [
    firstName='Ani',
    IsMale= true,
    age = 26,
    friends = ['Mkie', 'Otu', 'Ubong']
]
for ( let i =mala.length-1; i>=0; i--){
    console.log(i ,mala[i]);
}

// Loop inside a loop 
for (exercis =1; exercis <4; exercis++){
    console.log(`Exercis number ${exercis}`);
    for (i=1; i< 5; i++){
        console.log(`Day ${exercis} is set for exercise`);
    }
}
    

// THE WHILE LOOP
// Note: the while loop is used to when the number of iteration can not be determine or known. But the for loop works when you know the number of iteration to be made. 
let i =1;
while(i<5){
    console.log(`yes am good ${i}`);
    i++; //if you put this counter outside the block you might end blowing your system, because it will run till infinity.
}

// Let's see how to pick a specific number when rolling a die, let's say 6
// before then we need to call a function that will generate a random number from 1 to 6
let dice = Math.trunc(Math.random()*6)+1;//Math.random will generate some random numbers from 0 to 5
while(dice!==6){
    console.log(`I threw the dice and I got ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice ===6){
        console.log(`I have got the value 6`);
    }
}
*/



/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 

            // SOLUTION
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
for(i=0; i<bills.length; i++){
    calcTip=bills[i] >=50 && bills[i] <=300? (bills[i]*0.15,bills[i] +(bills[i] *0.15)):(bills[i] *0.2,bills[i] +(bills[i] *0.2));
    tips.push(bills[i] >=50 && bills[i] <=300? bills[i]*0.15:bills[i] *0.2);
    total.push(bills[i] >=50 && bills[i] <=300? bills[i] +(bills[i] *0.15):bills[i] +(bills[i] *0.15));
}
console.log(bills,tips,total);
// console.log(`The total amount are ${total}`);
//TO CALCULATE THE AVERAGE VALUE.
const calcAverage = function(arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(`Sum amount ${sum}`);
    return sum/arr.length;
}
console.log(`Average amount for bills is ${calcAverage(bills)}`);
console.log(`Average amount for tips is ${calcAverage(tips)}`);
console.log(`Average amount for total is ${calcAverage(total)}`);
console.log(`Am happy for this, haha beautiful great`);
console.log(`Me am tryig to understand this code of a rhinbg`);
*/

   /*     PROBLEM
We work for a campany building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude keep in mind sometimes there might be a sensor error."
temperature = [3,-2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5 ]
Make function should now receive 2 array of temperature.
*/         

                // SOLUTION
/*
const temperatures = [3,-2, -6, -1,-7, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures1 = [7,-2, 'error' -6, -1,-7, 'error', 9, 13, 27, 15, 14, 9, 25];

const calcTemp = function(t1,t2){
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i=0; i<=temps.length; i++){
        if(typeof temps[i]!=='number') continue;
        if(temps[i]> max) max = temps[i];
        // console.log(temps[i], ' is max');
        if(temps[i]<min)min = temps[i];
        // console.log(temps[i], ' is min');
    }
    console.log(temps);
    console.log(max , min);
    return max-min;

}
const amplitude = calcTemp(temperatures, temperatures1);
console.log(amplitude);


const calcTempt= function (){
    const temperature = {kelvin : 273,
    value : Number(prompt(`Enter your Temperature value.`))

    };
    return temperature.value + 273;
}
const result = calcTempt();
console.log(result);
*/

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/
const temp1 = [12, 5, -5, 0, 4]
const temp2 = [17, 21, 23];
const temp = temp2.concat(temp1);
console.log(temp);
const printForecast = function(arr){
    let str = '';
    for(let i = 0; i<arr.length; i++){
        // console.log(`${temp[0]}ºC in 1 days...${temp[1]}ºC in 2 days ... ${temp[2]}ºC in 3 days`);
        str += `${arr[i]}ºC in ${i + 1} days ...`
    };
    console.log('...', str);
    return arr;
}
printForecast(temp); 