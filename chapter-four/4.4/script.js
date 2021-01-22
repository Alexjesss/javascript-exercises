
(function() {

    let currentday = new Date();
    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let beautify = currentday.toLocaleDateString("en-US", options);
    let hours = new Date().getHours();
    let minutes_with_leading_zeros = (currentday.getMinutes() < 10 ? '0' : '') + currentday.getMinutes();

    console.log(beautify  +  " "  +  hours + 'h' + minutes_with_leading_zeros);
    document.getElementById('target').innerHTML = (beautify  +  " "  +  hours + 'h' + minutes_with_leading_zeros);

})();


