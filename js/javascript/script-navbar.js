var acc = document.getElementsByClassName("panel-top");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



var cos = document.getElementsByClassName("panel-list");
var i;

for (i = 0; i < cos.length; i++) {
  cos[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelist = this.nextElementSibling;
    if (panelist.style.display === "block") {
      panelist.style.display = "none";
    } else {
      panelist.style.display = "block";
    }
  });
}