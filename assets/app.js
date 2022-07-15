//! INITIALIZATION TO GET HTML ELEMENT
    // Display Timer
        const countCicle = document.querySelector('.cicle'),
              contMinute = document.querySelector('.timer_minute'),
              contSecond = document.querySelector('.timer_second');

    // Display Digital Clock
        const digitalHour = document.querySelector('.digital_hour'),
              digitalMinute = document.querySelector('.digital_minute'),
              digitalSecond = document.querySelector('.digital_second');

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
    
    // sound
        const workSound = 'time to work',
              breakSound = 'time to take a break',
              stopSound = 'congratulations you have completed your task and have a good rest. See you';
//! INITIALIZATION TO GET HTML ELEMENT

//! DIGITAL CLOCK
const digitalClock = setInterval(()=>{
        let getDate = new Date(),
            hour = getDate.getHours(),
            minute = getDate.getMinutes(),
            second = getDate.getSeconds();
    
            const addN = (time) => {
                return time < 10 ? "0"+time : time;
            }
        
        digitalHour.innerHTML = addN(hour);
        digitalMinute.innerHTML = addN(minute);
        digitalSecond.innerHTML = addN(second);
    },1000);
//! DIGITAL CLOCK

//! UNHIDE and HIDE SETTINGS PANEL
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
//! UNHIDE and HIDE SETTINGS PANEL

//! DEFAULT TIMER
    countCicle.innerHTML = customCicle.innerText;
    contMinute.innerHTML = customWorkTime.innerText;
    contSecond.innerHTML = 59;
//! DEFAULT TIMER

//! EVENTLISTENER
    //* Custom Time
        //? Break
            const calculateBreak = (work_time) => {
                const root = [1*1,2*2,3*3,4*4,5*5,6*6,7*7,8*8];
                /*
                    To get how much rest time is, the root 
                    of the number that is close to 
                    working time is determined
                */ 
                    for (let i=0; i<root.length; i++){
                        if (work_time < root[i]) {
                            break_time = i;
                            break; 
                        }
                    }
                return break_time;
            };
    
        //? Work
            const btnUp__work = document.querySelector('.up.work'),
                  btnDown__work = document.querySelector('.down.work');

            const btnAction = (inp,cont,action,lim,val,cal) => {
                let temp = parseInt(inp.innerText);

                /*
                    Description :
    
                    1. inp = input custom timer
                    2. cont = value container that will later be displayed
                    3. action = which determines which number will be increment or decrement
                    4. lim = the limit of numbers that can be achieved
                    5. val = replacement value after crossing the limit of the variable LIM
                    6. temp = temporarily store the number from the INP variable and later it will be replaced by its value from the VAL variable
                */ 
            
                if (action == 'inc'){
                    temp += 1;
                    if (temp > lim) {
                        temp = val;
                    }
                } else {
                    temp -= 1;
                    if (temp < lim) {
                        temp = val;
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
        
        //? Cicle
            const btnUp__cicle = document.querySelector('.up.cicle'),
                  btnDown__cicle = document.querySelector('.down.cicle');
        
            btnUp__cicle.addEventListener('click',()=>{
                btnAction(customCicle,countCicle,'inc',25,1,'');
            });
        
            btnDown__cicle.addEventListener('click',()=>{
                btnAction(customCicle,countCicle,'dec',1,25,'');
            });
//! EVENTLISTENER

//! Position Count Cicle
    if (countCicle.innerText.length > 4) {
        countCicle.innerHTML = 4;
        alert("Too Much!!!");
    } else if (countCicle.innerText.length > 3){
        countCicle.style.right = "2rem";
    } else if (countCicle.innerText.length > 2){
        countCicle.style.right = "3rem";
    } else if (countCicle.innerText.length > 1){
        countCicle.style.right = "4rem";
    }
//! Position Count Cicle