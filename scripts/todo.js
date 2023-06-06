"use strict";

// Variables - Interactive Elements

let todoId = document.getElementById("textIDInput");
let submitButton = document.getElementById("submitBtn");
let messageContainer = document.getElementById("messageContainer");
let output = document.getElementById("output");

let theId = document.getElementById("theId");
let title = document.getElementById("title");
let stat = document.getElementById("stat");
let userId = document.getElementById("userId");


/*__________________________________________________________________________________*/

window.onload = function() {
    submitButton.onclick = displayMessage;
}

function displayMessage() {
    
    fetch("https://jsonplaceholder.typicode.com/todos/" + todoId.value)
    .then(response => response.json())
    .then(data => {

        // let message =
        userId.innerHTML = data.userId
        theId.innerHTML = data.id
        title.innerHTML = data.title
        stat.innerHTML = data.completed
    
        // `TODO: ID: ${data.id} ${data.title} Completed: ${data.completed} User: ${data.userId} `
        // output.innerHTML = message;

    })
}

