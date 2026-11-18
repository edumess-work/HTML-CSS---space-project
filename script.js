const themeButton = document.getElementById('theme');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light'){
    document.body.classList.add('light-theme')
    themeButton.textContent= '☀'
}




themeButton.addEventListener('click', function(){

   document.body.classList.toggle('light-theme');



    if (document.body.classList.contains('light-theme')) {
        themeButton.textContent = '☀';
        localStorage.setItem('theme', 'light');


    }else{
        themeButton.textContent = '☾'
        localStorage.setItem('theme', 'dark')

    
    
    }
});



