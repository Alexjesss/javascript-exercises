
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", function () {

            fruits.splice(0,1, 'banana');
            fruits.pop();
            fruits[10] = "kiwi";

        console.log(fruits);

    });

})();

