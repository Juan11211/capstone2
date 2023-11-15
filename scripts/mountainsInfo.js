"use strict"

window.onload = function() {

mountainDropDown();


}

function mountainDropDown(){
    let selectMountain = document.querySelector("#selectMountain");

    // add options to selection 
    let defaultSelection = new Option("Select One");
    selectMountain.appendChild(defaultSelection)
}