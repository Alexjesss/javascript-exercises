

(() => {

    document.getElementById("run").addEventListener('click', function() {

        function fetchData () {

        fetch('http://localhost:63342/javascript/_shared/api.json')
            .then(response => {
            let heroObject = response.json();
               return heroObject
        })
            .then(heroObject => {
                heroObject.heroes.forEach(hero =>
                {
                    let template = document.getElementById('tpl-hero').content.cloneNode(true);
                    template.querySelector('.name').textContent = hero.name;
                    template.querySelector('.alter-ego').textContent = hero.alterEgo;
                    template.querySelector('.powers').textContent = hero.abilities.join(', ');
                    document.getElementById('target').appendChild(template);
                })
            })
    }
    fetchData ();
})

    })();

