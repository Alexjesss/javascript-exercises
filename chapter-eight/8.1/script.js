
(() => {

document.getElementById("run").addEventListener('click', function() {

    window.lib.getPosts((error,articles) => {

        if (error) {
            alert('error');
        }
        else {
            error = null;
        }
        console.log(articles)
    });
});
})();

