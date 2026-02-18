const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");


function renderMessage(msg) {
  searchMessage.innerHTML = `<li>${msg}</li>`;
}

searchInput.addEventListener("input", (e) => {
  // const query = e.target.value; 
  // constquery = e.target.value.trim(); //remove whitespace
  const query = e.target.value.trim().toLowerCase();


  let found = false;

  for (let i = 0; i < jsArrayData.length; i++) {
    // if (jsArrayData[i] === query) {
    // if (jsArrayData[i].toLowerCase() === query) { //if comparing lowercase only?
    if (jsArrayData[i].toLowerCase().includes(query)) { // substring matches

      found = true;
      break;
    }
  }
  
  if (!query) {
    renderMessage("Type a NATO word (example: Hotel)");
  } else if (found) {
    renderMessage(`Found exact match: ${query}`);
  } else {
    renderMessage(`No exact match: ${query}`);
  }
});

// initial message
renderMessage("Type a NATO word (example: Hotel)");