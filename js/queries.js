// query params
const urlparams = new URLSearchParams(window.location.search),
  logo = urlparams.get("logo"),
  spotify = urlparams.get("spotify");

// elements
let arcadia_logo = document.querySelector("#arcadia_logo"),
  spotifyDisplay = document.querySelector("#spotify");

if (logo == "true") {
  arcadia_logo.style.display = "flex";
} else {
  arcadia_logo.style.display = "none";
}

if (spotify == "true") {
  spotifyDisplay.style.display = "flex";
} else {
  spotifyDisplay.style.display = "none";
}
