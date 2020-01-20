$(document).ready(
  function() {
    $('.opening_link').mouseenter(
      function() {
      $(this).children('.dropdown').addClass('active');
      }
    );
    $('.opening_link').mouseleave(
      function() {
      $(this).children('.dropdown').removeClass('active');
      }
    );
  }
);
