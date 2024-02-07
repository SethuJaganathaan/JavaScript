var coding = true;
if (coding)
{
    let a = "Nice to code"
    console.log(a)
}
else
{
    let b = "Hate to code"
    console.log(b)
}

//logical op - and/or
console.log(false && true && true);  // o/p - false
console.log(false || true || true);  // o/p - true

//logical NOT
console.log(!true); // o/p - false
console.log(!false); // o/p - true

var color = "red";
if (color == "red")
{
    console.log("STOP");
}

var score = 0
if (score < 50)
{
    console.log("poor");
}
else if (score > 50 && score <= 70)
{
    console.log("Good");
}
else if (score <= 70)
{
    console.log("excellete")
}