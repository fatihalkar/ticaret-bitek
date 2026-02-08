$(document).ready(function(){
    var owl = $("#news-slider");

    owl.owlCarousel({
        items: 5,
        margin: 8,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });

    $(".custom-prev").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $(".custom-next").click(function() {
        owl.trigger('next.owl.carousel');
    });
});

let next = document.querySelector('.nextActivity')
let prev = document.querySelector('.prevActivity')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Etkinliğe gitme fonksiyonu
function goToDetails(eventID) {
    window.location.href = `etkinlikler.html?event=${eventID}`;
}


//Etkinlikten navbar ile dönerken sayfadaki tıklanan kısmın açılması fonksiyonu
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const eventID = params.get("event"); 

    if (eventID) {
        const targetElement = document.getElementById(eventID);
        if (targetElement) {
            const yOffset = -150;
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
};