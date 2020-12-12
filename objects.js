  // OBJECTS //

  //  Simple Method of Objects

var myCourse = {
    courseName : "BlockChain Technology" ,
    price : "$200 per module" ,
    duration : "6 months" ,
    courseDesingedBy : "john Doe from NAVTAC" ,
    description : "Hey , this course is designed for those people who want to learn latest technology  "

}  

console.log(` hey, this course is designed by ${myCourse.courseDesingedBy} 
for those people who want to learn ${myCourse.courseName} 
and its price is ${myCourse.price} 
and the duration of course is ${myCourse.duration} `);

// object use with function  //


var myCv = {
    firstName : "Tooba" ,
    lastName : "moin" ,
    qualification : "Undergraduation",
    address : "abc area, karachi , pakistan" ,
    email : "abc@gmail.com" , 
    domicile : "west, karachi" , 
    phoneNumber : "02134455",
    func: function(){
        return this.firstName + " " + this.lastName + this.qualification },

};
console.log(myCv.func());
console.log(myCv.lastName);
console.log(myCv.qualification);
console.log(myCv.address);
console.log(myCv.email);
console.log(myCv.domicile);
console.log(myCv.phoneNumber);
console.log(myCv.func());
                        

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return `
  First Name :${this.firstName}
  Last name : ${this.lastName}
  ID :  ${this.id}`;
  }
};
console.log(person.fullName());