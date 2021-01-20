

(function() {

    document.getElementById("run").addEventListener("click", function() {


        let result = 0;
        for (let i = 1; result < 21; i++) {

           result = Math.pow(i,2);

           if (result > 21) {

               break;
           }

            window.alert(result);
        }




    });

})();
