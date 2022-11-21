$(function () {
  let beforeScr = $(this).scrollTop();
  $(window).scroll(function () {
    afterScr = $(this).scrollTop();
    if (afterScr > 50) {
      beforeScr < afterScr
        ? $(".header").addClass("active")
        : $(".header").removeClass("active");
    }
    beforeScr = afterScr;
  });

  $(".main-visual").mousemove(function (e) {
    sectWidth = $(this).outerWidth() / 2;
    xPos = (e.clientX - sectWidth) / 6;
    gsap.to(".visual-img", {
      x: xPos,
    });
  });
});
