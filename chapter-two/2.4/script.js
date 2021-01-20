/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {



            let getallen = document.getElementById("numbers").value.split(", ");

        /* Als er , of spatie's array's worden altijd meegepakt in code, maar met split worden deze in het resultaat genegeerd. Split maakt let = .. een array*/

        console.log(getallen)

        /* Een element uit iets halen = meestal altijd doc get element... + deze een variable geven zodat deze bestaande wordt */

           let getal = getallen.sort(function(a,b) { return a-b});

        document.getElementById("numbers").value = getal;

        /* wanneer je een set van nummers terug in je input type steekt moet je gaan kijken van waar het origineel komt, in dit geval de value van id numbers. Deze wordt dan gelijk gesteld aan de variabele getal die geljk staat aan een array die oplopend gaat. */

        console.log(getal)
    });

})();

