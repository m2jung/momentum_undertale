const images = [
    "undertale01.png",
    "undertale02.png",
    "undertale03.png",
    "undertale04.png"
];

const randomImage = (images[Math.floor(Math.random() * images.length)]);
console.log(randomImage);

//html안에 안보이는 어딘가에 .createElement 임의 (element)태그 생성
const bgImage = document.createElement("img");

//v경로를 통해 이미지 넣어주기
bgImage.src=`img/${randomImage}`;

// body에 직접 넣어줌
document.body.appendChild(bgImage); //태그의 가장 밑으로 오게
//.prepend 는 태그의 가장 위로 가게

