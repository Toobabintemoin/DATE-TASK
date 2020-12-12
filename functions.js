// // simple function cv //
  console.log(`
             /** -----CURRICULUM VITAE------ **/ 

Personal Information:  
           `);


function name(){
    console.log(`name : tooba bin te moin` )
}
name()
function fathername(){
    console.log(`fatherName : moin-ud-din`)
}
fathername()

function dob(){
    console.log(`date of birth : 23-5-2000`);
}
dob()
function CNIC(){
    console.log(`CNIC : 42401-254968-8`);
}
CNIC()

function num(){
    console.log(`phone number :  03112569858`)
}
num()

function address(){
    console.log(`Address : abc, karachi, pakistan`)
}
address()

function email(){
    console.log(`Email : abc@gmail.com`);
}
email()

function city(){
    console.log(`City : karachi`)
}
city()

       console.log(`
ACADEMIC QUALIFICATION : 
`);

function QUALIFICATION(){
    console.log(`Matriculation : abc school in 2015
Intermediate : abc college in 2017`)
}
QUALIFICATION()

console.log(`
ADDIIONAL QUALIFICATION:`);
function additionalqualification(){
    console.log(`learning  Blockchain Technology from SSUET `);
}
additionalqualification()

console.log(`
SKILLS :
`)

function skills(){
    console.log(`* command on Microsoft excel
* command on MS WORD`);
}
skills()

console.log(`
REFERENCE:`);
function reference(){
    console.log(`to be furnished on request`);
}
reference()


// RETURN FUNCTION CV //

console.log(` 
      //----- CURRICULUM VITAE ----//
 
Personal information :  
   `);

function name(){
    return `name : tooba bin te moin`
} 
console.log(name());  

function fname(){
    return `fatherName : moin-ud-din`
}
console.log(fname());

function dob(){
    return `date of birth : 23-5-2000`
}
console.log(dob());

function CNIC(){
    return `CNIC : 42401-254968-8`
}
console.log(CNIC());

function num(){
    return `Phone num: 0213594`
}
console.log(num());

function address(){
    return `Address: abc area karachi, pakistan`
}
console.log(address());

function email(){
    return `Email : abc@gmail.com `
}
console.log(email());

console.log(`
ACADEMIC QUALIFICATION:
 `);
 function qua(){
     return `Matriculation : abc school in 2015
Intermediate : abc college in 2017`
 }
 console.log(qua());

 console.log(`
 SKILLS :
  `)
 function skill(){
     return `*> command on Microsoft excel
*> command on MS WORD`
 }
 console.log(skill());

 console.log(`
ADDIIONAL QUALIFICATION:`);

 function quali(){
     return `learning  Blockchain Technology from SSUET `
 }
 console.log(quali());

console.log(`
REFERENCE:`);
  
 function ref(){
     return `to be furnished on request`
 }
 console.log(ref());

 // calculator through parameterized function //

 console.log(`
        *----- calculator through parameterized function -----*
         `);

 function add(a,b){
     var sum = a + b
     console.log(`the sum of a and b is: ${sum}`);
 }
 add(20,30)

 function sub(x,y){
     var difference = x - y
     console.log(`the difference of x,y is : ${difference}`);
 }
sub(50,20)

function multi(z,y){
    var multiply = z * y
    console.log(`the product is : ${multiply}`);
}
multi(20,90)

function div (c,d){
    var division = c / d
    console.log(`the division value is : ${division}`);
}
div(50,10)



// LAMDA CV OR ARROW FUNCTION //
console.log(` 
              Curriculum Vitae 
              `);

