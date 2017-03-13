'use strict';
//swape closebar and openbar
function toggleMenu(e) {
    var eventTarget = e.target;

    if(eventTarget.className == 'btn-open'){
        fadeIn(divOverlay, speed);
        eventTarget.className = 'btn-close';
    }
    else if (eventTarget.className == 'btn-close'){
        fadeOut(divOverlay, speed);
        eventTarget.className = 'btn-open';
    }
};

//fadeIn function
function fadeIn(ele, speed)
{
    var interval = setInterval(()=>{
        ele.style.opacity= Number(ele.style.opacity) + 0.02;

        if(ele.style.opacity >=1){
            ele.style.opacity=1;
            clearInterval(interval);
        }

    },speed);//10ms= 0.01s
}

//fadeOut
function fadeOut(ele, speed)
{
    var outInterval = setInterval(()=>{
        ele.style.opacity= Number(ele.style.opacity) - 0.02;

        if(ele.style.opacity <= 0){
            ele.style.opacity = 0;
            clearInterval(outInterval);
        }

    },speed);//10ms= 0.01s
}


var btnMenu = document.getElementById('btn-menu');
btnMenu .addEventListener('click',toggleMenu); 
var divOverlay = document.getElementsByClassName('overlay')[0];
var speed =10;











