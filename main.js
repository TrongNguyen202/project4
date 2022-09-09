function imgslider(anything){
    document.querySelector('.pepsi').src=anything;
}
function changebgcolor(color){
    const sec=document.querySelector('.sec');
    const hed=document.querySelector('.hed');
sec.style.background = color;
hed.style.background=color;
}
let viewpr=document.querySelector(" .showproducts")
let viewmain=document.querySelector(" .main")
let dropdown = document.querySelector(' .nav2')
dropdown.onclick=function(){
dropdown.classList.toggle('active');
viewmain.style.display="none";
viewpr.style.display="block";
}
//thoat show-product
var exit=document.querySelector(" .exit")
exit.onclick=function(){
  viewmain.style.display="block";
viewpr.style.display="none";
}
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("video-advertisement");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
     
      slides[slideIndex].style.display = "block";  
    
      //chuyển đến slide tiếp theo
      slideIndex++;
      
      
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 1);


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }


//in-viewport
  (function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".PZS-headline,.pepsi-animated");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  


  