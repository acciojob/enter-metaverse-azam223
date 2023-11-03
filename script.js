// Get references to the <p> tag and the button
const statusElement = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", function() {
    // Change the text inside the <p> tag to "Entered Metaverse"
    statusElement.textContent = "Entered Metaverse";
});
