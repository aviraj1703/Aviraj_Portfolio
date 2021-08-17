let counter = 0
const Translate_L = () => {
    if (counter >= 0) {
        return;
    }
    let left = document.getElementById('scroll');
    left.style.transform = `translateY(${counter + 10}rem)`;
    console.log(counter);
    counter = counter + 10;
}
const Translate_R = () => {
    if (counter < -20) {
        return;
    }
    let right = document.getElementById('scroll');
    right.style.transform = `translateY(${counter - 10}rem)`;
    console.log(counter);
    counter = counter - 10;
}

let clk = 0;
const menubar = () =>{
    let btn = document.getElementById('hamburger');
    let btn1 = document.getElementsByClassName('fst')[0];
    let btn2 = document.getElementsByClassName('lst')[0];

    if(clk == 0){
        btn.style.height = `auto`;
        btn1.style.display = `none`;
        btn2.style.display = `block`;
        clk++;
    }

    else{
        btn.style.height = `${1.8}rem`;
        btn1.style.display = `block`;
        btn2.style.display = `none`;
        clk--;
    }
}

let cnt = 0;
const alertt = () => {
    let loading = document.getElementById('loading');
    let body = document.getElementsByTagName("body")[0];
    if(cnt == 1){
        loading.style.display = `none`;
        body.style.overflow = `scroll`;
        clearInterval('id');
        return;
    }
    cnt++;
}

const load = () => {
    let id = setInterval(alertt, 2000);
}
