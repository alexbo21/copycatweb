var txt = document.getElementById("text").innerHTML = "Show";


var x = document.getElementById("downloads")
x.style.display = "none";


function makeSmall(){
  var x = document.getElementById("downloads");
  if (x.style.display === "none"){
    x.style.display = "block";
    document.getElementById("text").innerHTML = "Close";
  } else {
    x.style.display = "none";
    document.getElementById("text").innerHTML = "Show";
  };
};

function oops(){
  document.getElementById("opp").innerHTML = "we have not realesed this yet!";
};
