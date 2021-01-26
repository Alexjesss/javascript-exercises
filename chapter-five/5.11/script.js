
(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", function () {

        let duplicatefree = [...new Set(fruits)];

        console.log(duplicatefree);

    });

    })();
