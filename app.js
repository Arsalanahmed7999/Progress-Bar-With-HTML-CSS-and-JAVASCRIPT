console.log('added');
let bar = document.querySelector('.bar');
let barPercentage = document.querySelector('.barInput');
let createBtn = document.querySelector('.calc');

createBtn.addEventListener('click', ()=>{
    bar.innerHTML = `${barPercentage.value} %`;
    bar.style.width =  `${barPercentage.value}%`;
})