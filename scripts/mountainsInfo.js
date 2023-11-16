"use strict";

window.onload = function() {

    mountainDropDown();
}

function mountainDropDown() {
    let selectMountains = document.querySelector("#selectMountains");

    // add options to selection 
    let defaultSelection = new Option("Select One", ""); // Provide an empty string as the value
    selectMountains.appendChild(defaultSelection);

    for (let mountain of mountainsArray) {
        let options = new Option(mountain.name);
        selectMountains.appendChild(options);
    }

    // Attach the displayMountain function to the onchange event
    selectMountains.onchange = function() {
        displayMountain(selectMountains);
    };
}

    async function getSunsetForMountain(lat, lng){
        let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
        let data = await response.json();
        return data;
        }



        async function displayMountain(selectMountains) {
        
            let mountainValues = selectMountains.value;
            let displayMountains = document.getElementById("displayMountains");
        
            let selectedMountain = mountainsArray.find(mountain => mountain.name === mountainValues);
        
            if (selectedMountain) {
                let sunsetData = await getSunsetForMountain(selectedMountain.coords.lat, selectedMountain.coords.lng);
        
                displayMountains.innerHTML = `
                    <img src="${selectedMountain.img}" alt="${selectedMountain.name}">
                    <h2 class="mt-3">${selectedMountain.name}</h2>
                    <p>Elevation: ${selectedMountain.elevation} feet</p>
                    <p>${selectedMountain.desc}</p>
                    <p>Sunrise Time: ${sunsetData.results.sunrise}</p>
                    <p>Sunset Time: ${sunsetData.results.sunset}</p>
                `;
            }
        }
        
        


