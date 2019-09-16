setInterval(rot, 10);
var i=0, d=10;
var earthColor = blue;

function rotate() {
    var sphere = document.querySelectorAll(".sphere");
    i = i<1000? i+d: -1000;
    if(i>500 || i<-500) d=50;
    else d=10;
    
    for(var ii=0;ii<sphere.length;ii++)
    sphere[ii].style.background = `radial-gradient(circle at ${i}px 100px, ${colors[ii]}, black)`;
    
}