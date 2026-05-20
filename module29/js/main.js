var programmingL = ['Java','html','Python'];

console.log(programmingL);

console.log(programmingL[1]);

programmingL.push('css');
console.log(programmingL);

programmingL.pop();
console.log(programmingL);

programmingL.unshift('react');
console.log(programmingL);

programmingL.shift();
console.log(programmingL);

programmingL.slice(0,2,'javascript');
console.log(programmingL);

console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100))

var students=["Riga","Tuana"];

var [s1,s2]=students;

console.log(s1);


var places = ["[Prishtina","Prizreni","Peja","Gjakove"];

var [, firstplace,secondplace]= places;

console.log(secondplace);