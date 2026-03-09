let numbers = [23,45,67,89,12,90,44];

let largest = numbers[0];
let secondLargest = numbers[0];

for(let i=0;i<numbers.length;i++){

    if(numbers[i] > largest){
        secondLargest = largest;
        largest = numbers[i];
    }

    else if(numbers[i] > secondLargest && numbers[i] != largest){
        secondLargest = numbers[i];
    }

}

console.log("Second Largest Number:", secondLargest);