// anime
$(function(){
  $(".mainSite").css("display", "none");
  setTimeout(function(){
  $('.anime').fadeOut();
  },3800);
});

$(function(){
  $(".mainSite").css({opacity:'0'});
  setTimeout(function(){
  $(".mainSite").css("display", "block");
  $(".mainSite").stop().animate({opacity:'1'},2500);
  },3800);
});