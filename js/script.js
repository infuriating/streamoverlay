let svg_circle = document.querySelectorAll(".svg_circle"),
  svg_color1 = document.querySelectorAll(".svg_circle_c1"),
  svg_color2 = document.querySelectorAll(".svg_circle_c2");

function randomize() {
  for (let i = 0; i < svg_circle.length; i++) {
    svg_circle[i].setAttribute("cx", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].setAttribute("cy", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].style.transition = "all 12.5s ease-in-out";
  }

  let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16),
    randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  for (let i = 0; i < svg_color1.length; i++) {
    svg_color1[i].setAttribute("fill", randomColor1);
  }

  for (let i = 0; i < svg_color2.length; i++) {
    svg_color2[i].setAttribute("fill", randomColor2);
  }
}

randomize();

setInterval(() => {
  randomize();
}, 10000);
