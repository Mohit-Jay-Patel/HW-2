var n1 = 20;
console.log(n1);
var n2 = n1--; //postfix
console.log(n2);

var n3 = --n1; //prefix
console.log(n3);

var n1 = n1**3;
console.log(n1);

var a1 = "2";
// !=
if(a1 != 2){
    console.log("yes !=");
}
else{
    console.log("no !=");
}
// !==
if(a1 !== 2){            //Strict Inequality
    console.log("Yes !==");
}
else{
    console.log("No !==");
}

var a2 = 3;
console.log(a1+a2); //Implicit
console.log(a1*a2); 

var a3 = Number(a1); //Explicit
console.log(typeof a3);