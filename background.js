
$( document ).ready(function() {
    var desplazamiento = [];
    var direccion = ['top','left','top','top','top','left','left','top','left','left','top','top','left'];
    var number = [];
    $('nav img').add('<img src="https://giffiles.alphacoders.com/119/119839.gif" alt="imagen cambiada" position="absolute">');//https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif
    $('div img').replaceWith('<img src="https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif" alt="imagen cambiada" position="absolute">');
    Animation_random_move('img',50,50);
    Animation_random_move('div',50,50);
    Animation_random_move('nav',50,50);

    function desplazamiento_Aleatorio(min, max) {
            var num = Math.round(Math.random() * (max - min) + min);
            desplazamiento = num;
    }
    function sentido_random(min, max) {
            var num = Math.round(Math.random() * (max - min) + min);
            number = num;                       
    }
    function Animation_random_move(element,desp_max,speed){
        $(element).mouseover(function(){
        //$('img').animate({'left':'+=1000px'},1);
        for (var i = 0; i <= 1; i++) {
            desplazamiento_Aleatorio(0, desp_max);
            sentido_random(0, 12);
            dir = {};
            dir[direccion[number]] = '+='+desplazamiento;
            $(element).animate(dir,speed);
            desplazamiento_Aleatorio(0, desp_max);
            sentido_random(0, 12);
            dir[direccion[number]] = '-='+desplazamiento;
            $(element).animate(dir,speed);
        }
    });
    }
});