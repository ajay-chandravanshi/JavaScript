let price=[250,645,300,900,50];
// let final=0;
for(let i=0;i<price.length;i++)
{
    // dive by 10 because give offer of 10%
    offer=price[i]/10;
    price[i]=price[i]-offer;
}
console.log(price);
