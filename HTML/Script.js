// menubar.js
let clk = 0;
const menubar = () =>{
    let btn = document.getElementById('hamburger');
    let btn1 = document.getElementsByClassName('fst')[0];
    let btn2 = document.getElementsByClassName('lst')[0];
    let body = document.getElementsByTagName("body")[0];
    if(clk == 0){
        btn.style.height = `${50}rem`;
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