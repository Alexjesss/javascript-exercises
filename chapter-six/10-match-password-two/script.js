

(function() {

    document.getElementById('run').addEventListener("click", function () {


        let input1 = document.getElementById('pass-one').value;
        let input2 = document.getElementById('pass-two').value;

        if (input1 !== input2) {

            document.getElementById('pass-one').className = 'error';
            document.getElementById('pass-two').className = 'error';

        }

    });

})();
