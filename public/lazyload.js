window.onload = () => {
	alert("Page ready."); // for demonstration purposes
};

// creates blur up animation effect on downloaded and displayed image
function blurUp(e) {
  e.target.classList.add('loaded');
}

// our event handler; for each image it will check
// whether it entered the visible part of the page
// and if it did, copy data-src attribute of the image
// into it's src attribute, causing full-size image
// to load
var lazyLoadImages = debounce(function() {
  var images = document.querySelectorAll("#main-wrapper img[data-src]"),
      item;
  // load images that have entered the viewport
  [].forEach.call(images, function (item) {
    if (isElementInViewport(item)) {
      item.addEventListener("load", blurUp);
      item.setAttribute("src",item.getAttribute("data-src"));
      item.removeAttribute("data-src");
    }
  })
  // if all the images are loaded, stop calling the handler
  if (images.length == 0) {
    window.removeEventListener("DOMContentLoaded", lazyLoadImages);
    window.removeEventListener("load", lazyLoadImages);
    window.removeEventListener("resize", lazyLoadImages);
    window.removeEventListener("scroll", lazyLoadImages);
  }
}, 300, false);

//these handlers will be removed once all the images have loaded
window.addEventListener("DOMContentLoaded", lazyLoadImages);
window.addEventListener("load", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
window.addEventListener("scroll", lazyLoadImages);

// returns true if DOM element passed in as an argument
// is inside the visible part of the page
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
        var timeout;
        return function() {
                var context = this, args = arguments;
                var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
        };
};