var name=() => {
    console.log(`Name : TOOBA BIN TE MOIN`);
}
name()
var fatherName=() => {
    console.log(`Father Name : MOIN UD DIN`);
}
fatherName()
var qualification=() => {
    console.log(`QUALIFICATION : Graduation`);
} 
qualification()
var num=() => {
    console.log(`Number : 03125636594`);
}
num();
var city=() => {
    console.log(`City : karachi`);
}
city()
var dob=() =>{
    console.log(`Date of birth : 4-8-1895`);
}
dob()
var address=() => {
    console.log(`Address : abc, karachi, pakistan`);
}
address()
var email=() => {
    console.log(`Email : abc@gmail.com`);
}
address()
var CNIC=() => {
    console.log(`CNIC no : 42156-7896541-2`);
}
CNIC()
var domicile=() => {
    console.log(`Domicile : sindh, karachi`);
}
domicile()

console.log(`
            ------- CV anonymus function --------
                 `);
// CV anonymus function //

var name= function(){
    return "tooba"
}
var fathername= function(){
    return "moin"
}
var num= function(){
    return "03212569875"
}
var address= function(){
    return "abc , karachi, pakistan"
}
var qualification= function(){
    return "graduation"
}
var city= function(){
    return "karachi"
}
var dob= function(){
    return "23-2-2014"
} 
var email= function(){
    return "abc@gmail.com"
}
var CNIC= function(){
    return "42401-128756-9"
} 
var domicile= function(){
    return "sindh, karachi"
}


console.log(`
Name          : ${name()}
Father name   : ${fathername()}
Number        : ${num()}
Address       : ${address()}
Qualification : ${qualification()}
City          : ${city()}
Date of birth : ${dob()}
EMAIL         : ${email()}
CNIC no       : ${CNIC()}
Domicile      : ${domicile()}`)


// Anonymus function cal //
console.log(`  
        Anonymus function calculator
`);
var func= function(a,b){
    return a+b
};
function addition(){
    var result;

result=func(100,20);
console.log(`addition : ${result}`)
}
addition()

var func1= function(x,y){
    return x-y
};
function subtraction(){
    var result;
    result=func1(110,20);
    console.log(`subtraction  : ${result}`)
}
subtraction()

var func2= function(c,b){
    return c*b
}
function product(){
    var result;
    result= func2(56,7);
    console.log(`The product : ${result}`)
}
product()

var func3= function(x,z){
    return x/z
}
function division(){
    var result;
    result= func3(35,6)
    console.log(`Division : ${result}`)
}
division()

// LAMDA CALCULATOR SIMPLE FUNCTION //


// Addition //
var add=(x) => x+10
console.log(add(10));

var add=(x,y) => x+y
console.log(`Addition : ${(add(20,30))}`);

// Subtraction //

var sub=(a) => a-20
var result;
result=sub(30);
console.log(`subtraction  : ${ result}`);

// Multiply //
var multi=(y) => y*20
console.log(multi(20));

var multi=(d,e,f) => d*e*f
console.log(`Multiply : ${multi(5,6,4)}`);

// Division //
var div=(r) => r/5
console.log(`Division : ${div(10)}`);


console.log(`
            THIS FUNCTION CV 
            `);

function cv (name,fatherName,address,email){
    this.name= name;
    this.fatherName=fatherName;
    this.address=address;
    this.email= email;
   
   
   this.fullName= function(){
        setTimeout(() => {
        console.log(this.name+ this.fatherName+ this.address+ this.email)
       },2000)
       }
    
    }
    var st = new cv ( "name: Tooba \n", "fatherName: Moin\n", "address: abc, karachi \n" , "email: abc@gmail.com\n " )
    st.fullName(); 
   
    function cv1 (qualification, city, domicile, number){
        this.qualification= qualification;
        this.city= city;
        this.domicile= domicile;
        this.number= number;
    
    this.lastName= function(){
        setTimeout(() =>{
            console.log(this.qualification+ this.city+ this.domicile+ this.number)}, 3000)
        }
   }
    
    var st1 = new cv1 ("qualification: graduation\n", "city: karachi\n" , "domicile: sindh, karachi\n", "number:02145639")
    st1.lastName();



