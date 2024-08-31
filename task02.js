// Task 2:  Remove elements from an array

const elements =()=> {
    let array = [12,23,34,45,56,67,78,89]
    array.pop();
    array.shift();
    return array;
}
console.log(elements());