const body = document.querySelector("body");
let screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".keypad button");
const keypad = document.querySelector(".keypad");
const numBtns = document.querySelectorAll(".numberkey");
const oneTheme = document.querySelector(".one");
const twoTheme = document.querySelector(".two");
const threeTheme = document.querySelector(".three");
const toggleBtn = document.querySelector(".circle");
const toggleBox = document.querySelector(".box");

oneTheme.addEventListener('click', (e) => {
    toggleBtn.style.left = "8%";
    toggleBtn.style.background = "hsl(6, 63%, 50%)";
    toggleBox.style.background = "hsl(223, 31%, 20%)";
    body.classList.remove("themeTwo");
    body.classList.remove("themeThree");
    body.classList.add("themeOne");
    //screen
    screen.classList.add("screenT1");
    screen.classList.remove("screenT2");
    screen.classList.remove("screenT3");
    //keypad
    keypad.classList.add("keypadT1");
    keypad.classList.remove("keypadT2");
    keypad.classList.remove("keypadT3");
    //buttons
    numBtns.forEach(btn => {
        btn.classList.add("numberKeyT1");
        btn.classList.remove("numberKeyT2");
        btn.classList.remove("numberKeyT3");
    })
    //equalBtn
    document.querySelector(".equalBtn").classList.add("equalbtnT1");
    document.querySelector(".equalBtn").classList.remove("equalbtnT2");
    document.querySelector(".equalBtn").classList.remove("equalbtnT3");
    document.querySelectorAll(".delResetT1").forEach(butn => {
        butn.classList.add("bluebgT1");
        butn.classList.remove("bluebgT2");
        butn.classList.remove("bluebgT3");
    })
})
twoTheme.addEventListener('click', (e) => {
    toggleBtn.style.left = "38%";
    toggleBtn.style.background = "hsl(6, 63%, 50%)";
    toggleBox.style.background = "hsl(35, 11%, 61%)";
    body.classList.remove("themeOne");
    body.classList.remove("themeThree");
    body.classList.add("themeTwo");
    //screen
    screen.classList.add("screenT2");
    screen.classList.remove("screenT1");
    screen.classList.remove("screenT3");
    //keypad
    keypad.classList.add("keypadT2");
    keypad.classList.remove("keypadT1");
    keypad.classList.remove("keypadT3");
    //buttons
    numBtns.forEach(btn => {
        btn.classList.add("numberKeyT2");
        btn.classList.remove("numberKeyT1");
        btn.classList.remove("numberKeyT3");
    })
    //equalBtn
    document.querySelector(".equalBtn").classList.add("equalbtnT2");
    document.querySelector(".equalBtn").classList.remove("equalbtnT1");
    document.querySelector(".equalBtn").classList.remove("equalbtnT3");
    document.querySelectorAll(".delResetT1").forEach(butn => {
        butn.classList.add("bluebgT2");
        butn.classList.remove("bluebgT1");
        butn.classList.remove("bluebgT3");
    })
})
threeTheme.addEventListener('click', (e) => {
    toggleBtn.style.left = "70%";
    toggleBtn.style.background = "hsl(176, 100%, 44%)";
    toggleBox.style.background = "hsl(268, 71%, 12%)";
    body.classList.remove("themeOne");
    body.classList.remove("themeTwo");
    body.classList.add("themeThree");
    //screen
    screen.classList.add("screenT3");
    screen.classList.remove("screenT1");
    screen.classList.remove("screenT2");
    //keypad
    keypad.classList.add("keypadT3");
    keypad.classList.remove("keypadT1");
    keypad.classList.remove("keypadT2");
    //buttons
    numBtns.forEach(btn => {
        btn.classList.add("numberKeyT3");
        btn.classList.remove("numberKeyT1");
        btn.classList.remove("numberKeyT2");
    })
    //equalBtn
    document.querySelector(".equalBtn").classList.add("equalbtnT3");
    document.querySelector(".equalBtn").classList.remove("equalbtnT1");
    document.querySelector(".equalBtn").classList.remove("equalbtnT2");
    document.querySelectorAll(".delResetT1").forEach(butn => {
        butn.classList.add("bluebgT3");
        butn.classList.remove("bluebgT1");
        butn.classList.remove("bluebgT2");
    })
})

let screenValue = "";
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "DEL") {
            screenValue = screenValue.substring(0, screenValue.length-1);
            screen.value = screenValue;
        } else if(e.target.innerHTML == "RESET"){
            screenValue = "";
            screen.value = screenValue;
        } else if(e.target.innerHTML == "="){
            if(screen.value == ""){
                screenValue = "";
            } else{
            screenValue = eval(screenValue);
            screen.value = screenValue;
            }
        } else if(e.target.innerHTML == "x"){
            screenValue += "*";
            screen.value += "x";
        } 
        else {
            screenValue += e.target.innerHTML;
            screen.value = screenValue;
        }
    })
    
})