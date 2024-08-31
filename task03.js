// Task 3:  Modify elements in an array

let elements =(array)=>{
    array[0] = 10;
    return array;
}
const result = elements([12,23,34,45,56,67,78]);
console.log(result);