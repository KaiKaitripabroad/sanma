$(function () {
  $(document).ready(function () {
    $("#menu-toggle").click(function () {
      $("#global-nav").toggleClass("open");
    });
  });
  $("#global-nav a").click(function () {
    $("#global-nav").removeClass("open");
  });
});
