let a=prompt("Enter first side in number");

let b=prompt("Enter second side in number");

let c=prompt("Enter third side in number");

if(a+b>c)
{
    alert("Triangle is Valid");
}

else if(a+c>b)
{
    alert("Triangle is Valid");
}

else if(b+c>a)
{
    alert("Triangle is Valid");
}

else{
    alert("Triangle is Not Valid");
}