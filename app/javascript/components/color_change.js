const functionColorChange = () => {
  if (document.getElementById('contact-content')) {
    const page = document.getElementById('contact-content');
    //Creates variables for x & y for know where our mouse is
    //x is for horizontal values, and y for vertical ones
    let x = 0;
    let y = 0;


    // Add Event Listener for page. Listens for any mouse movement
    // inside the page element. If found, run function below
    page.addEventListener('mousemove', function(event) {
      //Takes the mouse movement we listened for and saves it into two variables
      x = event.clientX;
      y = event.clientY;
      let rgb = [];
      rgb = [
              Math.round(x/page.clientWidth * 255),
              Math.round(y/page.clientHeight * 255),
              150
          ];
      const titles = document.querySelectorAll('.color-change');
      titles.forEach((item) => {
        item.style.color = 'rgb('+rgb.join(',')+')';
      });
      //Here we set the background color to the x & y value that the mouse has over the web page. See css part for rgb explaination
      //By writing variable + ', ' we combine the value with text to make it write like rgb(x, y, 100); when sent to style part (css)
      //Adds a text element to the page. It writes out the x & y value
    });
  };
}


export { functionColorChange };
