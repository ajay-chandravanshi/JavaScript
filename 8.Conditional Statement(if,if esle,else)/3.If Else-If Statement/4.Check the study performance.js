let marks=prompt("Enter your marks");
if(marks>=90 && marks<=100)
{
    alert("Your performance is Excellent");
}

else if(marks>=70 && marks<90)
{
    alert("Your performance is Good");
}

else if(marks<70 && marks>=0)
{
    alert("You need to Improve your performance");
}
else
{
    alert("invalid input")
}