const menu = document.getElementById("menu");
const s = document.querySelector('ul')
const close = document.getElementById("close");

menu.addEventListener("click",()=>{
    s.classList.toggle('nav1');
})

close.addEventListener("click",()=>{
    s.classList.remove('nav1')
})