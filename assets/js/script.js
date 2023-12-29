let count = document.getElementById("count"); // Time Showing Element
let input = document.getElementById("input"); // Textaria Element
let show = document.getElementById("show"); // Cherectar Count
let btn = document.getElementById("btn"); // Start Button
let reset = document.getElementById("reset"); // Resate Button
let interValStrt; 
// When Start Button are clicked
let sec = 0;
let min = 0;
let hrs = 0;
function timeCounter(){
    interValStrt= setInterval(()=>{
        if(sec >= 59){
            min = ++min;
            sec = 0;
            if(min >= 59){
                min = 0;
                hrs = ++hrs;
            }
        }
        sec = ++sec;
        count.innerHTML= `${hrs} : ${min} : ${sec = (sec < 10)? "0"+sec : sec}`;
    },1000);
    btn.setAttribute("disabled", "true");
    btn.setAttribute("style", "opacity : 0.5; cursor:auto");
    reset.removeAttribute("disabled");
    reset.removeAttribute("style");
    input.focus();
}

// When Resate button are clicked
function stopTimeCount(){
    clearInterval(interValStrt);
    reset.setAttribute("disabled", "true");
    reset.setAttribute("style", "opacity : 0.5; cursor:auto");
    btn.removeAttribute("disabled");
    btn.removeAttribute("style");
}


input.addEventListener('keyup',function(){
    show.innerHTML= this.value.length;
})

btn.addEventListener('click',timeCounter);
reset.addEventListener('click',stopTimeCount);