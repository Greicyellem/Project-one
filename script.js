
let hamburguer= document.querySelector('.menu-mobile-icon');
hamburguer.addEventListener('click', () => {
  let menuItems = document.querySelector('.menu-items');
  if(menuItems.classList.contains('show')){
    menuItems.classList.add('hide');
    menuItems.classList.remove('show');

}
else { 
  menuItems.classList.add('show');
  menuItems.classList.remove('hide');
}

});

const imagemDoBanner = document.getElementById('sobre-cursos');

const dadosDoBanner = [
    {image: './image/banner.jpg'},
    {image: './image/banner1.jpg'},
    {image: './image/banner2.jpg'},
    {image: './image/banner5.jpg'},
    {image: './image/banner4.jpg'}

];
let indiceBannerAtual = 0;

function atualizaBanner(indice){
    imagemDoBanner.src = dadosDoBanner[indice].image;
}

function prevClicked(){
    if(indiceBannerAtual == 0){
        indiceBannerAtual = dadosDoBanner.length - 1;
    } else {
        indiceBannerAtual = indiceBannerAtual - 1;
    }
    atualizaBanner(indiceBannerAtual);
}

function nextClicked(){
    if(indiceBannerAtual == dadosDoBanner.length - 1){
        indiceBannerAtual = 0;
    } else {
        indiceBannerAtual = indiceBannerAtual + 1;
    }
    atualizaBanner(indiceBannerAtual);
}

let myInterval = setInterval(nextClicked, 3000);

function myStopFunction() {
    clearInterval(myInterval);
}
function myResumeFunction() {
    myInterval = setInterval(nextClicked, 3000);
}
