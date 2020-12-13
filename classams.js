console.log(`               
                            //*****  Accounting SYSTEM  *****// 

                                    // Module 1 //

                                    `);
class acc {
    constructor(employee,fullName,fname,CNIC,attendence,overtime,designation){
        this.employee = employee
        this.fullName = fullName
        this.fname = fname
        this.CNIC = CNIC
        this.attendence = attendence
        this.overtime = overtime
        this.designation = designation
 }

set employee(val){
      this._employee = val;
}
get employee(){
    return this._employee
}
set fullName(val){
    this._fullName = val;
}
get fullName(){
  return this._fullName
}
set fname(val){
    this._fname = val;
}
get fname(){
  return this._fname
}
set CNIC(val){
    this._CNIC = val;
}
get CNIC(){
  return this._CNIC
}
set attendence(val){
    this._attendence = val;
}
get attendence(){
  return this._attendence
}
set overtime (val){
    this._overtime = val;
}
get overtime(){
  return this._overtime
}
set designation (val){
    this._designation = val;
}
get designation(){
  return this._designation
}
}

let module1= new acc ("Tooba", "Tooba bin te moin","Moin-ud-din", "42401-56324896-8", "28/30" , "3" , "Accountant")
console.log(`Emloyee Name          : ${module1._employee}
Employee Full Name    : ${module1._fullName}
Father Name           : ${module1._fname}
CNIC                  : ${module1._CNIC}
Attendence            : ${module1._attendence}
Overtime              : ${module1._overtime}
Designation           : ${module1.designation}`);

console.log(`                                
                                     // Module 2  //
                                       `);

class acc1 {
    constructor(fix,adv,travel,bonus,per,tax){
    this.fix = fix
    this.adv = adv
    this.travel = travel 
    this.bonus = bonus
    this.per = per
    this.tax = tax 
    }
set fix (val){
    this._fix = val;
}    
get fix(){
    return this._fix  // 1
}
set adv (val){
    this._adv = val;
}    
get adv(){
   return this._adv // 2
}
set travel (val){
    this._travel = val;
}    
get travel(){
     return this._travel //3
}

set bonus (val){
    this._bonus = val;
}    
get bonus(){
   return  this._bonus  //4
}
set per (val){
    this._per = val;
}    
get per(){
    return this._per  //5
}
set tax (val){
    this._tax = val;
}    
get tax(){
    return this._tax //6
}

}
let module2 = new acc1 (100000, 50000, 25000, 5000 , 1000, 5000)
console.log(`Employee Fix Salary             : ${module2.fix}
Employee advance Salary         : ${ module2._adv}
Employee travelling allowence   : ${module2._travel}
Employee bonus Allowence        : ${module2._bonus}
Emloyee Bonus per month         : ${module2._per}
Employee tax per month          : (${module2._tax})
                                ______________`);

var totalSalary = module2._fix + module2._adv + module2._travel  + module2._bonus + module2._per - module2._tax

console.log(`Total Salary of Employee         ${totalSalary}
                                ______________`);