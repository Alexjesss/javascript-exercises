

    (function() {

        let ok = document.getElementById('validity');
        let input = document.getElementById('pass-one');
        let counter = 0;
        input.addEventListener('input', function () {

            for (let i = 0; i < input.value.length ; i++) {

              if (!isNaN(input.value.charAt(i)))   {

                  counter++;

              }

           if (input.value.length >= 8 && counter >= 2) {

               ok.innerText = 'ok';
            }

           else {

               ok.innerText = 'Not ok';
           }
        }

        });

    })();



