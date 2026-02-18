const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchButton = document.getElementById("searchButton");

const searchableFields = ["title", "category"];

function renderSearchResults(items) {
  results.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} (${item.category})`;
    results.appendChild(li);
  });
}

function searchControlled(query) {
  const q = query.toLowerCase();

  return jsObjectData.filter(item =>
    SEARCHABLE_FIELDS.some(field =>
      String(item[field]).toLowerCase().includes(q)
    )
  );
}

// Optional: Global search for comparison
function searchGlobal(query) {
  const q = query.toLowerCase();

  return DATA.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(q)
    )
  );
}

input.addEventListener("input", e => {
  const query = e.target.value.trim();

  if (!query) {
    render(DATA);
    return;
  }

  const results = searchControlled(query);
  render(results);
});

render(DATA);