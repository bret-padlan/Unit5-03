function button() {
  document.getElementById("paragraph2").innerHTML = "This should work, right?";
  document.body.style.backgroundColor = "chocolate"
}

function button2() {
  document.getElementById("paragraph2").innerHTML = "Yes, it should";
  document.body.style.backgroundColor = "lightblue" 
}

document.getElementById("add").addEventListener("click", diskCord)
function diskCord() {
  alert ("ERROR DO NOT CLICK OK")
  document.getElementById("back").style.backgroundColor = "red"
}
