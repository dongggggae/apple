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
      start: "top top",
      end: "+=2000%",
      scrub: 5,
      pin: true,
    },
  });

  watchIntro
    .addLabel("a")
    .to(".watch-intro .play span", { yPercent: -100 }, "a+=1")
    .to(".watch-intro .replay span", { yPercent: 100 }, "a+=1")
    .to(".watch-intro .text-main p", { opacity: 1, stagger: 0.5 })
    .to(".watch-intro .text-main p", { opacity: 0 })
    .to(".watch-intro .text-sub", { visibility: "visible", opacity: 1 })
    .to(".watch-intro .text-sub span", {
      opacity: 1,
      yPercent: -100,
      stagger: 0.2,
    })
    .to(".watch-intro .text-sub span", { opacity: 0.1 })
    .addLabel("b")
    .to(".watch-intro .watch-area", { yPercent: -100, opacity: 1 })
    .to(
      ".watch-intro .watch-area .watch-wrap",
      { yPercent: -100, scale: 1, opacity: 1, duration: 2 },
      "b+=1"
    )
    .to(
      ".watch-intro .watch-area .seneitem",
      { opacity: 1, stagger: 7 },
      "b+=2"
    )
    .to(
      ".watch-intro .watch-area .col1 span",
      { yPercent: -100, opacity: 1, stagger: 2, duration: 2 },
      "b+=3"
    )
    .to(".watch-intro .watch-area .col1 span", { opacity: 0 }, "b+=10")
    .to(
      ".watch-intro .watch-area .col2 span",
      { yPercent: -100, opacity: 1, stagger: 2, duration: 2 },
      "b+=11"
    )
    .to(".watch-intro .watch-area .col2 span", { opacity: 0 }, "b+=18")
    .to(
      ".watch-intro .watch-area .col3 span",
      { yPercent: -100, opacity: 1, stagger: 2, duration: 2 },
      "b+=19"
    )
    .to(".watch-intro .watch-area .col3 span", { opacity: 0 }, "b+=25")
    .to(".watch-intro .watch-area .watch-wrap", { opacity: 0 }, "b+=26");
  // watch-intro

  // ultra
  $(".watch-quick .inner .title").each(function (i, title) {
    gsap.to(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "cneter top",
      },
      opacity: 1,
    });
  });
  // title
  $(".watch-quick .inner .opt-lists").each(function (i, li) {
    list = $(this).find(".opt-list");
    gsap.from(list, 1, {
      scrollTrigger: {
        trigger: li,
        start: "top 80%",
        end: "bottom 60%",
      },
      stagger: 0.3,
      opacity: 0,
      yPercent: 20,
    });
  });
  // list
  const storyAni = gsap.timeline({
    scrollTrigger: {
      trigger: ".watch-story",
      start: "top top",
      end: "+=600%",
      pin: true,
      scrub: 1,
      duration: 1,
    },
  });
  storyAni
    .addLabel("a")
    .to(
      ".watch-story .textWrap .step1 .sub span",
      {
        opacity: 1,
      },
      "a"
    )
    .to(
      ".watch-story .textWrap .step1 .main span",
      {
        opacity: 1,
        yPercent: -100,
      },
      "a+=1"
    )
    .to(
      ".watch-story .step1",
      {
        opacity: 0,
      },
      "a+=2"
    )
    .to(
      ".watch-story .step2",
      {
        opacity: 1,
      },
      "a+=2.5"
    )
    .to(
      ".watch-stroy .textWrap .step2 .sub span",
      {
        opacity: 1,
        yPercent: -100,
      },
      "a+=3.5"
    )
    .to(
      ".watch-story .textWrap .step2 .main span",
      {
        opacity: 1,
        yPercent: -100,
      },
      "a+=4.5"
    )
    .to(
      ".watch-story .step2",
      {
        opacity: 0,
      },
      "a+=5.5"
    )
    .to(
      ".watch-story .step3",
      {
        opacity: 1,
      },
      "a+=6"
    )
    .to(
      ".watch-stroy .textWrap .step3 .sub span",
      {
        opacity: 1,
        yPercent: -100,
      },
      "a+=7"
    )
    .to(
      ".watch-story .textWrap .step3 .main span",
      {
        opacity: 1,
        yPercent: -100,
      },
      "a+=8"
    );
});
window.onload = function () { 
  setTimeout(function () { 
    scrollTo(0, 0);
  },100)
}