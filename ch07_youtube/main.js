const moreBtn = document.querySelector('.info .metadata .titleAndButton .moreBtn');
const title = document.querySelector('.info .metadata .titleAndButton .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});