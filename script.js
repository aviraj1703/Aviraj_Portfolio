// Skills.js
let counter = 0
let left_button = document.getElementsByClassName('arr_l')[0];
left_button.style.visibility = `hidden`;
let right_button = document.getElementsByClassName('arr_r')[0];
const Translate_L = () => {
    let left = document.getElementById('scroll');
    left.style.transform = `translateY(${counter + 10}rem)`;
    counter = counter + 10;
    console.log(counter);
    if (counter >= 0) {
        left_button.style.visibility = `hidden`;
    }
    else if(counter >= -20){
        right_button.style.visibility = `visible`;
    }
}
const Translate_R = () => {
    let right = document.getElementById('scroll');
    right.style.transform = `translateY(${counter - 10}rem)`;
    counter = counter - 10;
    console.log(counter);
    if (counter < -20) {
        right_button.style.visibility = `hidden`;
    }
    else if(counter < 0){
        left_button.style.visibility = `visible`;
    }
}

// menubar.js
let clk = 0;
const menubar = () =>{
    let btn = document.getElementById('hamburger');
    let btn1 = document.getElementsByClassName('fst')[0];
    let btn2 = document.getElementsByClassName('lst')[0];
    let body = document.getElementsByTagName("body")[0];
    if(clk == 0){
        btn.style.height = `${150}vh`;
        btn1.style.display = `none`;
        btn2.style.display = `block`;
        body.style.overflow = `hidden`;
        clk++;
    }

    else{
        btn.style.height = `${1.8}rem`;
        btn1.style.display = `block`;
        btn2.style.display = `none`;
        body.style.overflowY = `scroll`;
        clk--;
    }
}

// onload.js
let cnt = 0;
const load = () => {
    let loading = document.getElementById('loading');
    let body = document.getElementsByTagName("body")[0];
        loading.style.display = `none`;
        body.style.overflowY = `scroll`;
}

// smoothscroll.js
const scrol = () => {
    let scrolll = setInterval(() => {
        if(window.pageYOffset == 0){
            clearInterval(scrolll);
            return;
        }
        else{
            setTimeout(() => {
                window.scrollBy(0, -20);
            }, 100);
        }
    }, 20);
}
setTimeout(() => {
    var move = document.querySelectorAll('.nav a')[0];
    move.addEventListener('click', scrol);
}, 500);
