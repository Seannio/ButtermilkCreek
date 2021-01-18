const menuBtn = document.querySelector('header .fa-bars');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => menu.style.display = menu.style.display === 'block' ? 'none' : 'block');

$(document).ready(function(){
    $('.product-gallery').slick({
        slidesToShow: 5,
	    slidesToScroll: 1,
	    autoplay: true,
  	    autoplaySpeed: 2000,
    });
});

//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});