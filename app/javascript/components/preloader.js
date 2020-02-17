const noScroll = () => {
  window.scrollTo(0, 0);
}

const preloader = () => {
  window.addEventListener('load', () => {
    window.addEventListener('scroll', noScroll);
    const preload = document.querySelector('.preloader');
    const navbar = document.querySelector(".navbar");
    if (navbar.style.backgroundColor === "white") {
      preload.style.backgroundColor= "#FAFAFA"
    // var op = 1;  // initial opacity
    // var timer = setInterval(function () {
    //     if (op <= 0.1){
    //         clearInterval(timer);
    //         preload.style.display = 'none';
    //     }
    //     preload.style.opacity = op;
    //     preload.style.filter = 'alpha(opacity=' + op * 100 + ")";
    //     op -= op * 0.1;
    // }, 50);
    };
    preload.style.display = "none";
    window.removeEventListener('scroll', noScroll);
  });
}

export { preloader };
