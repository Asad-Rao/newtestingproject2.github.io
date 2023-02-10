var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");


    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
$(document).ready(function () {
  $(".container").click(function () {
      $(".bar1").toggleClass("change1")
      $(".bar2").toggleClass("change2")
      $(".bar3").toggleClass("change3")
  });
  $(".container").click(function(){
    $(".nav-ul").slideToggle("slow");
  });
});

$('.slideshow-container').slick({
  infinite: true,
  slidesToShow: 1,
  speed: 300,
  dots: true,
  infinite: true,
  arrows : false,
  responsive: [
    {
      breakpoint: 767,
      settings: {

       
      }
    },
    {
      breakpoint: 600,
      settings: {

    
      }
    },
    {
      breakpoint: 480,
      settings: {

      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

