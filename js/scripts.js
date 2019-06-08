
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

      

      alert("Answer is "+frontbackend);


    event.preventDefault();
  });
});
