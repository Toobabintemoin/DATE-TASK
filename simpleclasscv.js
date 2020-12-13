console.log(`
             ********  <CURRICULUM VITAE>  *********`);

class cv {
    constructor(name, fname, dob , CNIC , Contact , email , address, city , domicile, qualification , reference) {
        this.name = name;
        this.fname = fname;
        this.dob = dob;
        this.CNIC = CNIC;
        this.Contact = Contact;
        this.email = email;
        this.address = address;
        this.city = city;
        this.domicile = domicile;
        this.qualification = qualification;
        this.reference = reference;
    }
    get name (){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    set fname (value){
        this._fname = value;
    }
    get fname (){
        return this._fname
    }
    set dob (value){
        this._dob = value;
    }
    get dob (){
        return this._dob;
    }
    set CNIC (value){
        this._CNIC = value ;
    }
    get CNIC (){
      return  this._CNIC;
    }
    set Contact (value){
        this._Contact = value ;
    }
    get Contact (){
        return this._Contact
    }
    set email (value){
        this._email = value ;
    }
    get email (){
        return this._email
    }
    set  address (value){
        this._address = value ;
    }
    get address (){
        return this._address
    }
    set  city (value){
        this._city = value ;
    }
    get city (){
        return this._city
    }
    set  domicile (value){
        this._domicile = value ;
    }
    get domicile (){
        return this._domicile
    }
    set  qualification (value){
        this._qualification = value ;
    }
    get qualification (){
        return this._qualification
    }
    set  reference (value){
        this._reference = value ;
    }
    get reference (){
        return this._reference
    }
    
  
}
let user = new cv ("Tooba bin te moin" , "moin-ud-din", "23-7-2000" , "42401-123654-6" , "0213659874", "abc@gmail.com",
 "abc area , karachi , pakistan" ,"karachi" , "west , karachi", "undergraduation" ,"To be furnished on request");
console.log(`
PERSONAL INFORMATION :`);
console.log(`
name     :  ${user._name}
fname    :  ${user._fname}
dob      :  ${user._dob}
CNIC     :  ${user._CNIC}
Contact  :  ${user._Contact}
Email    :  ${user._email}
Address  :  ${user._address}
City     :  ${user._city}
Domicile :  ${user._domicile}`);

console.log(`
QUALIFICATION :
${user._qualification}

REFERENCE :
${user._reference}`);