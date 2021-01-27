

(function() {

   let iconog = document.getElementsByTagName('img')[0].src;
   let icon = document.getElementsByTagName('img')[0];
   let icon2 = document.getElementsByTagName('img')[0].getAttribute('data-hover');

   icon.addEventListener('mouseover', function (){

       icon.src = icon2;
   })

    icon.addEventListener('mouseleave', function (){

        icon.src = iconog;
    })

})();
