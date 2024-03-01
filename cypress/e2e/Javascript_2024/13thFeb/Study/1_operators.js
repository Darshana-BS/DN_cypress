//unary operators
//increment------------------
var a = 2;
   //postfix
    console.log(a++)
    console.log(a);
var b = 2;
    //prefix
    console.log(++b)
    console.log(b);

//decrement------------------
var aa = 8;
   //postfix
    console.log(aa--)    //8
    console.log(aa);     //7
    //prefix
    console.log(--aa)    //6
    console.log(aa);     //6

////////////////////////////////
//arithmetic operators
var a = 10, b = 2;
console.log(a+b, a-b, a*b, a%b, a^b, a**b, a/b);

////////////////////////////////
//shift operators
var d = 8, e = 2
console.log(d<<e, d>>e) //8*4 = 32, 8/4 = 2

////////////////////////////////
//Relatoional operators
var x=10, y=10;
console.log(x=="y")
console.log(x==="y")
console.log(2=='2')
console.log(2==='2')
console.log(2!='2')
console.log(2>='2')

/////////////////////////////////
//Bitwise Operators
var a = 8, b = 2
console.log('a AND b', a&b)
console.log('a OR b', a|b)
console.log('a XOR b', a^b)
console.log('a NOT a', ~a)

/////////////////////////////////
//Logical Operators
var a = true, b  =true
console.log(a&&b)
console.log(a||b)
console.log(!a)

////////////////////////////////
//Assigment and Ternary operators
var ab = 2
console.log(ab=2)?console.log('Left'):console.log('Right')

    