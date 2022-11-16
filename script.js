function changea() {
  const navbar = document.getElementById("navbar-color");
  const scrollValue = window.scrollY();
  if (scrollValue < 150) {
    navbar.classList.remove("navbar-color");
  } else {
    navbar.classList.add("navbar-color");
  }
}

window.addEventListener('scroll',changea);