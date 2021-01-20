


(function () {

    for (let getal = 1; getal <= 100; getal++) {


        if ((getal%3 + getal%5) === 0) {
        // if uw nummer deelbaar is door 3 == voorwaarde = aan uw restwaarde, in dit geval 0 omdat 3/3 1 is en daarom niks overblijft
            console.log(getal+' fizzbuzz')
        }
        else if (getal%5 === 0) {
            console.log(getal+' buzz')
    }

        else if (getal%3 === 0) {

            console.log(getal + ' fizz')
        }

        else {

            console.log(getal)
        }
    }

})();

// multiple of 3 > modulus gebruiken want multiple of = veelvoud

/*In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3,
    "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.
*/
