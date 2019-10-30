function hangman(){
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
    ];

    console.log(Math.random())
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
      var remainingLetters = word.length;
      alert(answerArray.join(" "));

      while(remainingLetters > 0){
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");
        if(guess == null){
          break;
        }else if(guess.length !== 1){
          alert("Please enter a single letter.");
        }else{
          //check for guess in the word
          for(var j = 0; j< word.length; j++){
            if(word[j] === guess){
              answerArray[j] = guess;
              remainingLetters--;
          }
        }
        alert(answerArray.join(" "));
    }
  }
  if(remainingLetters === 0){
    alert("Good job! The answer was " + word);
  }
}
