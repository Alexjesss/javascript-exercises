

(function() {

    table = document.createElement('table');
    target = document.getElementById('target').append(table);



    for (let i = 0; i < 10; i++) {

        row = document.createElement('tr');
        table.append(row);

        for (let j = 0; j < 1; j++) {

            cell = document.createElement('td');
            row.append(cell);
        }

    }

})();

