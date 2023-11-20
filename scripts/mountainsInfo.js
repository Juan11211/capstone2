"use strict";

window.onload = function() {

    mountainDropDown();
}

function mountainDropDown() {
    let selectMountains = document.querySelector("#selectMountains");

    // add options to selection 
    let defaultSelection = new Option("Select One");
    selectMountains.appendChild(defaultSelection);
    for (let mountain of mountainsArray) {
        let options = new Option(mountain.name);
        selectMountains.appendChild(options);
    }

    // Attach the displayMountain function to the onchange event
    selectMountains.onchange = () => { 
        displayMountain(selectMountains);
    }
}

    async function getSunsetForMountain(lat, lng){
        let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
        let data = await response.json();
        return data;
    }



    // async function displayMountain(selectMountains) {
        
    //     let mountainValues = selectMountains.value;
    //     let displayMountains = document.getElementById("displayMountains");
        
    //     let selectedMountain = mountainsArray.find(mountain => mountain.name === mountainValues);
        
    //     if (selectedMountain) {
    //         let sunsetData = await getSunsetForMountain(selectedMountain.coords.lat, selectedMountain.coords.lng);
        
    //         displayMountains.innerHTML = 
    //         `<img src="${selectedMountain.img}" alt="${selectedMountain.name}">
    //         <h2 class="mt-3">${selectedMountain.name}</h2>
    //         <p>Elevation: ${selectedMountain.elevation} feet</p>
    //         <p>${selectedMountain.desc}</p>
    //         <p>Sunrise Time: ${sunsetData.results.sunrise}</p>
    //         <p>Sunset Time: ${sunsetData.results.sunset}</p>`;
    //         }
    //     }
        
    async function displayMountain(selectMountains) {
        let mountainValues = selectMountains.value;
        let displayMountains = document.getElementById("displayMountains");
    
        let selectedMountain = mountainsArray.find(mountain => mountain.name === mountainValues);
    
        if (selectedMountain) {
            // if selectMountain is true, we're going to wait for the getSunset function to run and we're going to pass in the selectedMountain lat and lng, basically #'s. 
            let sunsetData = await getSunsetForMountain(selectedMountain.coords.lat, selectedMountain.coords.lng);
    
            displayMountains.innerHTML = "";
    
            // Create elements for mountain display
            const mountainImage = document.createElement('img');
            mountainImage.setAttribute('src', selectedMountain.img);
            mountainImage.setAttribute('alt', selectedMountain.name);
    
            const mountainTitle = document.createElement('h2');
            mountainTitle.classList.add('mt-3');
            const titleText = document.createTextNode(selectedMountain.name);
            mountainTitle.appendChild(titleText);
    
            const elevationText = document.createElement('p');
            const elevationContent = document.createTextNode(`Elevation: ${selectedMountain.elevation} feet`);
            elevationText.appendChild(elevationContent);
    
            const descText = document.createElement('p');
            const descContent = document.createTextNode(selectedMountain.desc);
            descText.appendChild(descContent);
    
            const sunriseText = document.createElement('p');
            const sunriseContent = document.createTextNode(`Sunrise Time: ${sunsetData.results.sunrise}`);
            sunriseText.appendChild(sunriseContent);
    
            const sunsetText = document.createElement('p');
            const sunsetContent = document.createTextNode(`Sunset Time: ${sunsetData.results.sunset}`);
            sunsetText.appendChild(sunsetContent);
    
            // Append elements to the displayMountains container
            displayMountains.appendChild(mountainImage);
            displayMountains.appendChild(mountainTitle);
            displayMountains.appendChild(elevationText);
            displayMountains.appendChild(descText);
            displayMountains.appendChild(sunriseText);
            displayMountains.appendChild(sunsetText);
        }
    }
    
        


