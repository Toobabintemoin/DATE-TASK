var readline = require(`readline`);
var takeInput = readline.createInterface(process.stdin, process.stdout)

       ADDITION // 

takeInput.question("Enter first value =" ,  function(x){
    takeInput.question("Enter second value =" ,  function(y){

        var count = parseInt(x) + parseInt(y);
    console.log("the addition value =" + count );

    takeInput.close();
  })
})


      SUBTRACTION  //

takeInput.question(`Enter your first value=` , function(z){
    takeInput.question(`Enter your second value` ,function(s){
             
        var count = parseInt(z) - parseInt(s);
        console.log(`the value of subtraction =` , count);
        takeInput.close();
    })
})

      MULTIPLICATION  //

    takeInput.question(`Enter your value:` , function(a){
        takeInput.question(`Enter last value:` ,function(b){
            var count= parseInt(a) + parseInt(b);
            console.log("value of multiplication:" , count);
           takeInput.close();

        })
    })  

      DIVISION // 

      takeInput.question(`Enter the value:` , function(c){
          takeInput.question(`Enter last value` , function(d){
              var count = parseInt(c) / parseInt(d)
              console.log(`the division value` , count);
              takeInput.close();
          })
      })