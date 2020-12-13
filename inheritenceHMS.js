//  inheritence class method //
console.log(`
             //******* Hospital Management System *******//



             
                   // Module 1 //   `);

class hms {
    constructor (name,fname,mrno,date,time,CNIC,ward,ill,nameField,code){
        this.name = name
        this.fname = fname
        this.mrno = mrno
        this.date = date 
        this.time = time
        this.CNIC = CNIC
        this.ward = ward
        this.ill = ill 
        this.nameField = nameField
        this.code = code 
    }
}
class info extends hms {
    disp(){
        console.log(`
Name              : ${this.name}
Father Name       : ${this.fname}
Mr no             : ${this.mrno}
Date              : ${this.date}
Time generated    : ${this.time}
CNIC              : ${this.CNIC}
Patient Ward      : ${this.ward[1]}
Patient illness   : ${this.ill[2]}
Dr.name & Field   : ${this.nameField[0]}
Generate bar Code : ${this.code} `);
    }
}

var obj = new info ("sara" , "Ali" , "02145", "25-5-2020" , "2:00 to 5:00" , "42401-2546982-8", ["Cancer Ward" ,"OPD Ward " , "Isolation Ward"],
["fever", "flu" , "bloodpressure", "diabetes"], ["Dr.Shahista ( general physician)", "Dr.azhar (cardiologist)"] , "000523697")
obj.disp()



console.log(`            // Module 2 // `);

class hms1 {
    constructor(appointmenttime, timematch , appointmentfees , feeoptions){
    this.appointmenttime = appointmenttime
    this.timematch = timematch
    this.appointmentfees = appointmentfees
    this.feeoptions= feeoptions
}

}
class detail extends hms1 {
    show(){
        console.log(`
 Dr appointment time : ${this.appointmenttime}
 Dr time Match       : ${this.timematch}
 Appointment fees    : ${this.appointmentfees}
 Fee Options         : ${this.feeoptions[0]}       `);
    }
}
var obj = new detail ("2:00" , "2:00 to 5:00" , "2000" , ["online","card option" , "casshoption","get received"])

obj.show()

