// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("registration-password").value=""
  document.getElementById("registration-email").value=""
  document.getElementById("registration-name").value=""
  document.getElementById("registration-number").value=""
  document.getElementById("registration-course").value=""
  document.getElementById("registration-reemail").value=""
  document.getElementById("registration-job").value=""
  document.getElementById("registration-parentcontact").value=""
  document.getElementById("registration-parent").value=""
  document.getElementById("registration-teacher").value=""
  document.getElementById("registration-classes").value=""
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("registration-password").value=""
    document.getElementById("registration-email").value=""
    document.getElementById("registration-name").value=""
    document.getElementById("registration-number").value=""
    document.getElementById("registration-course").value=""
    document.getElementById("registration-reemail").value=""
    document.getElementById("registration-job").value=""
    document.getElementById("registration-parentcontact").value=""
    document.getElementById("registration-parent").value=""
    document.getElementById("registration-teacher").value=""
    document.getElementById("registration-classes").value=""
  }
}