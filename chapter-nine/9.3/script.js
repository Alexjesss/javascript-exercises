
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
                            let template = document.getElementById('tpl-hero').content.cloneNode(true);
                            template.querySelector('.name').textContent = hero.name;
                            template.querySelector('.alter-ego').textContent = hero.alterEgo;
                            template.querySelector('.powers').textContent = hero.abilities.join(', ');
                            document.getElementById('target').appendChild(template);
                          }
                        })
                    })
            }
            fetchData ();
        })
    })();


