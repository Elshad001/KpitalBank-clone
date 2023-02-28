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

const amountInput=document.querySelector('.amount-input');
const amountRange=document.querySelector('.amount-range');
amountInput.value=10000;
amountInput.value=amountRange.value;
amountRange.addEventListener('input',()=>
{
    amountInput.value=amountRange.value;
})

const percentInput=document.querySelector('.percent-input');
const percentRange=document.querySelector('.percent-range');
percentInput.value=15;
percentInput.value=percentRange.value;
percentRange.addEventListener('input',()=>
{
    percentInput.value=percentRange.value;
})

const timeInput=document.querySelector('.time-input');
const timeRange=document.querySelector('.time-range');
timeInput.value=3
timeInput.value=timeRange.value;
timeRange.addEventListener('input',()=>
{
    timeInput.value=timeRange.value;
})

const creditAmount=document.querySelector('.credit-amount')

creditAmount.value=Math.round((parseInt(amountInput.value)+(parseInt(amountInput.value)*(parseInt(percentInput.value)/100)))/parseInt(timeInput.value));


