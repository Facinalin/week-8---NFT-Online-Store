$(function() {
  console.log('Hello Bootstrap5');
});

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//swiper-bigger//
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//artist-dropdown-btn//

$(function () {
	$(".button").click(function (e) {
		e.preventDefault();
		$(".dropdownList").slideToggle(500);
		$(".fa-angle-down").toggleClass("active");
	});
});
