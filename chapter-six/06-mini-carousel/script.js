
(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let counter = 0;
    document.getElementById('next').addEventListener('click', function() {

        let source = document.getElementsByTagName('img')[0]

        if (counter >= gallery.length -1) {
                counter = 0;
            }
        else {
            counter++;
        }
        source.src = gallery[counter];
    })
})();
