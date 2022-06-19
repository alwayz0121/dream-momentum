const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //배경 이미지 "img 항목 추가하기"

bgImage.src = `img/${chosenImage}`; //배경 이미지에 랜덤 사진 추가하기

document.body.appendChild(bgImage); //bgImage를 body에 추가하기 (document에 추가해주기)
