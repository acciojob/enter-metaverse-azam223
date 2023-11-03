// Get references to the <p> tag and the button
const statusElement = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", function() {
    // Create a new <h1> element
    const h1Element = document.createElement("h1");
    
    // Set its text content to "Entered Metaverse"
    h1Element.textContent = "Entered Metaverse";
    
    // Replace the <p> tag with the new <h1> element
    statusElement.parentNode.replaceChild(h1Element, statusElement);
});
