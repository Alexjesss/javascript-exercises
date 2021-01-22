

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    if ((hour < 17) + (minutes < 30) ) {

        document.getElementById('target').innerHTML = "Hello";}

    else {

        document.getElementById('target').innerHTML = "Good evening";}

})();
