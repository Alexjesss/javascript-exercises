

    let target = document.getElementById('target');
    let button1 = document.getElementById("part-one");
    let button2 = document.getElementById("part-two");
    let button3 = document.getElementById("part-three");
    let button4 = document.getElementById("part-four");


    document.querySelectorAll('button').forEach(button =>
    button.addEventListener('click', () => {

        let maximum = button.dataset.max;
        let value = button.innerHTML;
        value = value.toString();

            if (value < maximum) {
                value++; }

        if (value.length === maximum.length) {
            button.innerHTML = value;
        }
        else {
            button.innerHTML = "0" + value;
        }
            target.innerText = '0' + button1.innerHTML + button2.innerHTML + button3.innerHTML + button4.innerHTML;
    }
))









