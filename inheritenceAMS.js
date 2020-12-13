console.log(`
//******* Accounting System *******//

        //  Module 1 //  `);

class abc {
constructor(name,fullName,fname,CNIC,attendence,overTime) {
this.name = name
this.fullName = fullName
this.fname = fname
this.Cnic = CNIC
this.attendence = attendence
this.overTime = overTime
}

}
class info extends abc {
disp(){
console.log(`
Emloyee Name       : ${this.name}
Employee Full Name : ${this.fullName}
Father Name        : ${this.fname}
CNIC               : ${this.CNIC}
Attendence         : ${this.attendence}
Overtime Allowence : ${this.overTime}`);
}
}
var obj = new info ("Tooba" , "Tooba moin", "Moin", "42401-23654-8", "25/30" , "5")

obj.disp()


console.log(`
// Module 2 // `);

class salary {
constructor(fix,adv,travel,bonus,per,tax){
this.fix = fix
this.adv = adv
this.travel = travel
this.bonus = bonus 
this.per = per 
this.tax = tax
}
}
class fix extends salary {
show(){
console.log(`
Emloyee Fix Salary           : ${this.fix}
Employee Advance Salary      : ${this.adv}
Employee travelling alloence : ${this.travel}
Employee Bonus allowence     : ${this.bonus}
Employee bonus per month     : ${this.per}
Employee tax per month       : (${this.tax})
             _____________`);
}
}
var obj = new fix (100000, 50000, 25000, 10000 , 2000, 5000)

var totalSalary = obj.fix + obj.adv + obj.travel  + obj.bonus + obj.per - obj.tax


obj.show();
console.log(`Total Salary of Employee              ${totalSalary}
             _____________`);