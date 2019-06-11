$(document).ready(function() {
  $(".wordPuzzle").submit(function(event) {
    var userInput = $("#sentence").val();
    var characters = userInput.split('');
    var newCharacters = [];
    // console.log(characters.length)
    // alert(sentence[0]);
    for (var i = 0; i <= characters.length; i++) {
      if (characters[i] == 'a'|| characters[i] == 'e' || characters[i] == 'i' || characters[i] == 'o' || characters[i] == 'u') {
        newCharacters.push('-');
      } else {
        newCharacters.push(characters[i]);
      }
    }
    var puzzle = newCharacters.join('');
    console.log(puzzle);
    $(".puzzle").text(puzzle);
    $("#sentence-input").hide();
    event.preventDefault();
  });
});
