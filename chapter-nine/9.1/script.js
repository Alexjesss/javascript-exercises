

    function fetchData () {

       fetch('http://localhost:63342/javascript/_shared/api.json')
           .then(response => {
           return response.json();
       })
           .then(array => {
               console.log(array);
           });
    }
    fetchData ();




