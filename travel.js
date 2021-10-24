// ON SCROLL EVENT LISTENERS
window.addEventListener("scroll", show);

function show() {
  var content = document.querySelectorAll(".container");

  for (var i = 0; i < content.length; i++) {
    var contentPosition = content[i].getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content[i].classList.add("active");
    } else {
      content[i].classList.remove("active");
    }
  }
}
