// Get the modal
function openSignupForm(){
  closeLoginForm()
  document.getElementById('id02').style.display='block'
}


// Get the modal
var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};