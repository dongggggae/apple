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
  // 마우스 움직이면서 x좌표 바꾸기
  $(".main-visual").mousemove(function (e) {
    sectWidth = $(this).outerWidth() / 2;
    xPos = (e.clientX - sectWidth) / 6;
    gsap.to(".visual-img", {
      x: xPos,
    });
  });
  // gsap scroll
  const watchIntro = gsap.timeline({
    scrollTrigger: {
      trigger: ".watch-intro",
      markers: true,
      start: "top top",
      end: "+=550%",
      scrub: 5,
      pin: true,
    },
  });

  watchIntro
    .addLabel("a")
    .to(".watch-intro .play span", { yPercent: -100 }, "a")
    .to(".watch-intro .replay span", { yPercent: 100 }, "a")
    .to(".watch-intro .text-main p", { opacity: 1, stagger: 0.5 })
    .to(".watch-intro .text-main p", { opacity: 0 })
    .to(".watch-intro .text-sub", { visibility: "visible", opacity: 1 })
    .to(".watch-intro .text-sub span", {
      opacity: 1,
      yPercent: -100,
      stagger: 0.2,
    })
    .to(".watch-intro .text-sub span", { opacity: 0.1 });
});
