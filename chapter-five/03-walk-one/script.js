
(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatoes",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];

    document.getElementById('run').addEventListener("click", function () {

        for (let i = 0; i < fruits.length ; i++) {

            console.log(fruits[i]);

        }

    });

})();


