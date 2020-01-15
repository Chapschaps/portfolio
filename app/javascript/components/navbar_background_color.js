import $ from 'jquery';

const backgroundColorChange = () => {
  if (document.getElementById('about-title')) {
    const navbar = document.querySelector(".navbar");
    const links = document.querySelectorAll(".navbar-links");
    links[0].style.color = "#353535";
    links[1].style.color = "#353535";
    navbar.style.backgroundColor = "white";
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        // var $navLinks = $(".navbar-links");
        var $fullHeightAbout = $(".full-height-about");
        $nav.toggleClass('scrolled-display', $(this).scrollTop() > ($fullHeightAbout.height()+$nav.height()));
        // $navLinks.toggleClass('scrolled', $(this).scrollTop() > $blackBack.height());
      });
    });
  };
  if (document.getElementById('projet-title')) {
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        // var $navLinks = $(".navbar-links");
        var $blackBack = $(".background-black-projet");
        $nav.toggleClass('scrolled-white', $(this).scrollTop() > $blackBack.height());
        // $navLinks.toggleClass('scrolled', $(this).scrollTop() > $blackBack.height());
      });
    });
  };
}

export { backgroundColorChange };
