
    let slider = document.getElementById('slider');
    let target = document.getElementById('target');
    target.innerText = slider.value;


    slider.oninput = function() {
        target.innerText = 0 + this.value;
    }


