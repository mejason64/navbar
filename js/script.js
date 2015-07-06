var nav = document.getElementById('navLinks');

var button =  document.getElementById('navButton');

button.addEventListener('click', function(){
    nav.classList.toggle('hide');
    nav.classList.toggle('show');
});

(function(){
    classSwitch();
}("docReady", window));

window.addEventListener('resize', classSwitch);

function classSwitch(){
    var width = window.innerWidth;
    if(width <= 768){
        nav.classList.add('hide');
        nav.classList.remove('show');
    }else{
        nav.classList.add('show');
        nav.classList.remove('hide');
    }
}












