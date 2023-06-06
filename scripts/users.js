"use strict";

// Variables - Interactive Elements
// let table = document.getElementById("userTable");
const tablebody = document.getElementById("tablebody");



/*__________________________________________________________________________________*/

window.onload = function() {

    fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            for (user of users) {
                // let row = table.insertRow(-1);
                addRowForUser(user);

                // cell1.innerHTML = data[i].id;
                // cell2.innerHTML = data[i].name;
                // cell3.innerHTML = data[i].username;
                // cell4.innerHTML = data[i].address;
                // cell5.innerHTML = data[i].geo;
                // cell6.innerHTML = data[i].phone;
                // cell7.innerHTML = data[i].website;
                // cell8.innerHTML = data[i].company;
            }
        });
};

function addRowForUser(user){
   let newrow = tablebody.insertRow(-1);
   let cell1 = newrow.insertCell(0);
   cell1.innerHTML = user.name;

   let cell2 = newrow.insertCell(1);
   cell2.innerHTML = user.username;

   let cell3 = newrow.insertcell(2);
   cell3.innerHTML = user.email;

   letcell4 = newrow.insertCell(3);
   cell4.innerHTML = user.company.name;


}