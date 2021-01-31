

(function() {

    let string = document.getElementById('target').innerText;
    let effect = string.split('');
    let target = document.getElementById('target')
    target.innerText = '';
    let i = 0;

        let timer = setInterval(typewriter, Math.random() * 500);

    function typewriter() {

        if (i === effect.length) {
            clearInterval(timer);
        }
        else {
            document.getElementById('target').innerHTML += effect[i];
            i++;}
}
})();



