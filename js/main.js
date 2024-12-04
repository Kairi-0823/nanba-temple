$(function(){

  // スムーススクロール：年間行事
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false; 
  });


  // フェードインスクロール：納骨
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(window).scroll(function () {
    $(".mainvisual").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(".slick-items").slick({
    arrows:false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,

    responsive:[{
      breakpoint:376,
      settings:{
        slidesToShow:1,
      }
    }]
  });
  });