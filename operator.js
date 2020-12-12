     // Arithmatic operators //
   
   // // SIMPLE OPERATOR CALCULATOR //

   console.log("=======OPERATOR CALCULATOR========");

   var a = 50;
   var b = 20;
   var c = a+b;
   var d= a-b;
   var e = a*b;
   var f = a/b;
   var g = a% b;
   var incre = ++a;
   var decre = --b;
  

   console.log("The Sum is :" + c );
   console.log("The Difference is  :" + d);
   console.log("A Product is:" + e);
   console.log("division:" + f);
   console.log("Modulus:" + g);
   console.log("increment is :" , incre);
   console.log("decrement is :" , decre);


   // CALCULATE DISCOUNT THROUGH OPERATOR //

   console.log("================CALCULATE DISCOUNT===========");
   var actualPrice = 1000;
   var sellingPrice = 700;

   var discountPercent = ((actualPrice - sellingPrice)/actualPrice) * 100

   console.log(`
   discountPercent : ${discountPercent}` + ` % off`, `\n` );


   // CALCULATE TEMPERATURE THROUGH OPERATOR // 

   console.log(`=================CALCULATE TEMPERATURE============` , );

   var celsiusTemperature = 31;
   var fahrenheitTemperature = 88;

   var celsiusTempConvertToFahrenheit = (celsiusTemperature * (9/5)+ 32);
   var fahrenheittempConvertToCalsius = (5/9 *( fahrenheitTemperature - 32))

   console.log(`
   celsiusTempConvertToFahrenheit  is : ${celsiusTempConvertToFahrenheit}
   fahrenheittempConvertToCalsius is :  ${fahrenheittempConvertToCalsius}`);

// convert currency //

var usDollar = 10;
var saudiRiyals = 25;

var dollarConvertToPkr =  (168 * usDollar);
var riyalsConvertToPkr =( 42 * saudiRiyals);
var totalOfBothCurrencyValue = dollarConvertToPkr + riyalsConvertToPkr;

console.log(`
dollarConvertToPkr is : ${dollarConvertToPkr}
riyalsConvertToPkr is : ${riyalsConvertToPkr}
totalOfBothCurrencyValue is : ${totalOfBothCurrencyValue} `);




// increment and decrement //


var a = 2;
    b = 1;

var result = --a - --b + ++b + b--;
  console.log(`
  a is = 1
  b is = 2 
  result is :  ${result} `);




 // ASSIGNMENT OPERATOR //

var a = 33;
var b = 10;

var result = ( a += b)
var result1 = ( a -= b)
var result2 = ( a *= b)
var result3 = ( a /= b)
var result4 = ( a %= b)
var result5 = ( a **= b)

console.log(`
a +=b is  : ${result}
a -=b is  : ${result1}
a *=b is  : ${result2}
a /=b is  :  ${result3}
a %=b is  : ${result4} 
a **=b is : ${result5}`);

console.log("========Comparision operator==========");

var firstValue = 100;
var secondValue = 50;

var equalValue = (firstValue ==  secondValue);
var equalValueAndType = (firstValue ===  secondValue);
var notEqual = (firstValue !=  secondValue);
var notEqualAndType = (firstValue !==  secondValue);
var greaterThan = (firstValue >  secondValue);
var lessThan = (firstValue <  secondValue);
var greaterThanEqual = (firstValue >=  secondValue);
var lessThanEqual = (firstValue <=  secondValue);

console.log(`
equalValue is : ${equalValue}
equalValueAndType is : ${equalValueAndType}
notEqual is : ${notEqual}
notEqualAndType is : ${notEqualAndType}
greaterThan is ${greaterThan}
lessThan is : ${lessThan}
greaterThanEqual is : ${greaterThanEqual}
lessThanEqual is : ${lessThanEqual}`);










