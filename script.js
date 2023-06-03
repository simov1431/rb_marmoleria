window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  const headerCont = document.querySelector(".headerContainer");
  const links = document.getElementsByClassName("navLinks");
  let r = document.querySelector(":root");
  if (scroll > 99) {
    document.getElementById("logo").src = "/img/logoInvert.png";
    headerCont.style.backgroundColor = "rgba(0,0,0,0.7)";
    r.style.setProperty("--color", "#fff");
  } else {
    document.getElementById("logo").src = "/img/logo.png";
    headerCont.style.removeProperty("background-color");
    r.style.setProperty("--color", "#000");
  }
});
