
(function() {

    let counter = document.getElementById('counter');
    let input = document.getElementById('pass-one');
    input.addEventListener('input', function () {


        if (input.value.length > 10) {

           input.value = input.value.slice(0,10);
        }

            counter.innerText = input.value.length + "/10";

    });

})();
