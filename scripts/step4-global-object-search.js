
// Global search: search all values in jsObjectData
// This step demonstrates searching for a query in ANY field of the object

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");

function renderObjectResults(items) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} | ${item.rating} | ${item.author}`;
    searchResults.appendChild(li);
  });
}

function handleGlobalObjectSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    renderObjectResults(jsObjectData);
    searchMessage.textContent = "Type to search all books";
    return;
  }
  
  const results = jsObjectData.filter(item => {
    const values = Object.values(item);
    // Debugging: Uncomment to see what is checked and matched
    // const matches = values.map(value => {
    //   const strVal = String(value).toLowerCase();
    //   const isMatch = strVal.includes(query);
    //   console.log(`Checking value:`, value, `->`, strVal, `Match:`, isMatch);
    //   return isMatch;
    // });
    // const itemMatch = matches.some(Boolean);
    // if (itemMatch) {
    //   console.log('MATCHED ITEM:', item);
    // }
    // return itemMatch;
    
    // Normal search logic:
    return values.some(value => String(value).toLowerCase().includes(query));
  });
  renderObjectResults(results);
  searchMessage.textContent = results.length ? `Found ${results.length} result(s)` : `No results for: ${query}`;
}

// Search as you type
searchInput.addEventListener("input", handleGlobalObjectSearch);

// Search on button click
searchButton.addEventListener("click", handleGlobalObjectSearch);

// Initial render
renderObjectResults(jsObjectData);
searchMessage.textContent = "Type to search all books";

