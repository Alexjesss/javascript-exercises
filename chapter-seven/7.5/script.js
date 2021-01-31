


        let target = document.getElementById('target');

        let inputField1 = document.getElementById('part-one');
        let button1 = document.getElementById('fix-part-one');
        let inputField1value = inputField1.value
        let maximum1 = inputField1.dataset.max;
        let minimum1 = inputField1.dataset.min;


        let inputField2 = document.getElementById('part-two');
        let button2 = document.getElementById('fix-part-two');
        let inputField2value = inputField2.value
        let maximum2 = inputField2.dataset.max;
        let minimum2 = inputField2.dataset.min;

        let inputField3 = document.getElementById('part-three');
        let button3 = document.getElementById('fix-part-three');
        let inputField3value = inputField3.value
        let maximum3 = inputField3.dataset.max;
        let minimum3 = inputField3.dataset.min;

        let inputField4 = document.getElementById('part-four');
        let button4 = document.getElementById('fix-part-four');
        let inputField4value = inputField4.value
        let maximum4 = inputField4.dataset.max;
        let minimum4 = inputField4.dataset.min;



        let Interval = setInterval(function () {

            if (inputField1value < maximum1) {
                inputField1value++;
            }
            else {
                inputField1value = minimum1;
            }
                inputField1.value = inputField1value;
            }
            , 30);

        button1.addEventListener('click', function () {

            clearInterval(Interval);
            target.innerHTML = '0' + inputField1value + inputField2value + inputField3value + inputField4value;
        })

        let Interval2 = setInterval(function () {

                if (inputField2value < maximum2) {
                    inputField2value++;
                }
                else {
                    inputField2value = minimum2;
                }
                inputField2.value = inputField2value;
            }
            , 30);

        button2.addEventListener('click', function () {

            clearInterval(Interval2);
            target.innerHTML = inputField1value + inputField2value + inputField3value + inputField4value;
        })

        let Interval3 = setInterval(function () {

                if (inputField3value < maximum3) {
                    inputField3value++;
                }
                else {
                    inputField3value = minimum3;
                }
                inputField3.value = inputField3value;
            }
            , 30);

        button3.addEventListener('click', function () {

            clearInterval(Interval3);
            target.innerHTML = inputField1value + inputField2value + inputField3value + inputField4value;
        })

        let Interval4 = setInterval(function () {

                if (inputField4value < maximum4) {
                    inputField4value++;
                }
                else {
                    inputField4value = minimum4;
                }
                inputField4.value = inputField4value;
            }
            , 30);

        button4.addEventListener('click', function () {

            clearInterval(Interval4);
            target.innerHTML = '0' + inputField1value + inputField2value + inputField3value + inputField4value;
        })
