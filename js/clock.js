const clock = document.querySelector("h2#clock");

//Date로 받은 정수를 문자열로 변환해서 문자열 길이가 2, 빈 곳은 0으로 채움
function getClock(){
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

getClock(); //즉시 호출로 웹페이자 뜨자마자 시간출력 
setInterval(getClock, 1000); //1초 마다 호출

  