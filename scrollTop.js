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
