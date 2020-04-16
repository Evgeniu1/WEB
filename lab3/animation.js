var default_color;
function mouseIn() {
  default_color = document.changecolorbutton.but.style.background;
  document.changecolorbutton.but.style.background = "red";
}
function mouseOut() {
  document.changecolorbutton.but.style.background = default_color;
}
