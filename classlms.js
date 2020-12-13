console.log(`
                           //*****  library Management  SYSTEM  *****// 
                           
                                     // Module 1 // `);
                            
class lms {
    constructor(id,name,fname,class1,uni){
        this.id = id
        this.name = name
        this.fname = fname
        this.class1 = class1
        this.uni = uni

    }
    set id(val){
        this._id = val;
    }
    get id (){
        return this._id
    }
    set name(val){
        this._name = val;
    }
    get name (){
        return this._name
    }
    set fname(val){
        this._fname = val;
    }
    get fname (){
        return this._fname
    }
    set class1(val){
        this._class1 = val;
    }
    get class1 (){
        return this._class1
    }
    set uni(val){
        this._uni = val;
    }
    get uni (){
        return this._uni
    }
}

let module1 = new lms ("021569", "Tooba", "moin" ,"BSCS (Semester 5)" , "#000215")
console.log(`User id           :  ${module1._id}
User name         : ${module1._name}
Father name       : ${module1.fname}
Class of student  : ${module1.class1}
University id     : ${module1._uni}`);

console.log(` 
                                  // Module 2 // 
                                   `);
            
class lms1 {
    constructor(physics,chem,bot,zoo){
        this.physics = physics
        this.chem = chem
        this.bot = bot
        this.zoo = zoo

    }
    set physics(val){
        this._physics = val;
    }
    get physics (){
        return this._physics
    }
    set chem(val){
        this._chem = val;
    }
    get chem (){
        return this._chem
    }
    set bot(val){
        this._bot = val;
    }
    get bot (){
        return this._bot
    }
    set zoo(val){
        this._zoo = val;
    }
    get zoo (){
        return this._zoo
    }


}
let module2 = new lms1 (["phy1","phy2" , "phy3" , "phy4","phy5","phy6"] , ["chem1","chem2","chem3", "chem4"],
["botany1", "botany 2", "botany 3" , "botany 4"],["zoology 1", "zoology 2", "zoology 3"])


console.log(`Physics Books  :
${module2._physics[0]}
${module2._physics[1]}
${module2._physics[2]}
${module2._physics[3]}
${module2._physics[4]}
${module2._physics[5]}


Cemistry Books :
${module2._chem[0]}
${module2._chem[1]}
${module2._chem[2]}
${module2._chem[3]}

Botany Books :
${module2.bot[0]}
${module2.bot[1]}
${module2.bot[2]}
${module2.bot[3]}

Zoology Books : 
${module2.zoo[0]}
${module2.zoo[1]}
${module2.zoo[2]}`);