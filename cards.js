function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    if (mouseOver == True)
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    if (mouseOver == False)
    thissound.pause();
    thissound.currentTime = 0;
}