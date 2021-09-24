const cubes = document.getElementById("cubes");
let x = 0;
function rotateHue() {
  cubes.style.filter = `hue-rotate(${x}deg)`;
  x = x + 1;
  if (x > 360) {
    x = 0;
  }

  requestAnimationFrame(rotateHue);
}

window.requestAnimationFrame(rotateHue);
