
var newwindow = window;
newwindow.addEventListener('beforeunload',popDown);
document.getElementById("overlay").style.display = "none";
document.getElementById("btn1").onclick = popup;

function popup(){    
    document.getElementById("overlay").style.display = "block";
    newwindow.open("https://wwww.google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,top=200,left=550,width=800,height=600", 
    "Access-Control-Allow-Origin");
}


function popDown(){
    document.getElementById("overlay").style.display = "none";
}   
    