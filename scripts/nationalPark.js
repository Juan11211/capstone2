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

    displayAllParks();

};

function searchByLocationHandler() {
    if (searchByLocation.checked) {
        searchByParkType.checked = false; // Uncheck the other radio button
        parkTypeDropDown.style.display = "none";
        locationDropDown.style.display = "block";
        populateLocationDropDown();
    }
}

function searchByParkTypeHandler() {
    if (searchByParkType.checked) {
        searchByLocation.checked = false; // Uncheck the other radio button
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
    // Display all parks without filtering
    displayLocation(nationalParksArray);
}

function displayLocation(selectedParks) {
    let displayParkLocation = document.getElementById("displayParkLocation");

    displayParkLocation.innerHTML = "";

    if (selectedParks.length > 0) {
        displayParkLocation.style.display = "block";

        // selectedParks.forEach(park => {
        //     const parkCard = document.createElement('div');
        //     parkCard.classList.add('card');
            

        //     parkCard.innerHTML = `
        //         <div class="card-body">
        //             <h5 class="card-title">${park.LocationName}</h5>
        //             <p class="card-text">Location: ${park.City}, ${park.State}</p>
        //         </div>
        //     `;

        //     displayParkLocation.appendChild(parkCard);
        // });

        selectedParks.forEach(park => {
            const parkCard = document.createElement('div');
            parkCard.classList.add('card');                 
        
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
        
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            const titleText = document.createTextNode(park.LocationName);
            cardTitle.appendChild(titleText);
        
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            const locationText = document.createTextNode(`Location: ${park.City}, ${park.State}`);
            cardText.appendChild(locationText);
        
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
        
            parkCard.appendChild(cardBody);
        
            displayParkLocation.appendChild(parkCard);
        });
        
        
    }
}

