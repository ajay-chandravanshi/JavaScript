// map is used to create new array  using some return value based on each value which is stored at the individual indieses of the array

// map use hota hai jab hume values ko use karke naya array create karna ho

let nums=[23,45,67];
let newArr=nums.map((val)=>{
    console.log(val)
    return val*2;
});

console.log(newArr)