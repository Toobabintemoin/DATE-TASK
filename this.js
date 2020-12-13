                                  // School Management system //

                //  console.log(`================== Module 1 ===========================`);

function sms (name, fathername, class1 , lastclass, lastpassingmarks, rollnumber ){
    this.name=name;
    this.fathername= fathername;
    this.class1= class1;
    this.lastclass= lastclass;
    this.lastpassingmarks= lastpassingmarks;
    this.rollnumber= rollnumber;
   
    this.arrowfunction= function(){
        setTimeout(() => {
            console.log(this.name+ "\n"+ this.fathername+"\n"+ this.class1+"\n"+ this.lastclass+"\n"+ this.lastpassingmarks+"\n"+ this.rollnumber)},10);
        }
    }
    var module = new sms ("name: Tooba ", "fathername: moin ", "class1: 12 ", "lastclass: 11 ", "lastpassingmarks: 500 ", "rollnum: 009382")
    module.arrowfunction();
   
    

//                 //    console.log(`================== Module 2 ===========================`);
   
    function sms1 (admissionfees,monthlyfees, extracirculumfees,Gamefess){
    this.admissionfees= admissionfees;
    this.monthlyfees= monthlyfees;
    this.extracirculumfees=extracirculumfees;
    this.Gamefess= Gamefess;
   
    this.arrowfunction = function(){
        setTimeout(()=> {
            console.log(this.admissionfees+ "\n"+ this.monthlyfees+ "\n"+ this.extracirculumfees+ "\n"+ this.Gamefess)},20);
        }
    }


    var module1 = new sms1 ("25000", "5000" , "2000" , "3000")
    module1.arrowfunction();

//     // console.log(` =======================  MODULE 3 ==============================`);

    function sms2 (english, physics){
        this.english= english;
        this.physics= physics;

        this.arrowfunction = function(){
            setTimeout(() => {
                console.log(`${this.english} ${this.physics}`);
            },30);
        }
    }
    var marks = new sms2 (71 , 45)
    console.log(`English Marks : ${marks.english}`);
   if (marks.english >= 60 && marks.english <= 80 ) {
       console.log(`Status : pass`);
       
   }
   console.log(`Physics Marks  : ${marks.physics}`);
   if (marks.physics >30 && marks.physics < 50) {
       console.log(`Status : Fail`);
       
   }

 // console.log(` ===================  LIBRARY MANAGEMENT SYSTEM ===================`);
 
                   //  MODULE 1 //

function lms (id,name,fname,class1,uni){
            this.id = id
            this.name = name
            this.fname = fname
            this.class1 = class1
            this.uni = uni

    this.arrowfunction = function(){
        setTimeout(() => {
            console.log(`
    ID            : ${this.id} 
    Name          : ${this.name} 
    Father name   : ${this.fname}
    Class         : ${this.class1} 
    University id : ${this.uni}`);
            },10);
        } 
            
}
var libraray = new lms ("021365", "Tooba" , "moin" , "BSCS (Semester 2" , "02145")
libraray.arrowfunction()


                               // MODULE 2 //

function lms1 (physics,chem,bot,zoo){
        this.physics = physics
        this.chem = chem
        this.bot = bot
        this.zoo = zoo

    this.arrowfunction = function(){
        setTimeout(()=>{
            console.log(`
    PHYSICS : ${this.physics}
    CHEM    : ${this.chem}
    BOTANY  : ${this.bot}
    ZOOLOGY : ${this.zoo}`);
            },20)
        }
    }

    var management = new lms1 (["physics1" , " physics 2", " physics 3"] , ["chem1", " chem2" ," chem3"],
    ["bot1"," bot2"," bot3"],[" zoo1"," zoo2"," zoo3"]
    )
    management.arrowfunction()