

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // get the number in the input = een element uit iets halen = doc.get element..

       let nummer = parseInt(document.getElementById("number").value);

        // ook als je een element uit iets haalt, moet je deze nog creëren door er een variable aan toe te kennen
        function factorial (x) {
            let result = 1;

            // let result = 1 > omdat je bij factorial geen 0 kan hebben > anders niet geldig
            for (let i = 1; i <= x ; i++) {

               result = result*i;
            }
            return result;
        }
            // Nu moet je de result laten verschijnen in de input, dus refereren naar de plaats vanwaar het komt
        document.getElementById("number").value = factorial(nummer);
    });

})();

/* For loop hier het beste omdat je een return doet van de user's input voor een factorial en dat moet
               blijven kunnen loopen */