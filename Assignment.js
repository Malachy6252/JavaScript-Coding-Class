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
}*/



const bill = Number(prompt(` Enter your desire amount for the purchase.`));
bill >=50 && bill <=300? console.log(`The bill amount is ${bill}, the tip is ${bill *0.15}, and the total value is ${bill +(bill *0.15)}`):

// const tip1 =bill *0.15;
// const total = bill + tip1;
console.log(`The bill amount is ${bill}, the tip is ${bill *0.2}, and the total value is ${bill +(bill*0.2)} `);
