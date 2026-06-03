// //for - (in)

// var person = {firstName: "John", lastName:"Doe", age:25}

// var text = '';

// var z;

// for(z in person) {
//     text += person[z];
// }

// //1 -->"John"
// //2 ==>"JohnDoe"
// //3 -->"JohnDoe25"

// console.log(text);

// console.log("--------------------------------")

// // for - (of)

// var names = ['Steve','Bill','Mark'];

// var y;

// for( y of names ) {
//     console.log(y)
// }

// console.log("-------------------------------")

// var txt = "Javascript";

// var l;

// for(l of txt){
//     console.log(l)
// }

// console.log("------------------------------------------")

var text = "The best school in the world is Digital School?!";

var result = text.search("Digital School");

document.getElementById("result1").innerHTML = result;


var text = "The best school in the world is Digital School?!";

var result = text.search(/Digital School/)

document.getElementById("result2").innerHTML = result;

var text = "The best school in the world is Digital School?!";

var result = text.replace(/Digital School/ , "Another School")

document.getElementById("result3").innerHTML = result;

var text = "abcdef";

var regex = new RegExp('abc');

document.getElementById("result4").innerHTML = result.test(text)

var text = "My school is the best school in the world!";

var regex = /school/;

dovument.getElementById("result5").innerHTML = text.match(regex)

var text = "Digital School is the best school in the world!";

var regex = /i/g;

dovument.getElementById("result6").innerHTML = text.match(regex)

var text = "Digital School is the best school in the world!";

var regex = /[abc]/g;

dovument.getElementById("result7").innerHTML = text.match(regex)

var text = "Digital School is in top 10 best schools in the world!";

var regex = /[0-9]/g;

dovument.getElementById("result8").innerHTML = text.match(regex)

var text = "My school is the best school in the world!";

var regex = /(top | best | school)/g;

dovument.getElementById("result9").innerHTML = text.match(regex)

var text = "100 percent 1 !";

var regex = /\d/g;
//digit   

dovument.getElementById("result10").innerHTML = text.match(regex)

var text = "My school is the best school in the world!";

var regex = /\s/g;
//space

dovument.getElementById("result11").innerHTML = text.match(regex)

var text = "Heeey, how are you?!";

var regex = /e+/g;

dovument.getElementById("result12").innerHTML = text.match(regex)

var text = "so i hope we'll see each other again soon...!";

var regex = /so*/g;

dovument.getElementById("result13").innerHTML = text.match(regex)

var text = "hey, hi, hiii!!!";

var regex = /hi?/g;

dovument.getElementById("result14").innerHTML = text.match(regex)

var text = "hello, helloo, hellooo!!!";

var regex = /o{3}/g;

dovument.getElementById("result15").innerHTML = text.match(regex)

var text = "hello, helloo, hellooo, helloooo, heloooooooooo!";

var regex = /o{3,5}/g;

dovument.getElementById("result16").innerHTML = text.match(regex) 

var text = "bestfriend, boyfriend, girlfriend";

var regex = /end$/g;

dovument.getElementById("result17").innerHTML = text.match(regex) 