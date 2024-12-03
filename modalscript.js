const btn = document.getElementById("popupBtn"); // 모달을 띄우는 버튼 요소 가져오기
const btnA = document.getElementById("popupBtnA"); 
const btnB = document.getElementById("popupBtnB"); 
const btnC = document.getElementById("popupBtnC"); 

const modal = document.getElementById("modalWrap"); // 모달 창 요소 가져오기
const modalA = document.getElementById("modalWrapA"); 
const modalB = document.getElementById("modalWrapB"); 
const modalC = document.getElementById("modalWrapC"); 

const closeBtn = document.getElementById("closeBtn"); // 모달을 닫는 버튼(X) 요소 가져오기
const closeBtnA = document.getElementById("closeBtnA");
const closeBtnB = document.getElementById("closeBtnB");
const closeBtnC = document.getElementById("closeBtnC");



btn.onclick = function () {
  modal.style.display = "block"; // 버튼을 클릭하면 모달을 보이게 함
};
btnA.onclick = function () {
  modalA.style.display = "block"; 
};
btnB.onclick = function () {
  modalB.style.display = "block"; 
};
btnC.onclick = function () {
  modalC.style.display = "block"; 
};


closeBtn.onclick = function () {
  modal.style.display = "none"; // 모달을 닫는 버튼(X)을 클릭하면 모달을 숨김
};
closeBtnA.onclick = function () {
  modalA.style.display = "none"; 
};
closeBtnB.onclick = function () {
  modalB.style.display = "none"; 
};
closeBtnC.onclick = function () {
  modalC.style.display = "none"; 
};


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
  }
};
window.onclick = function (event) {
  if (event.target == modalA) {
    modalA.style.display = "none"; 
  }
};
window.onclick = function (event) {
  if (event.target == modalB) {
    modalB.style.display = "none"; 
  }
};
window.onclick = function (event) {
  if (event.target == modalC) {
    modalC.style.display = "none"; 
  }
};