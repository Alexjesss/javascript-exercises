
(function() {

    document.getElementById('run').addEventListener("click", function () {

        let year = document.getElementById('year').value;

        for (let month = 0; month <= 11 ; month++) {

            let day = new Date(year,month, 13);

            if (day.getDay() === 5) {

                switch (month) {

                    case 0:
                        alert('January');
                        break;
                    case 1:
                        alert('February');
                        break;
                    case 2:
                        alert('March');
                        break;
                    case 3:
                        alert('April');
                        break;
                    case 4:
                        alert('May');
                        break;
                    case 5:
                        alert('June');
                        break;
                    case 6:
                        alert('July');
                        break;
                    case 7:
                        alert('August');
                        break;
                    case 8:
                        alert('September');
                        break;
                    case 9:
                        alert('October');
                        break;
                    case 10:
                        alert('November');
                        break;
                    case 11:
                        alert('December');
                        break;
                }
            }
        }

    });

})();
