const API_KEY = "079a10d62ac2923d1027c59c3df10f44";

function onGeoOk(position) {
    const lat = position.coords.latitude; //위도
    const long = position.coords.longitude; //경도
    console.log(lat,long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
         .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;   
            weather.innerText = `${data.weather[0].main} / ${data.main.temp};`
            
        })
}

function onGeoError() {
    alert("위치 정보를 확인할 수가 없다..");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //나의 위치정보를 가져온다.(성공시호출/에러시호출)
 