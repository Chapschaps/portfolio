const navbarUnderline = () => {
  if (document.getElementById('title')) {
    const links = document.querySelectorAll(".navbar-links");
    links[0].classList.add("active");
  };
  if (document.getElementById('about-title')) {
    const links = document.querySelectorAll(".navbar-links");
    links[2].classList.add("active");
  };
  if (document.getElementById('projet-title')) {
    const links = document.querySelectorAll(".navbar-links");
    links[1].classList.add("active");
  };
}


export { navbarUnderline };
