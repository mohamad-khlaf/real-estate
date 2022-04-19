// ========================================== change image =======================================

let landingImage = document.querySelector(".landing");
let imageArr = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"];

// -------------------------- every tow second run the Fn to change image -----------------------
setInterval(() => {
  let randomImageNum = Math.floor(Math.random() * imageArr.length);
  landingImage.style.backgroundImage = `url("../assets/${imageArr[randomImageNum]}")`;
}, 3000);
