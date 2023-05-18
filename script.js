$(document).ready(function () {
  const carousel = (container, margin) => {
    $(container).owlCarousel({
      loop: true,
      margin: margin,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  };

  carousel(".featured-products", 10);
  carousel(".new-arrival-products", 70);
  carousel(".product-categories", 20);
  carousel(".brands", 20);

  $(".hamburger").click(() => {
    $("nav").toggleClass("active");
  });
});
