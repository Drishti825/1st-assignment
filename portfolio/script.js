function addHobby(){

let input=document.getElementById("hobbyInput");
let text=input.value;

if(text===""){
alert("here enter something");
return;
}

let li=document.createElement("li");

li.innerHTML=text+' <button onclick="deleteItem(this)">Delete</button>';

document.getElementById("hobbyList").appendChild(li);

input.value="";
}

function deleteItem(button){

button.parentElement.remove();

}

function showAlert(){

alert("Your form is submitted successfully!");

}

function showDateTime(){

let now=new Date();

let date=now.toDateString();
let time=now.toLocaleTimeString();

document.getElementById("dateTime").innerHTML=date+" "+time;

}

showDateTime();
setInterval(showDateTime,1000);