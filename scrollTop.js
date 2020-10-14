// select button
const scrollTopBtn = document.getElementById('scroll_top');

// store root element
  // Offset values based on this elem
const rootElem = document.documentElement;


function scrollTop(){
  
    rootElem.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// event listener for scrolling

scrollTopBtn.addEventListener('click', scrollTop);

// toggle scroll top

window.onscroll = function () {
  if (pageYOffset >= 300) {
      scrollTopBtn.style.visibility = "visible";
  } else {
     scrollTopBtn.style.visibility = "hidden";
  }
};

 scrollTopBtn.onclick = function()
{
  scrollTo(document.body, 0, 0);
}

function scrollTo(element, to, duration) {
  var start = element.scrollTopBtn,
      change = to - start,
      currentTime = 0,
      increment = 20;

  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);                        
      element.scrollTop = val; 
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};