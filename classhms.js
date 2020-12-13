console.log(`
                    //*****  HOSPITAL MANAGEMENT SYSTEM  *****//

                    // -----  MODULE 1 -----//`);

class hms {
    constructor(patientName,fatherName,mrno,CNIC,date,timeGenerated,barCode,ill,field){
        this.patientName = patientName
        this.fatherName = fatherName
        this.mrno = mrno
        this.CNIC = CNIC
        this.date = date
        this.timeGenerated = timeGenerated
        this.barCode = barCode
        this.ill = ill
        this.field = field
    }

set patientName (value){
     this._patientName = value;
}
get patientName(){
    return this._patientName
}
set fatherName(val){
    this._fatherName= val;
}
get fatherName(){
    return this._fatherName
}
set mrno(val){
    this._mrno = val;
}
get mrno(){
    return this._mrno
}
set CNIC(val){
    this._CNIC = val;
}
get CNIC(){
    return this._CNIC
}
set date(val){
    this._date = val;
}
get date(){
    return this._date
}
set timeGenerated(val){
    this._timeGenerated = val;
}
get timeGenerated(){
    return this._timeGenerated
}
set barCode(val){
    this._barCode = val;
}
get barCode(){
    return this._barCode
}
set ill(val){
    this._ill = val;
}
get ill(){
    return this._ill
}
set field(val){
    this._field = val
}
get field (){
    return this._field
}

}

let module1 = new hms("Tooba" , "moin-ud-din", "345698","42401-6859725-8", "27-5-2020","9:30 AM" ,"022156" , 
["fever", "flue", "bp"] , ["Dr faiza (pharmalogist)" , "Dr Abrar (cardio;ogist)" , "Dr sana  (general physician)"])
console.log(`
Patient Name        : ${module1.patientName}
Father Name         : ${module1.fatherName}
Mr No               : ${module1.mrno}
CNIC                : ${module1.CNIC}
DATE                : ${module1.date}
Time                : ${module1.timeGenerated}
Bar code            : ${module1.barCode}
Patient illness     : ${module1.ill[0]}
Doctor name & field : ${module1.field[2]}`);

console.log(`
                   // -----  MODULE 2 -----//`);

  class hms1 {
      constructor(appointmenttime, timematch , appointmentfees , feeoptions){
      this.appointmenttime = appointmenttime
      this.timematch = timematch
      this.appointmentfees = appointmentfees
      this.feeoptions= feeoptions
  }
 
set appointmenttime (value){
    this._appointmenttime = value; 
 }
 get appointmenttime(){
        return this._appointmenttime
 }
 set  timematch (value){
    this._timematch = value; 
}
get  timematch(){
   return this._timematch
}
set appointmentfees  (value){
    this._appointmentfees = value; 
}
get  appointmentfees(){
   return this._appointmentfees
}
set  feeoptions (value){
    this._feeoptions = value; 
}
get  feeoptions(){
   return this._feeoptions
}
 }
 let module2 = new hms1 ("2:30pm" , "12:00pm to 4:00pm " , "2000" , 
 {onlineMethod:'onlineMethod',cardoption: "cardoption", cashoption: "cashoption", getreceived: "getreceived"})


console.log(`
Appointment time : ${module2._appointmenttime}
Time match       : ${module2._timematch}
Appointment fess : ${module2._appointmentfees}
Fee options :

Select any one option:

option 1 : ${module2._feeoptions.onlineMethod}
option 2 : ${module2._feeoptions.cardoption}
option 3 : ${module2._feeoptions.cashoption}
option 3 : ${module2._feeoptions.getreceived}`)

var user= "cardoption";
switch(user){
    case  "onlineMethod":
        console.log(`

OPTION : 1
a)paypal
b)jazzcash
c)Easypaisa
d)payooneer`);
    break;
    case "cardoption":
     console.log(`
Option : 2 
Enter your card number `);
    break;
    case "cashoption":
        console.log(`Option 3 : hand to hand cash`);
    break;
    case "getreceived":
         console.log(`option 4 : return cash`);
   
}