document.getElementById("submit").addEventListener("mouseover", over);
 
document.getElementById("submit").addEventListener("mouseout", out);

function over() {
    document.getElementById("eyeballl").style.animationPlayState = "running";
    document.getElementById("eyeballr").style.animationPlayState = "running";
    document.getElementById("uppawl").style.animationPlayState = "running";
    document.getElementById("uppawr").style.animationPlayState = "running";
}

function out() {
    document.getElementById("eyeball").style.animationPlayState = "paused";
    document.getElementById("eyeballr").style.animationPlayState = "paused";
    document.getElementById("uppawl").style.animationPlayState = "paused";
    document.getElementById("uppawr").style.animationPlayState = "paused";
}