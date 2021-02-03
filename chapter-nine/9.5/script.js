

(() => {

        document.getElementById("run").addEventListener('click', function() {

            function fetchData () {
                let input = document.getElementById('hero-id');
                fetch('http://localhost:63342/javascript/_shared/api.json')
                    .then(response => {
                        let heroObject = response.json();
                        return heroObject
                    })
                    .then(heroObject => {
                        heroObject.heroes.forEach(hero =>
                        {
                            if (input.value == hero.id) {
                                heroObject.heroes.splice(input.value);
                                console.table(heroObject.heroes)
                            }
                        })
                    })
            }
            fetchData ();
        })
    })();

