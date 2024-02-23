//2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
var a = 0, b = 0, c = 0;

if(a< 0 || b< 0 || c<0)
{
    console.log("either of a, b, c's sign is -");
}
    else if(a> 0 || b > 0 || c<0)
    {
        console.log("all of a, b , c's is +");
    }
    else 
        console.log('a, b, c is 0');