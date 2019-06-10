
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
      $("#disqualified").show();
      $("#javascript", "#python", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "frontend") {
      $("#python").show();
      $("#disqualified", "#javascript", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "backend") {
      $("#javascript").show();
      $("#disqualified", "#python", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "windows" && frontbackend === "frontend") {
      $("#python").show();
      $("#disqualified", "#javascript", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "windows" && frontbackend === "backend") {
      $("#javascript").show();
      $("#disqualified", "#python", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "macos" && frontbackend === "frontend") {
      $("#python").show();
      $("#disqualified", "#javascript", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "macos" && frontbackend === "backend") {
      alert("#javascript");
      $("#disqualified", "#python", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "windows" && frontbackend === "frontend") {
      $("#python").show();
      $("#disqualified", "#javascript", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "one" && platform === "web" && os === "windows" && frontbackend === "backend") {
      $("#javascript").show();
      $("#disqualified", "#python", "#swift", "#c").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "macos" && frontbackend === "frontend") {
      $("#swift").show();
      $("#disqualified", "#javascript", "#python", "#c").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "macos" && frontbackend === "backend") {
      $("#swift").show();
      $("#disqualified", "#javascript", "#python", "#c").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "windows" && frontbackend === "frontend") {
      $("#c").show();
      $("#disqualified", "#javascript", "#python", "#swift").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "desktop" && os === "windows" && frontbackend === "backend") {
      $("#c").show();
      $("#disqualified", "#javascript", "#python", "#swift").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "macos" && frontbackend === "frontend") {
      $("#swift").show();
      $("#disqualified", "#javascript", "#python", "#c").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "macos" && frontbackend === "backend") {
      $("#swift").show();
      $("#disqualified", "#javascript", "#python", "#c").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "windows" && frontbackend === "frontend") {
      $("#c").show();
      $("#disqualified", "#javascript", "#python", "#swift").hide();
    } else if (waffles === "yes" && experience === "two" && platform === "web" && os === "windows" && frontbackend === "backend") {
      $("#c").show();
      $("#disqualified", "#javascript", "#python", "#swift").hide();
    }

    // To block default click handling
    event.preventDefault();

    // To enable tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

  });
});
