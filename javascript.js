// Global Variables
        
let bananacount = document.getElementById("bananacount")

let mangocount = document.getElementById("mangocount")

let applecount = document.getElementById("applecount")

let interval;

let sec;

let sound;

let sound1;

let display = document.getElementById("timeshow");


// Time Function

document.getElementById('start').onclick = function(){

    sec = 60

    interval = setInterval(click,1000)

    document.querySelector(".timeshow").style.color = "258"


    document.getElementById("banana").onclick = function(){

        bananaeat()

    }
    document.getElementById("mango").onclick = function(){

        mangoeat()

    }

    document.getElementById("apple").onclick = function(){

        appleeat()

    }

}

function click(){
    sec--
    if(sec==0){
        clearInterval(interval)
        sec = `00`
        display.innerHTML = `00 : ${sec}`


    }
    else if(sec<10){
        sec = `0${sec}`
    }
    
    display.innerHTML = `00 : ${sec}`

    if(display.innerHTML == "00 : 23"){

        document.querySelector(".timeshow").style.color = "red"


        sound = new Audio('katta.mp3')
        sound.play()
    }

    if(display.innerHTML == "00 : 52"){

        sound1 = new Audio('music.mp3')
        sound1.play()
        sound1.volume = 0.2
    }
}

// Reset Button Function

function resettime(){

    count = 0
    count1 = 0
    count2 = 0
    bananacount.innerHTML = count
    mangocount.innerHTML = count1
    applecount.innerHTML = count2


    sound.pause()

    sound1.pause()


    document.querySelector(".timeshow").style.color = "258"

    document.querySelector("#banana").removeEventListener("onclick",bananaeat);

    document.getElementById("mango").removeEventListener("onclick",mangoeat);

    document.getElementById("apple").removeEventListener("onclick",appleeat);

    sec = 60
    display.innerHTML = `01 : 00`
    clearInterval(interval)
}

// Banana Function 

let count = 0
function bananaeat(){
    count++
    bananacount.innerHTML = count
}

// Mango Function

let count1 = 0
function mangoeat(){
    count1++
    mangocount.innerHTML = count1
}

// Apple Function

let count2 = 0
function appleeat(){
    count2++
    applecount.innerHTML = count2
}