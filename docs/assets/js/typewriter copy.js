var i = 0;
var txt = "Hudson's Site"
// var strings = ["Hudson's Site", "Life, Love, Linux."]
var speed = 75; /* The speed/duration of the effect in milliseconds */

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();