

(function() {

    let random = Math.round(Math.random()*100) +1;
    random = random.toString();
    let Myguess = prompt('Guess the magic number');
    let Totalguesses = 0;


               while (Myguess !== random) {

                    let Myguess = prompt('Guess the magic number');
                    Totalguesses++;

               if (Myguess < random) {
                   alert('higher');
               } else if (Myguess > random) {
                   alert('lower');
               } else {
                       alert('That is correct.'+'You guessed' + Totalguesses + 'times');
                       break;
                }
                }









    // my answer needs to be linked to the input field, recorded each time, and return when correct.

   //  "you needed Y guesses" (where Y is the number of guesses).</p>

})();
