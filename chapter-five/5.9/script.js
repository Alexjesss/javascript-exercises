
document.getElementById('run').addEventListener("click", function () {

    let numbers = [];

    let cells = document.querySelectorAll("td")

    for (let i = 0; i < cells.length; i++) {

      let number = Math.floor(Math.random() * 100) + 1;
       cells[i].innerHTML = number;
       numbers.push(number);
    }

   let minimum = Math.min(...numbers);
   let maximum = Math.max(...numbers);
    let sum = numbers.reduce((a,b) => a + b,0);
    let average = sum / numbers.length;

    document.getElementById("min").innerHTML = minimum;
    document.getElementById("max").innerHTML = maximum;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = average;

});

