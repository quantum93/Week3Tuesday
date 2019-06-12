$(document).ready(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = [];
    // console.log(i < 0 || typeof input != 'number');
    // isNaN(input) is great to handle exception !
    if (input < 0 || isNaN(input) || isNaN(countMax) || input > countMax) {
      alert("Enter appropriate number");
    } else {
      for (var i = input; i <= countMax; i += 5) {
        result.push(i);
        $(".result").text(result);
      }
    }
  });
});
