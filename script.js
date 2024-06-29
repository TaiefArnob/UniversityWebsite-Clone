let menu=document.querySelector('.navlinks');
let menuBtn=document.querySelector('.menubtn');

let closeBtn=document.querySelector('.closebtn')


menuBtn.addEventListener('click',()=>{
    menu.style.right='0';
})

closeBtn.addEventListener('click',()=>{
    menu.style.right='-205px';
})