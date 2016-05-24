$(function() {
  var h = $(window).height();

  $('.page-content-wrapper').css('display','none');
  $('.loading-bg').height(h).css('display','block');

  $(window).load(function() {
    $('.loading-bg').delay(1000).fadeOut(600);
    $('.page-content-wrapper').css('display','block');
  });

});


