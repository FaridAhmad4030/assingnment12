//Example-1
function greet(name) {
    return `Hello, ${name}!`;
}
console.log (greet("Alice"));

//Example-2
const dog = {
    name: 'Buddy',
    breed: 'Golden Retriever'
};
console.log( `Name: ${dog.name}`);
console.log( `Breed: ${dog.breed}`);

//Example-3
const fruits = ['Apple', 'Banana','cherry'];
console.log(fruits[0]);

//Example-4
function doubleNumber(x){
    return x * 2;
}
const result = doubleNumber(5);
console.log(result);

//Example-5
const student = {
    name: "John Doe",
    grade: "A",

    showGrade: function(){
        console.log(`${this.name}  Grade: ${this.grade}`);
    }
};
student.showGrade();

// Example-6
// function isPositive(number){
//     return number > 0;
// }
// const Result = isPositive(-3);
// console.log(Result);

//Example-7
const colors = ['Red', 'Green','Blue','Yellow','black'];
console.log(colors.length);

//Example-8
const phone = {
     brand: 'Apple',
     model: 'iphone 14'
};
console.log(phone.brand);

//Example-9
function squareNumber(x){
    return x * x;
}
const Result = squareNumber(4);
console.log(Result);

//Example-10
const numbers =[1,2,3,4,5];
function sumArray(arr){
    return arr.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
}
const total = sumArray(numbers);
console.log(total);