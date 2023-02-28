const section1=document.querySelector('.section1');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

let scrollAmount=1500;

next.addEventListener('click',()=>
{
    section1.scrollLeft+=scrollAmount
})

prev.addEventListener('click',()=>
{
    section1.scrollLeft-=scrollAmount
})
