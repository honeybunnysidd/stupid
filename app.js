let startBtn = document.querySelector(".start");
let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");
let para = document.querySelector("p");
let div = document.querySelector(".modal-content");

startBtn.addEventListener("click", function () {
  this.style.display = "none";
  div.style.display = "block";
});

noBtn.addEventListener("click", clickkaro2);
yesBtn.addEventListener("click", clickkaro);

function clickkaro() {
  para.innerText = "I Love you too❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function clickkaro2() {
  alert("Think again, If you want to live 😡😡😡");
  para.innerText = "😡 Do you Love me?";
}
