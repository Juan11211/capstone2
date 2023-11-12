"use strict";

window.onload = function () {
    let searchByLocation = document.getElementById("searchByLocation");
    let searchByParkType = document.getElementById("searchByParkType");
    let locationDropDown = document.getElementById("locationDropDown");
    let parkTypeDropDown = document.getElementById("parkTypeDropDown");

    searchByLocation.onchange = searchByLocationHandler;
    searchByParkType.onchange = searchByParkTypeHandler;

};

function populateLocationDropDown() {
    locationDropDown.innerHTML = ""; // Clear existing options
    for (let location of locationsArray) {
        let option = new Option(location);
        locationDropDown.appendChild(option);
    }
}

function populateParkTypeDropDown() {
    parkTypeDropDown.innerHTML = ""; // Clear existing options
    for (let parkType of parkTypesArray) {
        let option = new Option(parkType);
        parkTypeDropDown.appendChild(option);
    }
}

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

