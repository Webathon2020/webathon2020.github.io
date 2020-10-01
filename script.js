var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.addEventListener("click", (e) => {
    debugger
  var inps = document.querySelectorAll("input")
  var reslt = []
  inps.forEach((item) => {
    item.style.border = "black 1px solid"
    if(item.value !== "") {
      reslt.push(true)
    } else{
      reslt.push(false);
      item.style.border = "2px red solid"
    }
  })
  e.preventDefault();
  debugger
  console.log(reslt ==[true, true, true, true, true] )
    if(reslt.every((item) => {
        if(item == true) {
            return true
        }
    })) {
      modal.style.display = "block"
    }
});var span = document.getElementsByClassName("close")[0];
var name = document.getElementById("username");
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
