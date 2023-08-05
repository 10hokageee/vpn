
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