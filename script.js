// INGLES

const containerWelcome_EN = document.querySelector(".welcome-en");

const textHI = document.querySelector(".welcome-hi-container");

const animation1 = document.querySelector(".welcome-hi-animation");
const animation2 = document.querySelector(".welcome-hi-animation-stick");

const arrowDown = document.querySelector(".welcome-arrow-lower")

const welcomeText2 = document.querySelector(".welcome-text--welcome-to");
const welcomeText3 = document.querySelector(".welcome-text--my-portfolio");

animation1.style.animationName = `null`
animation2.style.animationName = `null`
textHI.style.animationName = `null`

addEventListener("load",()=>{
    animation1.style.animationName = `increase-size`
    animation2.style.animationName = `increase-size-stick`
    textHI.style.animationName = `move-hi`

    textHI.style.marginRight = `1em`
    textHI.style.opacity = 1
    setTimeout(() => {
        textHI.style.marginBottom = `13em`;
        setTimeout(() => {
            welcomeText2.style.opacity = 1
            welcomeText2.style.marginLeft = 0
            setTimeout(() => {
                welcomeText3.style.opacity = 1
                welcomeText3.style.marginLeft = 0
                setTimeout(() => {
                    arrowDown.style.opacity = 1
                }, 500);
            }, 500);
        }, 500);
    }, 1400);
})


// ESPAÑOL

const letterToChange = document.querySelector(".letter-change");

let hola = 0

setInterval(() => {
    if(hola == 0){
        setTimeout(() => {
            letterToChange.innerHTML = `$`
            setTimeout(() => {
                letterToChange.innerHTML = `#`
                setTimeout(() => {
                    letterToChange.innerHTML = `¿`
                    setTimeout(() => {
                        letterToChange.innerHTML = `a`
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
        hola = 1
    }
    else{
        setTimeout(() => {
            letterToChange.innerHTML = `{`
            setTimeout(() => {
                letterToChange.innerHTML = `=`
                setTimeout(() => {
                    letterToChange.innerHTML = `%`
                    setTimeout(() => {
                        letterToChange.innerHTML = `o`
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
        hola = 0
    }
}, 2000);