// query params
const urlparams = new URLSearchParams(window.location.search),
  logo = urlparams.get("logo"),
  spotify = urlparams.get("spotify");

let logoURL = logo;

// elements
let logoDiv = document.querySelector("#logo"),
  logoElem = document.querySelector("#logo_image"),
  spotifyDisplay = document.querySelector("#spotify");

if (!logo) {
  logoElem.style.display = "none";
} else if (logo == "arcadia") {
  logoElem.style.display = "flex";
  logoElem.setAttribute("src", "media/arcadia_spin.gif");
} else {
  logoElem.style.display = "flex";
  logoElem.setAttribute("src", logoURL);
}

if (spotify == "true") {
  spotifyDisplay.style.display = "flex";
} else {
  spotifyDisplay.style.display = "none";
}
