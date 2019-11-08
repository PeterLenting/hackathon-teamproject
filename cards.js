
document.getElementById("Sound1").onmouseover = function() {mouseOver};
document.getElementById("Sound1").onmouseout = function() {mouseOut};

function mouseOver() {
  document.getElementById("Sound1").play();
}

function mouseOut() {
  document.getElementById("Sound1").stop();
}


