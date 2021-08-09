let counter = 0
const Translate_L = () => {
    if (counter >= 0) {
        return;
    }
    let left = document.getElementById('scroll');
    left.style.transform = `translateY(${counter + 10}rem)`;
    counter = counter + 10;
}
const Translate_R = () => {
    if (counter < -20) {
        return;
    }
    let right = document.getElementById('scroll');
    right.style.transform = `translateY(${counter - 10}rem)`;
    counter = counter - 10;
}
