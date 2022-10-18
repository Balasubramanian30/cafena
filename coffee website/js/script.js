$(document).ready(function(){
    $(".about .row ").mouseenter(function(){
      $(".about .row .image img").animate({left: '0em'});
      $(".about .row .content").animate({right: '0em'});
    });
  });
  $(document).ready(function(){
    $(".box-container").mouseenter(function(){
      $(".menu .box-container #balu").fadeIn(7000);
      $(".menu .box-container #balu1").fadeIn(10000);
    });
  });
