/*
 * var 를 val 로 type 해서 자꾸 에러남
 * prompt()
 * alert()
 */
var word = "apple";
var game = "1";
alert(
  "Word Chain Game : You should type a word that starts with the same character as a given word. Type 0, if you want to end the game."
);
while (game !== "0") {
  var input = prompt(word);
  if (input[0] === word[word.length - 1]) {
    word = input;
  } else if (input === "0") {
    game = "0";
  } else {
    alert("Try again");
  }
}
