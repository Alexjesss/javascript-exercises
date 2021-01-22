

(function() {

    document.getElementById('run').addEventListener("click", function () {

        let yourday = document.getElementById("dob-day").value;
        let yourmonth =document.getElementById("dob-month").value;
        let youryear = document.getElementById("dob-year").value;

        let date = new Date();
        let month = (date.getMonth()+1);
        let day = date.getDate();
        let year = date.getFullYear();

        let age = year - youryear;

        if (yourmonth == month && yourday == day) {

            alert('Your birthday is' + yourday + yourmonth + youryear + ' and it is your' + age + 'bday');
        }
        else if (yourmonth == month && yourday < day ) {

            alert('Your birthday is' + yourday + yourmonth + youryear + 'and your age is' + (age-1));

        }

        else if (yourmonth == month && yourday > day ) {

            alert('Your birthday is' + yourday + yourmonth + youryear + 'and your age is' + age);

        }

        else if (yourmonth > month ) {

            alert('Your birthday is' + yourday + yourmonth + youryear + 'and your age is' + (age-1));
        }

    });

})();
