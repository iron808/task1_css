let clickLog = document.getElementById('header-logo');
let clickBtn = document.getElementById('menu-btn');

function fadeInNav(){

}

clickLog.addEventListener('click', ()=>{
    window.location.reload();
});

clickBtn.addEventListener('change',()=> {
    if(clickBtn.checked){
        document.getElementById('header-nav-ul').style.display = 'flex';
        document.getElementById('header-nav-ul').style.position = 'absolute';
        document.getElementById('header-nav-ul').style.left = '550px';
        document.getElementById('header-nav-ul').style.top = '70px';
    }else{
        document.getElementById('header-nav-ul').style.display = 'none';
        document.getElementById('header-nav-ul').style.position = 'absolute';
    }
});


