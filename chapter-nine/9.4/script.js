

(() => {
    document.getElementById('run').addEventListener('click', function () {

        function fetchData () {

            let name = document.getElementById('hero-name').value;
            let alterEgo = document.getElementById('hero-alter-ego').value;
            let abilities = document.getElementById('hero-powers').value.split(',');
            let id = 6;
            let newHero = {id,name, alterEgo, abilities};


            fetch('http://localhost:63342/javascript/_shared/api.json')
                .then(response => {
                    let heroObject = response.json();
                    return heroObject;
                })
                .then (heroObject => {
                    heroObject.heroes.push(newHero);
                    console.table(heroObject.heroes)
                })
        }
        fetchData ();
    })
})();




