// Task 4:  Iterate over an array

const element = (array)=>{
    for(x of array ){
        if ( x === 34) {
            continue;
        }
        // return x;
        console.log(x);
    }
}
// const result = element([12,23,34,45,56,67,78,89]);
// console.log(result);
element([12,23,34,45,56,67,78,89]);
