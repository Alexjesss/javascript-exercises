
(function() {

   let string = document.getElementById('target').innerText;
   let target = document.getElementById('target');
   let index = 0;
    target.innerText = "";

    let fontsizes = ['10x', '15px', '20px', '25px', '30px', '25px', '20px', '15px', '10px']
    let characters = string.split("");

    for (let i = 0; i < characters.length; i++) {

        console.log(i)
        let span = document.createElement('span');
        span.innerText = characters[i];
        span.style.fontSize = fontsize(i);
        target.append(span)
    }
        function fontsize(i) {

            if (i % fontsizes.length === 8) {
                index = 0;
            } else {
                index++
            }
            return fontsizes[index];
        }
   })();
