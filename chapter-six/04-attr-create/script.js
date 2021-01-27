

(function() {

    document.getElementById('source').getAttribute('data-image');

     myimage = document.createElement('img')
        myimage.setAttribute( 'src','http://www.randomkittengenerator.com/cats/rotator.php');

    target = document.getElementById('target');
       target.append(myimage);
       document.getElementById('source').remove();


})();
