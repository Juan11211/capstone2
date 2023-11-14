"use strict";

window.onload = function () {
    let searchByLocation = document.getElementById("searchByLocation");
    let searchByParkType = document.getElementById("searchByParkType");
    let locationDropDown = document.getElementById("locationDropDown");
    let parkTypeDropDown = document.getElementById("parkTypeDropDown");

    searchByLocation.onchange = searchByLocationHandler;
    searchByParkType.onchange = searchByParkTypeHandler;

    parkTypeDropDown.style.display = 'none';
    locationDropDown.style.display = "none";

    locationDropDown.onchange = locationDropDownValue;
    parkTypeDropDown.onchange = parkTypeDropDownValue;

};

function searchByLocationHandler() {
    if (searchByLocation.checked) {
        parkTypeDropDown.style.display = "none";
        locationDropDown.style.display = "block";
        populateLocationDropDown();
    }
}

function searchByParkTypeHandler() {
    if (searchByParkType.checked) {
        locationDropDown.style.display = "none";
        parkTypeDropDown.style.display = "block";
        populateParkTypeDropDown();
    }
}

function populateLocationDropDown() {
    let defaultLocationOption = new Option("Select One", "");
    locationDropDown.appendChild(defaultLocationOption);
    for (let location of locationsArray) {
        let option = new Option(location);
        locationDropDown.appendChild(option);
    }
}


function populateParkTypeDropDown() {
    let defaultParkOption = new Option("Select One", "");
    parkTypeDropDown.appendChild(defaultParkOption)
    for (let parkType of parkTypesArray) {
        let option = new Option(parkType);
        parkTypeDropDown.appendChild(option);
    }
}

// function locationDropDownValue() {
//     let selectedValue = locationDropDown.value;
//     let selectedParks = []

//     if (selectedValue === "") {
//         selectedParks = nationalParksArray.filter(park => park.State === selectedValue);
//         console.log(selectedParks);

     
//     } 

//     if(selectedParks.length > 0){
//         displayLocation(selectedParks)
//     }
// }
function locationDropDownValue() {
    let selectedValue = locationDropDown.value;
    let selectedParks = [];

    if (selectedValue === "") {
        displayAllParks(); // Display all parks when no specific state is selected
    } else {
        selectedParks = nationalParksArray.filter(park => park.State === selectedValue);
        displayLocation(selectedParks); // Display parks for the selected state
    }
}


function parkTypeDropDownValue(){
    
}

// function displayAllParks() {
//     displayLocation(nationalParksArray); // Display all parks
// }

// function displayLocation(selectedParks) {
//     let displayParkLocation = document.getElementById("displayParkLocation");
    
//     displayParkLocation.innerHTML = ""; // Clear the content before populating with new park cards

//     selectedParks.forEach(park => {
//         const parkLocationCard = document.createElement("div");
//         parkLocationCard.classList.add("card");
//         parkLocationCard.style.width = "18rem";

//         const cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");
//         const cardTitle = document.createElement("h5");
//         cardTitle.classList.add("card-title");
//         cardTitle.innerText = park.LocationName; // Set the park name as card title

//         const cardText = document.createElement("p");
//         cardText.classList.add("card-text");
//         cardText.innerText = `Location: ${park.City}, ${park.State}`; // Display city and state

//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         parkLocationCard.appendChild(cardBody);

//         displayParkLocation.appendChild(parkLocationCard); // Append the card to the container
//     });
// }
function displayLocation(selectedParks) {
    let displayParkLocation = document.getElementById("displayParkLocation");
    displayParkLocation.innerHTML = ""; // Clear the content before populating with new park cards

    if (selectedParks.length > 0) {
        displayParkLocation.style.display = "block"; // Show the card section

        selectedParks.forEach(park => {
            const parkCard = document.createElement('div');
            parkCard.classList.add('card');

            parkCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${park.LocationName}</h5>
                    <p class="card-text">Location: ${park.City}, ${park.State}</p>
                </div>
            `;

            displayParkLocation.appendChild(parkCard);
        });
    } else {
        displayParkLocation.style.display = "none"; // Hide the card section if no parks are found
    }
}




function displayParkByType(){

}