let svg_circle = document.querySelectorAll(".svg_circle");

function randomize() {
  for (let i = 0; i < svg_circle.length; i++) {
    svg_circle[i].setAttribute("cx", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].setAttribute("cy", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].style.transition = "all 12.5s ease-in-out";
  }
}

randomize();

setInterval(() => {
  randomize();
}, 10000);
