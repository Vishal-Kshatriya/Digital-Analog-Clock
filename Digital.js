const time=document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime,1000);
});
const showTime = () => {
    let date=new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    secs = secs<10 ? `0${secs}` : secs;

    time.innerHTML=`${hr} : ${min} : ${secs}`;

    timeformat.innerHTML = hr>12 ? "PM" :"AM" ;
}

const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i<=12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin",numberElement.join(""));

for(let i=1; i<=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes= document.querySelector('.hand.minutes');
const handSeconds= document.querySelector('.hand.seconds');

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime,1000);