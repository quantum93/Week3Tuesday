$(document).ready(function(){
  $("form#luck-survey").submit(function(event){
    event.preventDefault();

    $("#unlucky-responses").show();
    var unluckyResponses = [];
    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      var unluckyMode = $(this).val();
      unluckyResponses.push(unluckyMode);
      // console.log(this);
      // $('#unlucky-responses').append(unluckyMode + "<br>");
    });
    // console.log(typeof unluckyResponses.length);
    $("#lucky-responses").show();
    var luckyResponses = [];
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      var luckyMode = $(this).val();
      luckyResponses.push(luckyMode);
      console.log(luckyResponses.length);
      // $('#lucky-responses').append(luckyMode + "<br>");
    });
    // console.log(luckyResponses.length);
    // console.log(unluckyResponses.length);
    if (luckyResponses.length > unluckyResponses.length) {
      $('#lucky-results').show();
    } else if (luckyResponses.length === unluckyResponses.length) {
      $('#neutral-results').show();
    } else if (luckyResponses.length < unluckyResponses.length) {
      $('#unlucky-results').show();
    } else {
      alert('check something please!');
    }

    $('#luck-survey').hide();
  });
});
