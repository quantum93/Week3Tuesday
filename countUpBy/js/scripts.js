// $(document).ready(function() {
//   $("#submit-button").click(function(event) {
//     event.preventDefault();
//     var countBy = $("#countBy").val()
//     console.log(countBy);
//     console.log(typeof countBy);
//     var countOut = [];
//     console.log(i < 0 || typeof countBy != 'number');
//     if (countBy < 0 || typeof countBy != 'number') {
//       alert("Enter appropriate number");
//     } else {
//       for (var i = countBy; i < 35; i += 5) {
//         countOut.push(i);
//         console.log(countOut);
//         $(".countOut").text(countOut);
//       }
//     }
//   });
// });

$(document).ready(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault();
    var countBy = parseInt($("#countBy").val());
    var countMax = parseInt($("#countMax").val());
    console.log(countBy);
    console.log(typeof countBy);
    var countOut = [];
    // console.log(i < 0 || typeof countBy != 'number');
    // isNaN(countBy) is great to handle exception !
    if (countBy < 0 || isNaN(countBy) || isNaN(countMax) || countBy > countMax) {
      alert("Enter appropriate number");
    } else {
      for (var i = countBy; i <= countMax; i += 5) {
        countOut.push(i);
        console.log(countOut);
        $(".countOut").text(countOut);
      }
    }
  });
});
