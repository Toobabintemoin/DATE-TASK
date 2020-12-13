const { stdin } = require(`process`)
var readline = require(`readline`)
var Takeinput = readline.createInterface(process.stdin, process.stdout)

console.log(`  
                           **********  WELCOME TO ALLIED BANK    *********** `);

var totalbalnce = 500000;
function atm(){
    console.log(`
CHOOSE OPTIONS :
1. Balance Enquiry
2. Cash Withdraw
3. Fast Cash
4. Online Transaction
5. Deposit Cash`);

Takeinput.question(`
Select any one option :` , function(name){
if(name == 1){
     console.log(`
    BALANCE ENQUIRY
  --------------------`);
    Takeinput.question(`Enter your 4 digit code :` , function(bal){
        var a = parseInt(bal) 
        console.log(`${totalbalnce}`);
       countbreak() })}

else if(name == 2){
           console.log(`
    Cash withdraw :
  ------------------`);
    Takeinput.question(`Please enter Amount to Withdraw :` , function(withdraw){
        var count = totalbalnce - parseInt(withdraw)
        console.log(`Your remaing balance is : ${count}`);
    countbreak()})}

else if (name == 3){
    console.log(`
    FAST CASH
  ----------------
    1. 10000 
    2. 20000
    3. 25000`);
    Takeinput.question(`Select any option :` , function(amount){
        if(amount == 1){
            balance = totalbalnce - 10000
            console.log(`Your remaining balance is ${balance}`);
       countbreak() }
       else if (amount == 2){
        balance = totalbalnce - 20000
        console.log(`Your remaining balance is ${balance}`);
        countbreak()}
        else if (amount == 3){
            balance = totalbalnce - 25000
            console.log(`Your remaining balance is ${balance}`);
            countbreak()}
            else{
                console.log(`Choose correct options`);
           atm() }})}

else if (name == 4){
        console.log(`
        Online Transaction
      ------------------------
        `);
        Takeinput.question(`Enter your Account number : ` , function(acc){
        if(acc.length == 12){
            Takeinput.question(`Enter Amount :`, function(acc){
            total = totalbalnce - parseInt(acc)
        console.log(`
  " Transfer completed "

Remaining balance is ${total}`);
        countbreak()})}
        else {
        console.log(`Wrong option`);
         atm()}})}

else if(name == 5){
        console.log(`
    DEPOSIT CASH
  -------------------  
        `);
        Takeinput.question(`Enter Amount : ` , function(deposit){
            var balnc = parseInt(totalbalnce) + parseInt(deposit)
            console.log(`Thank you for depositing, your new balance is:  ${balnc}`);
           
            countbreak()})}

        else{
            console.log(`Wrong option selected`);
            
atm()}})}

function countbreak(){
    Takeinput.question(`Do you want to contine Y/N : ` , function(choice){
        var b = choice.toLowerCase()
        if(b == `y`){
            atm()
        }
        else if (b == `n`){
            console.log(`Thanks for Using ATM services, See you soon`);
            Takeinput.close
        }
        else {
            console.log(`ERROR`);
        }
    })
}

atm()