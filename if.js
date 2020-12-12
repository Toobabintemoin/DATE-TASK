// // IF ELSE STATEMENT // 

console.log(`
            *******************  (MARKSHEET)  **************************`);

var percentage = 50;

if (percentage >= 80  && percentage <= 100){
    return console.log("Grade A+");
}
else if (percentage >= 70 && percentage <= 80){
    return console.log("Grade A");
}
else if (percentage >= 60 && percentage <= 70){
    return console.log("Grade B");
}
else if (percentage >= 50 && percentage <= 60 ){
    return console.log("Grade C");
}
else if (percentage >= 40 && percentage <= 50){
    return console.log("Grade E ");
}
else {
    return console.log("Grade F");
}
  
//  TASK 2 //
var x = 50;
var y = 150;
var a = 70;
var b = 70;

if(x+y === a+b){
    return console.log("correct");
}
else if (x-y !== a-b){
    return console.log("Incorrect");
}
else {
    return console.log("error");
}
            
// TASK 3 //


var age = 10;
var gender = "female";

if (age > 18 && gender == "male"){
    return console.log("you are allowed to ride");
}
else if (age < 20 && gender == "female"){
    return console.log("you are not allowed to ride");
}
else {
    console.log("kids are not allowed");
}

// TASK 4 //

var num = 16; 
if (num % 2 == 0){
    console.log("The answer is :" ,"Even");
}
else {
    console.log("The answer is: " ,"odd");
}

console.log(`
            ***********************  SWITCH CASE **********************`)
 
var user_selects_options = "Courses";
switch(user_selects_options){
    case "Home":
    console.log(`you are now home page`);
    break;
    case "About":
        console.log("you are now about page");
        break;
        case "Courses":
        console.log(`Which course do you want to select ? 
        option 1 : BLOCKCHAIN
        option 2 : IoT
        option 3 : Artificial Intelligence  `);
        break;
    case "blog":
        console.log("This is blog page");
        default:
            console.log("home page");
            break       
}

 // TASK 5 //
 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
console.log("The cost is equals");
}
else{
    console.log("not equal");
}
















function info(marksheetNumber,group,rollNo,enrollment,name,fname,college){
    // var marksheetNumber = 02156
    return marksheetNumber
}
info("021569")