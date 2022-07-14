const countCicle = document.querySelector('.cicle'),
      contMinute = document.querySelector('.timer_minute'),
      contSecond = document.querySelector('.timer_second');

// main display timer
const mainDisplay = document.querySelector('.clock.screen.display'),
      btnOpenSetting = document.querySelector('.icon.openSetting');

// display custom timer
const displayCustomTimer = document.querySelector('.clock.screen.setting'),
      btnClose = document.querySelector('.icon.close');

// custom input
const customCicle = document.querySelector('.cicle_repeat'),
      customWorkTime = document.querySelector('.work_time'),
      customBreakTime = document.querySelector('.break_time');

// Unhide Custom Timer and Hide Main Display   
btnOpenSetting.addEventListener('click',() => {
    displayCustomTimer.style.display = "flex";
    displayCustomTimer.style.background = "white";
    setTimeout(() => {
        displayCustomTimer.style.background = "none";
    }, 250);
    mainDisplay.style.opacity = "0";
});

// Hide Custom Timer and Unhide Main Display   
btnClose.addEventListener('click',() => {
    mainDisplay.style.opacity = "1";
    displayCustomTimer.style.display = "none";
});

countCicle.innerHTML = customCicle.innerText;
contMinute.innerHTML = customWorkTime.innerText;
contSecond.innerHTML = 59;

// Position Count Cicle
if (countCicle.innerText.length > 4) {
    countCicle.innerHTML = 4;
    alert("Jangan Memasukkan Terlalu Banyak!!!");
} else if (countCicle.innerText.length > 3){
    countCicle.style.right = "2rem";
} else if (countCicle.innerText.length > 2){
    countCicle.style.right = "3rem";
} else if (countCicle.innerText.length > 1){
    countCicle.style.right = "4rem";
}