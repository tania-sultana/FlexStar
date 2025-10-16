// ----------------faq-----------
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('li.q').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('li.a')
                    .slideUp();
    });
});

// ---------service section--------------

$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
})

// ---------testimonials------------

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });