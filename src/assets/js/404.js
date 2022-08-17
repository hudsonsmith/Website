var i = 0;
var txt = "Error 404: Content Not Found"

var speed = 75; /* The speed/duration of the effect in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();