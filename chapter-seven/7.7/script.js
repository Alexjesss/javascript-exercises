
        let counter = 0;

        if (localStorage.getItem('counter')) {

            counter = localStorage.getItem('counter');
            document.getElementById('target').innerHTML = counter;

        }
        document.getElementById('increment').addEventListener('click', function () {

            counter++;
            document.getElementById('target').innerHTML = counter.toString();
            localStorage.setItem('counter', counter.toString());
        });

