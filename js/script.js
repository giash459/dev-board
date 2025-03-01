
const result1 = getNumberID('click-btn-1');
const result2 = getNumberID('click-btn-2');
const result3 = getNumberID('click-btn-3');
const result4 = getNumberID('click-btn-4');
const result5 = getNumberID('click-btn-5');
const result6 = getNumberID('click-btn-6');

document.getElementById('click-btn-1')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-1').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('click-btn-2')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-2').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('click-btn-3')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-3').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('click-btn-4')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-4').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('click-btn-5')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-5').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('click-btn-6')
    .addEventListener('click', function () {
        const activeSection = document.getElementById('active-section')
        const title = document.getElementById('card-title-6').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="bg-[#F4F7FF] p-4 rounded-lg mx-4 mt-5">you have Complete The Task ${title} at ${time}</p>
        `
        activeSection.appendChild(div)
    })

document.getElementById('clear-all')
    .addEventListener('click', function () {
        document.getElementById("active-section").innerHTML = '';

    })

const now = new Date();
document.getElementById('current-day').innerText = now.toLocaleDateString('en-US', { weekday: 'short' }) + ",";
document.getElementById('current-date').innerText = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'tomato']
let index = 0;
document.getElementById('bg-change-btn')
.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
})




