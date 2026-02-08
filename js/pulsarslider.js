let nextt = document.querySelector('.nextmain')
let prevv = document.querySelector('.prevmain')

function slideNext() {
    let itemss = document.querySelectorAll('.fotoPulsar');
    document.querySelector('.PulsarSlide').appendChild(itemss[0]);
}

function slidePrev() {
    let itemss = document.querySelectorAll('.fotoPulsar');
    document.querySelector('.PulsarSlide').prepend(itemss[itemss.length - 1]);
}

nextt.addEventListener('click', slideNext);
prevv.addEventListener('click', slidePrev);

let autoSlidee = setInterval(slideNext, 8000);

function resetAutoSlide() {
    clearInterval(autoSlidee); 
    autoSlidee = setInterval(slideNext, 8000);
}

nextt.addEventListener('click', resetAutoSlide);
prevv.addEventListener('click', resetAutoSlide);