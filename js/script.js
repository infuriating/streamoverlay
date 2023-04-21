let svg_circle = document.querySelectorAll(".svg_circle"),
  svg_color1 = document.querySelectorAll(".svg_circle_c1"),
  svg_color2 = document.querySelectorAll(".svg_circle_c2"),
  colors = [
    "#001220",
    "#00CC99",
    "#560090",
    "#6600FF",
    "#FA7268",
    "#C62368",
    "#140021",
    "#FF760E",
    "#038373",
    "#001829",
    "297EA6",
    "#715DF2",
    "#C62368",
    "#F7CACA",
    "#9900FF",
  ];

function randomize() {
  for (let i = 0; i < svg_circle.length; i++) {
    svg_circle[i].setAttribute("cx", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].setAttribute("cy", Math.floor(Math.random() * 2000 + 100));
    svg_circle[i].style.transition = "all 12.5s ease-in-out";
  }

  let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)];

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
