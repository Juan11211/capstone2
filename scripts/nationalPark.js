"use strict";

window.onload = function (e) {
    e.preventDefault(); 

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

    displayAllParks();

};

function clearDisplayedParks() {
    let displayParkLocation = document.getElementById("displayParkLocation");
    displayParkLocation.innerHTML = "";
    displayParkLocation.style.display = "none";
}

function searchByLocationHandler() {
    if (searchByLocation.checked) {
        searchByParkType.checked = false;
        parkTypeDropDown.style.display = "none";
        locationDropDown.style.display = "block";
        populateLocationDropDown();
        clearDisplayedParks(); // Clear displayed parks when changing the selection
    }
}

function searchByParkTypeHandler() {
    if (searchByParkType.checked) {
        searchByLocation.checked = false;
        locationDropDown.style.display = "none";
        parkTypeDropDown.style.display = "block";
        populateParkTypeDropDown();
        clearDisplayedParks(); // Clear displayed parks when changing the selection
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
    //Display all parks without filtering
    displayLocation(nationalParksArray);
}

function displayLocation(selectedParks) {
    let displayParkLocation = document.getElementById("displayParkLocation");

    displayParkLocation.innerHTML = "";

    if (selectedParks.length > 0) {
        displayParkLocation.style.display = "block";

        selectedParks.forEach(park => {
            const parkCard = document.createElement('div');
            parkCard.classList.add('card', 'mb-3');  // Adding Bootstrap card class and margin-bottom
        
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between'); // Added flex utility classes

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title', 'text-dark', 'mb-0');  // Adding Bootstrap text color class and margin-bottom
            const titleText = document.createTextNode(park.LocationName);
            cardTitle.appendChild(titleText);
        
            const cardText = document.createElement('p');
            cardText.classList.add('card-text', 'mb-2', 'ml-auto'); // Adding margin-bottom and ml-auto to move it to the right
            const locationText = document.createTextNode(`Location: ${park.City}, ${park.State}`);
            cardText.appendChild(locationText);

            // Check if the park has a Visit link
            if (park.Visit) {
                const parkLink = document.createElement('a');
                parkLink.setAttribute('href', park.Visit);
                parkLink.setAttribute('target', '_blank');
                parkLink.classList.add('btn', 'btn-dark', 'btn-sm', 'text-center', 'flex-shrink-0'); // Added flex-shrink-0 to prevent button from shrinking
                parkLink.innerHTML = 'Visit Property';
                cardBody.appendChild(parkLink);
            }
        
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            parkCard.appendChild(cardBody);
        
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
//             const parkCard = `
//             <div class="container row>
//             <div class="card mb-3">
//             <div class="card-body">
//                 <h5 class="card-title text-primary">${park.LocationName}</h5>
//                 <p class="card-text">Location: ${park.City}, ${park.State}</p>
//                 ${park.Visit ? `<a href="${park.Visit}" class="btn btn-dark btn-sm" target="_blank">Visit Property</a>` : ''}
//             </div>
//         </div>;
//     </div>
            
//         `
               

//             displayParkLocation.innerHTML += parkCard;
//         });
//     }
// }





