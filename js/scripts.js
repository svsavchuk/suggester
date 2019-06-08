
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

    if (waffles === "yes") {
      alert("Waffles is yes");
    } else {
      alert("Waffles is no");
    }
    // alert("Answer is: "+waffles+" "+platform+" "+os+" "+frontbackend+".");

    event.preventDefault();
  });
});
