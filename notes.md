function displayLocation(selectedParks) {
    // Get references to the elements inside the card
    let imageElement = document.getElementById("parkImage");
    let titleElement = document.getElementById("parkTitle");
    let locationElement = document.getElementById("parkLocation");
    let linkElement = document.getElementById("parkLink");

    // Update the content with data from the park object
    if (selectedParks.length > 0) {
        let park = selectedParks[0]; // Assuming you're dealing with a single park

        imageElement.src = park.img; // Assuming 'img' is the property in your park object
        imageElement.alt = park.LocationName;
        titleElement.textContent = park.LocationName;
        locationElement.textContent = `Location: ${park.City}, ${park.State}`;

        if (park.Visit) {
            linkElement.href = park.Visit;
            linkElement.style.display = "inline-block"; // Show the link if there's a Visit URL
        } else {
            linkElement.style.display = "none"; // Hide the link if there's no Visit URL
        }
    } else {
        // If no park is selected, clear the content
        imageElement.src = "";
        imageElement.alt = "";
        titleElement.textContent = "";
        locationElement.textContent = "";
        linkElement.href = "#"; // You might want to set a default link here
        linkElement.style.display = "none";
    }
}
