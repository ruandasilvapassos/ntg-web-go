$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $(".fixed-top").addClass("nav-scroll");
    } else {
      $(".fixed-top").removeClass("nav-scroll");
    }
  });

  $(".cookie-block .btn").click(function () {
    $(".cookie-block").hide();
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});
$('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

});