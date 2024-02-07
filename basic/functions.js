function alpha(){
    console.log("ALPHA IS CALLED");
}

function beta(){
    console.log("BETA IS CALLED")
}

function gamma(){
    console.log("GAMMA IS CALLED");
}

function sigma(){
    console.log("SIGMA IS CALLED");
}

//alpha()
//gamma()

function add(){
    let a = 10;
    let b = 20;
    console.log(a+b);
}
add()

// Parameter passing
function addition(a,b){
    console.log(a+b);
}
addition(1,2)
addition(3,3)

var fanime = "One Piece";
var fcharacter = "Sanji";
var special = "Cook / Kind"
function anime(){
    console.log("famine :",fanime);
    console.log("fcharacter :"+ fcharacter);
    console.log("special :",special);
}
anime();

// Return type
function returns(){
    return "hello bruhh";
}
//returns();
var a = returns()
console.log(a)

//return type with paramete
function multiply(a,b){
    return a*b;
}
var a = multiply(10,10)
console.log(a);