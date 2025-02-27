// Write your code here!
// Remove the <main> element with id 'main'
document.querySelector("main#main").remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "Calvis Onyango is the champion";

// Append it to the body
document.body.appendChild(newHeader);
