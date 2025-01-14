let gamenum=12;
let input=prompt("Guess number between 1 to 25");

for(;input!=gamenum;)
{
    input=prompt("You entered Wrong  number.Guess Again");
}
console.log("Congratulation, you entered the right Number");