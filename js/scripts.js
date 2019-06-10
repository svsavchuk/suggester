
$(document).ready(function(){
  $("#form-one").submit(function(){

    // Define variables
    var waffles =
    $("#waffles").val();

    var experience =
    $("#experience").val();

    var platform =
    $("#platform").val();

    var os =
    $("#os").val();

    var frontbackend =
    $("#frontbackend").val();

    // To show a recommendation based on user's selections and hide previous recommendation(s).
    if (waffles === "no") {
      $(".language").hide();
      $("#disqualified").show();

    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "frontend") {
      $(".language").hide();
      $("#python").show();

    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "backend") {
      $(".language").hide();
      $("#javascript").show();

    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "windows" && frontbackend === "frontend") {
      $(".language").hide();
      $("#python").show();

    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "windows" && frontbackend === "backend") {
      $(".language").hide();
      $("#javascript").show();

    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "macos" && frontbackend === "frontend") {
      $(".language").hide();
      $("#python").show();

    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "macos" && frontbackend === "backend") {
      $(".language").hide();
      alert("#javascript");

    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "windows" && frontbackend === "frontend") {
      $(".language").hide();
      $("#python").show();

    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "windows" && frontbackend === "backend") {
      $(".language").hide();
      $("#javascript").show();

    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "macos" && frontbackend === "frontend") {
      $(".language").hide();
      $("#swift").show();

    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "macos" && frontbackend === "backend") {
      $(".language").hide();
      $("#swift").show();

    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "windows" && frontbackend === "frontend") {
      $(".language").hide();
      $("#c").show();

    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "windows" && frontbackend === "backend") {
      $(".language").hide();
      $("#c").show();

    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "macos" && frontbackend === "frontend") {
      $(".language").hide();
      $("#swift").show();

    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "macos" && frontbackend === "backend") {
      $(".language").hide();
      $("#swift").show();

    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "windows" && frontbackend === "frontend") {
      $(".language").hide();
      $("#c").show();

    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "windows" && frontbackend === "backend") {
      $(".language").hide();
      $("#c").show();
    }

    // To block default click handling
    event.preventDefault();

    // To enable tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

  });
});
