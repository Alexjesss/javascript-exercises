
(function() {

    (function() {

        table = document.createElement('table');
        target = document.getElementById('target').append(table);

        for (let i = 1; i < 11; i++) {

            row = document.createElement('tr');
            table.append(row);

            for (let j = 1; j < 11; j++) {

                cell = document.createElement('td');
                row.append(cell);
                cell.innerText = (i*j);
            }
        }

    })();

})();
