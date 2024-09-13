//JavaScript if...else Statement

// >=

/*let score = 45;
if(score >= 50){
    // 45 >= 50 : false
    // 60 >= 50 : true
    console.log("you passed the examination");
    
}else{
  console.log("you faild the examination");
  
}*/

// output: You failed the examination.


/**=========================================== */


// const number = prompt("Enter a number: ");

// if (number > 0) {
//     console.log("positive number");
// }
// console.log("nice number");

// output: 0 > 0 nice number 
// output: 1 > 0 positive number nice number 

/**=========================================== */

/*
let age = 17;

if (age >= 18){
    // 17 >= 18 : false
    // 18 >= 17 : true
    console.log("you are an adult");
    
} else{
    console.log("you are a minor");
    
}*/

// Output: You are a minor

/**=========================================== */

// <= >=
/*
let rating = 4;

if (rating <= 2){
    console.log("bad rating");
    
}else if (rating >= 4){
    console.log("good rating!");
    
}else{
    console.log("averge rating");
    
}*/

// Output: Good rating!

/**=========================================== */

// Nested if...else Statement
/*
let marks = 60;

if (marks >= 40){
    // 60 >= 40 : true
    if(marks >= 80){
        // 60 >= 80 : false
        console.log("Distinction");
        
    }
    else{
        console.log("passed");
        
    }
 }

 else{
    console.log("Failed");
    
 }*/

 
// Output: Passed

/**=========================================== */

/*let grade = 56;

if (grade >= 90){
    document.write("A")
} else if (grade >= 80){
    document.write("B");
    
}else if(grade >= 70){
   document.write("C");
    
} else if(grade >= 60){
   document.write("D");
    
}else{
    document.write("Fail")
}*/

/**=========================================== */

// let age = 18
// if(age < 18){
//     console.log("Alice is under 18 years old.");
    
// }else if(age >= 18 && age <= 21){
//     console.log("Alice is between the ages of 18 and 21.");
    
// }else{
//     console.log("Alice is over 21 years old.");
    
// }

// Output: Alice is between the ages of 18 and 21.

/**=========================================== */
/*
const pet = "dog";

if (pet === "lizard") {
    // "dog" === "lizard" : false
  console.log("I own a lizard");
} else if (pet === "dog") {
    // "dog" === "dog" : true
  console.log("I own a dog");
} else if (pet === "cat") {
     // "dog" === "cat" : false
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}*/

// Output: I own a dog

/**=========================================== */
/*
const age = 17;
const ownsCar = true;

if(age >= 16 && ownsCar){
    console.log("Jerry is old enough to drive and has his own car.");
    
}else{
    console.log("Jerry does not drive.");
    
}
*/

//Output: Jerry is old enough to drive and has his own car.

/**=========================================== */
/*
const boyfriendIsPaying = true;
const isSale = false;

if(boyfriendIsPaying || isSale){
    console.log("Jesse will go shopping.");
    
} else{
    console.log("Jesse will not go shopping.");
    
}*/

//Output: Jesse will go shopping.


/**=========================================== */

/*
const boyfriendIsPaying = true;
const isSale = false;

if (!boyfriendIsPaying || isSale) {
    // ! boyfriendIsPaying = false
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}*/

//Output: Jesse will not go shopping.

/*
let i = 10;

if (i == 10) {  
    if (i < 15) {
        console.log("i is smaller than 15");
         // it is true
        if (i < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}*/

//Output:i is smaller than 15
//i is smaller than 12 too