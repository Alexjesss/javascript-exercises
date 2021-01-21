

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // when using new date .. always look to see if it's capitalized bc important! then give it a let to make it real+work

        let hour = new Date().getHours();

    if (hour < 18) {

        document.getElementById('target').innerHTML = "hello";}

    else {

    document.getElementById('target').innerHTML = 'Good evening';}

})();
