(() => {

    /* document.getElementById("run").addEventListener('click', function() {

         window.lib.getPosts((error,articles) => {

             if (error) {
                 alert('error');
             }
             else {
                 articles.forEach(function (article){

                     window.lib.getComments(article.id, function(error,comments){

                         if (error) {
                             alert('error');
                         }
                         else {
                             article.comment = comments;
                             console.log(articles)
                         }
                     })
             })
             }
         })
             }) */


    document.getElementById('run').addEventListener('click', function () {

        window.lib.getPosts(function (error, articles) {
            if (error !== null) {
                alert(error);
            } else {

                articles.forEach(article => {
                    window.lib.getComments(article.id, function (error, comments) {
                        if (error !== null) {
                            alert(error);
                        }
                        else {
                            article.comments = comments;
                        }
                    })
                })
            }
        })

        window.lib.getComments(article.id, callback);
        window.lib.getComments(error, comments.article);

        function callback() {

            if (error) {
                alert('error');
            } else {
                error = null;
            }
        }
    })


})();


