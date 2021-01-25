
    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById('run').addEventListener("click", function () {

        if (fruits.includes('apple')) {
            console.log("yes");
        }
        else {console.log("no");}

    });

