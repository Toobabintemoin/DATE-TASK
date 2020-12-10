console.log(`             *******  METHOD 1 *******`);
var now = new Date()
console.log(`
Date : ${now.getDate()}
Month : ${now.getMonth()}
Year : ${now.getFullYear()}
Hours : ${now.getHours()}
Minutes : ${now.getMinutes()}
Second : ${now.getSeconds()}
Day : ${now.getDay()}`);



var its = new Date()
var months = ["Jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
console.log(months[its.getMonth()]);


console.log(`             ******** METHOD 2 ******** `);

var arr = new Date()
arr.setDate(12)
arr.setMonth(5)
arr.setFullYear(2020)
arr.setHours(12)
arr.setMinutes(05)
arr.setSeconds(23)
console.log(`
DATE  : ${arr.getDate()}
MONTH : ${arr.getMonth()}
YEAR  : ${arr.getFullYear()}
HOURS : ${arr.getHours()}
MIN   : ${arr.getMinutes()}
SEC   : ${arr.getSeconds()}`);

console.log(`             ******** METHOD 3 ******** `);

var str = new Date(2020,5,12,5,2,3,23)
console.log(`
YEAR     : ${str.getFullYear()}
MONTH    : ${str.getMonth()}
YEAR     : ${str.getFullYear()}
HOURS    : ${str.getHours()}
MIN      : ${str.getMinutes()}
SEC      : ${str.getSeconds()}
MILI-SEC : ${str.getMilliseconds()}`);

console.log(`             ******** METHOD 4 ******** `);

var dat = new Date("December 12 ,2020 , 9:30:54")


console.log(dat);












































// var d = new Date();
// d.setDate(d.getDate() + 50);
// console.log(d);






