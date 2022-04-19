const themeBtn = document.querySelector('.theme');
const fontBtn = document.querySelector('.font-size');
const body = document.querySelector('body');
// Font theme button. This will check if the body has a theme class on it to adjust the styles
if(themeBtn){
    themeBtn.addEventListener('click', function(){
        if(body.classList.contains('theme-dark')){
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        }
        else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        }
    })
}

//Font accessibility button. This will check if the body has a font-lg class on it to adjust the styles
if(fontBtn){
    fontBtn.addEventListener('click', function(){
        if(body.classList.contains('font-lg')){
            body.classList.remove('font-lg');
        }
        else {
            body.classList.add('font-lg');
        }
    }) 
}