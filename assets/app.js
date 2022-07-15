// Display Timer
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

// Custom Time
// Break
    const calculateBreak = (work_time) => {
        const root = [1*1,2*2,3*3,4*4,5*5,6*6,7*7,8*8];
            for (let i=0; i<root.length; i++){
                if (work_time < root[i]) {
                    break_time = i;
                    break; 
                }
            }
        return break_time;
    }
// Work
    const btnUp__work = document.querySelector('.up.work'),
          btnDown__work = document.querySelector('.down.work');
    const btnAction = (inp,cont,action,para,lim,cal) => {
        let temp = parseInt(inp.innerText);

        if (action == 'inc'){
            temp += 1;
            if (temp > para) {
                temp = lim;
            }
        } else {
            temp -= 1;
            if (temp < para) {
                temp = lim;
            }
        }

        inp.innerHTML = temp;
        cont.innerHTML = inp.innerText;
        
        if (cal != ''){
            // Break
            customBreakTime.innerHTML = calculateBreak(temp);
        }
    };

    btnUp__work.addEventListener('click',()=>{
        btnAction(customWorkTime,contMinute,'inc',59,10,'cal');
    });

    btnDown__work.addEventListener('click',()=>{
        btnAction(customWorkTime,contMinute,'dec',10,59,'cal');
    });

// Cicle
    const btnUp__cicle = document.querySelector('.up.cicle'),
          btnDown__cicle = document.querySelector('.down.cicle');

    btnUp__cicle.addEventListener('click',()=>{
        btnAction(customCicle,countCicle,'inc',25,1,'');
    });

    btnDown__cicle.addEventListener('click',()=>{
        btnAction(customCicle,countCicle,'dec',1,25,'');
    });

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