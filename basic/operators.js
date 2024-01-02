// Increament and Decrement
var a = 10;
var b = 5
a++
b--
console.log(a)
console.log(b)


var ab = 69;
var ba = ab++;
console.log(ba); //this will give 69
console.log(ab)  //this will give 70


/*
    above code will return 69 not 70
    why because increament is happening in ab 
    so when he saw again ab he will give 70

    but above we storing in ba and printing ba
    so he not yet seen the ab so it giving 69
*/


//Pre Increament and Decrement
var alpha = 2;
var beta = ++alpha;
console.log(beta); //here it will print 3 before seeing another alphe he already increased so value 3