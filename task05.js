// Task 5:  Filter elements in an array

const elements =(array)=>{
    let x = array.filter(function(number) {
        return number > 25;
    });
    console.log(x);
}
results = elements([12,23,34,45,56,67,78,89,90]);
console.log(results);