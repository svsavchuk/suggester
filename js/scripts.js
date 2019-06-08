
$(document).ready(function(){
  $("#form-one").submit(function(){

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

    if (waffles === "no") {
      alert("You can't be a programmer");
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "front") {
      alert("1");
    } else if (waffles === "yes" && experience === "one" && platform === "desktop" && os === "macos" && frontbackend === "back") {
      alert("2");
    } else {
      alert("3");
    }

    event.preventDefault();

    // To enable tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

  });
});
