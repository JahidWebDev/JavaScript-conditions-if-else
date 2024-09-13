// == Equal to
// 5 == 5 true
// 5 == 4 false
 
// != Not Equal
// 5 != 5 false
// 2 != 3 true

// 5 > 5 false
// 5 > 4 true
// 3 > 5 false
 
// 10 < 10 false
// 10 < 5 false
// 10 < 20 true

// 10 >= 10 true
// 10 >= 5 true
// 5 >= 6 false

// 10 <= 10 true
// 5 <= 4 false
// 3 <= 5 true

// 10 == "10" true
// 10 === "10" false

/*
let age = 20;
let bank = 20;

if(age >= 18 && bank >= 15){
    console.log('You have access');
    
}else{
    console.log('You can not enter!');
    
}*/

//output: You have access

// =========================================

/*
let age = 10;
let bank = 20;

if(age >= 18 && bank >= 15){
    console.log('You have access');
    
}else{
    console.log('You can not enter!');
    
}
*/
//Output : You can not enter!

// =========================================
/*
let age = 20;
let bank = 20;

if(age >= 18 || bank >= 30){
    console.log('You have access');
    
}else{
    console.log('You can not enter!');
    
}
*/
//Output : You have access'

// =========================================

/*
let age = 20;

if( age != 20){
    console.log('You have access');
}else{
    console.log('You can not enter!');
}*/

//Output : You can not enter!'

// =========================================
/*
let age = 20;


if( age != 23){
    console.log('You have access');
}else{
    console.log('You can not enter!');
}*/

//Output : You have access

// =========================================

let age = 20;
let bank = 100;
if(age >= 18){
    console.log('You are old enough you can enter');
    
} else if (age > 20){
    console.log('Cool you have enough mony');
    
} else{
    console.log('You are either too young or have no money');
    
}