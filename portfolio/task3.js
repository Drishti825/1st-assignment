let students = [

{name:"Alia", age:22, scores:[78,85,92]},
{name:"rahul", age:20, scores:[88,90,76]},
{name:"pooja", age:21, scores:[95,80,85]}

];

let topStudent = "";
let highestAverage = 0;

students.forEach(function(student){

let total = 0;

student.scores.forEach(function(score){
total += score;
});

let average = total / student.scores.length;

console.log(student.name + " average:", average);

if(average > highestAverage){
highestAverage = average;
topStudent = student.name;
}

});

console.log("Top Student:", topStudent,"with average score of",highestAverage);