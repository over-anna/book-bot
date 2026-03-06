function loadVideoContent() {
  fetch("./assets/data/video-data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load video data");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const grid = document.getElementById("videoGrid");

      data.videos.forEach(video => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-12";

        grid.appendChild(col);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById("videoGrid").innerHTML =
        "<p class='text-danger'>Unable to load videos.</p>";
    });
}


function unloadVideoContent() {
  document.getElementById("videoGrid").textContent = '';

} 
