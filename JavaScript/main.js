let showMenue=false;
document.querySelector('.menu-btn').addEventListener('click',()=>{
    if(!showMenue){
        document.querySelector('.menu-btn__burger').classList.add('open');
        
        document.querySelector('.nav').classList.add('open');
        document.querySelector('.menu-nav').classList.add('open');
        document.querySelectorAll('.menu-nav__item').forEach((element)=>{
            element.classList.add('open');
        })
        showMenue=true;
    }
    else{
        document.querySelector('.menu-btn__burger').classList.remove('open');
        document.querySelector('.nav').classList.remove('open');
        document.querySelector('.menu-nav').classList.remove('open');
        document.querySelectorAll('.menu-nav__item').forEach((element)=>{
            element.classList.remove('open');
        })
       
        showMenue=false;
    }
})