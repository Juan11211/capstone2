"use strict";

window.onload = init;

const parksContainer = document.getElementById("parksContainer");
const searchByLocation = document.getElementById("searchByLocation");
const searchByParkType = document.getElementById("searchByParkType");

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = searchBtnClicked;
    populateLocationDropdown();
    populateParkTypeDropdown();
}

function populateLocationDropdown() {
    for (let location of locationsArray) {
        let newOption = new Option(location, location);
        searchByLocation.appendChild(newOption);
    }
}

function populateParkTypeDropdown() {
    let parkTypesArray = getParkTypeData();
    for (let parkType of parkTypesArray) {
        let newOption = new Option(parkType, parkType);
        searchByParkType.appendChild(newOption);
    }
}

function addLocationToContainer(location) {
    let accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    parksContainer.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + location.LocationID;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(location.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${location.LocationID}</p>
        <p><strong>Location Name:</strong> ${location.LocationName}</p>
        <p><strong>Address:</strong> ${location.Address}</p>
        <p><strong>City:</strong> ${location.City}</p>
        <p><strong>State:</strong> ${location.State}</p>
        <p><strong>Zip Code:</strong> ${location.ZipCode}</p>
        <p><strong>Phone:</strong> ${location.Phone}</p>
        <p><strong>Fax:</strong> ${location.Fax}</p>
        <p><strong>Latitude:</strong> ${location.Latitude}</p>
        <p><strong>Longitude:</strong> ${location.Longitude}</p>
    `;

    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);
}

function addParkTypeToContainer(park) {
    let accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    parksContainer.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + park.LocationID; 

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(park.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${park.LocationID}</p>
        <p><strong>Location Name:</strong> ${park.LocationName}</p>
        <p><strong>Address:</strong> ${park.Address}</p>
        <p><strong>City:</strong> ${park.City}</p>
        <p><strong>State:</strong> ${park.State}</p>
        <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
        <p><strong>Phone:</strong> ${park.Phone}</p>
        <p><strong>Fax:</strong> ${park.Fax}</p>
        <p><strong>Latitude:</strong> ${park.Latitude}</p>
        <p><strong>Longitude:</strong> ${park.Longitude}</p>
    `;

    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);
}

function searchBtnClicked() {
    parksContainer.innerHTML = "";

    let selectedLocation = searchByLocation.value;
    let selectedParkType = searchByParkType.value;

    if (selectedLocation) {
        // Search by location
        let parksInLocation = nationalParksArray.filter(park => park.State === selectedLocation);

        for (let park of parksInLocation) {
            addLocationToContainer(park);
        }
    }

    if (selectedParkType) {
        // Search by park type
        let parksOfType = nationalParksArray.filter(park => park.ParkType === selectedParkType);

        for (let park of parksOfType) {
            addParkTypeToContainer(park);
        }
    }
}
