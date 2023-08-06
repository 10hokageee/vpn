
$(function(){
  $('.reviews__list-items').slick({
    prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  });
});

$(window).on("scroll", function (){
	if ($(window).scrollTop() > 50) {
		$(".header__inner").addClass("header-fixed");
	} else {
		$(".header__inner").removeClass("header-fixed");
	}
});

$(".header__menu-list-link, .logo").on("click", function(event){
	event.preventDefault();
	const scrollAnchor = $(this).attr("href");
	let scrollPoint = $(scrollAnchor).offset().top;

	if (scrollAnchor === "#home") {
		scrollPoint = scrollPoint;

	}

	$("html, body").animate (
		{
			scrollTop: scrollPoint,
		},
		1500
	);
return false;
});
