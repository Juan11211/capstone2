"use strict";

window.onload = function () {

    let searchByLocation = document.getElementById("searchByLocation");
    let searchByParkType = document.getElementById("searchByParkType");
    let locationDropDown = document.getElementById("locationDropDown");
    let parkTypeDropDown = document.getElementById("parkTypeDropDown");

    searchByLocation.onchange = searchByLocationFunc;
    searchByParkType.onchange = searchByParkTypeFunc;

    parkTypeDropDown.style.display = 'none';
    locationDropDown.style.display = "none";

    locationDropDown.onchange = locationDropDownValue;
    parkTypeDropDown.onchange = parkTypeDropDownValue;

    displayAllParks();

};

function clearDisplayedParks() {
    let displayParkLocation = document.getElementById("displayParkLocation");
    displayParkLocation.innerHTML = "";
    displayParkLocation.style.display = "none";
}

function searchByLocationFunc() {
    if (searchByLocation.checked) {
        searchByParkType.checked = false;
        parkTypeDropDown.style.display = "none";
        locationDropDown.style.display = "block";
        populateLocationDropDown();
        clearDisplayedParks(); 
    }
}

function searchByParkTypeFunc() {
    if (searchByParkType.checked) {
        searchByLocation.checked = false;
        locationDropDown.style.display = "none";
        parkTypeDropDown.style.display = "block";
        populateParkTypeDropDown();
        clearDisplayedParks();
    }
}


function populateLocationDropDown() {
    let defaultLocationOption = new Option("Select One");
    locationDropDown.appendChild(defaultLocationOption);
    for (let location of locationsArray) {
        let option = new Option(location);
        locationDropDown.appendChild(option);
    }
}

function populateParkTypeDropDown() {
    let defaultParkOption = new Option("Select One");
    parkTypeDropDown.appendChild(defaultParkOption);
    for (let parkType of parkTypesArray) {
        let option = new Option(parkType);
        parkTypeDropDown.appendChild(option);
    }
}

function locationDropDownValue() {
    let selectedValue = locationDropDown.value;

    let selectedParks = []

    if (selectedValue !== "") {
        selectedParks = nationalParksArray.filter(park => park.State === selectedValue);
    }

    displayLocation(selectedParks);
}

function parkTypeDropDownValue() {
    let selectedParkType = parkTypeDropDown.value;

    let selectedParks = []
 
    if (selectedParkType !== "") {
        selectedParks = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));
            console.log(selectedParks)
    }

    displayLocation(selectedParks);
}

function displayAllParks() {
    displayLocation(nationalParksArray);
}


function displayLocation(selectedParks) {
    let displayParkLocation = document.getElementById("displayParkLocation");

    displayParkLocation.innerHTML = "";

    if (selectedParks.length > 0) {
        displayParkLocation.style.display = "block";

        selectedParks.forEach(park => {
            const parkCard = document.createElement('div');
            parkCard.classList.add('card', 'mb-3');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title', 'text-dark', 'mb-2', 'mt-2');
            let locationName = park.LocationName;
            const textNode = document.createTextNode(locationName);
            cardTitle.appendChild(textNode);

            const cardText = document.createElement('p');
            cardText.classList.add('card-text', 'mb-2');
            let locationCity = `Location: ${park.City}, ${park.State}`
            const locationNode = document.createTextNode(locationCity);
            cardText.appendChild(locationNode);

            // Check if the park has a Visit link
            if (park.Visit) {
                const parkLink = document.createElement('a');
                parkLink.setAttribute('href', park.Visit);
                parkLink.setAttribute('target', '_blank');
                parkLink.classList.add('btn', 'btn-dark', 'btn-sm', 'mt-3', 'w-25', 'ms-3', 'rounded'); // Adjust the width class as needed
                const linkText = document.createTextNode('Visit Property');
                parkLink.appendChild(linkText);
                parkCard.appendChild(parkLink);
            }
            
            
            
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            // add entire cardbody to the parkCard div. 
            parkCard.appendChild(cardBody);

            // add to parent div
            displayParkLocation.appendChild(parkCard);
        });
    }
}


// function displayLocation(selectedParks) {
//     let displayParkLocation = document.getElementById("displayParkLocation");

//     displayParkLocation.innerHTML = "";

//     if (selectedParks.length > 0) {
//         displayParkLocation.style.display = "block";

//         selectedParks.forEach(park => {
//             let visitLink = '';

//             if (park.Visit) {
//                 visitLink = `<button href="${park.Visit}" target="_blank" class="btn btn-dark">Visit Park</button>`;
//             }
    
//     const parkCard = 
//         `<div class="container">
//             <div class="row">
//                     <div class="card mb-3">
//                         <div class="card-body">
//                             <h5 class="card-title text-dark">${park.LocationName}</h5>
//                             <p class="card-text">Location: ${park.City}, ${park.State}</p>
//                             ${visitLink}
//                         </div>
//                     </div>
//             </div>
//         </div>`;
//             displayParkLocation.innerHTML += parkCard;
//         });
//     }
// }









