
$( document ).ready(function() {

  $('.navicon').click( function() {
    $(this).toggleClass('navicon--active');
    $('.navmodal').toggleClass('js-modal-visible');
  });

  $('.navmodal__link').click( function() {
    $('.navmodal').removeClass('js-modal-visible');
    $('.navicon').removeClass('navicon--active');
  });

});
