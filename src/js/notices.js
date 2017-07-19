// require utility.js

$('.dismissible > .close').on('click', function() {
  $(this).closest('.dismissible').fadeOut();
});
