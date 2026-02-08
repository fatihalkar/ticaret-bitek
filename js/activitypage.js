
// <!-- navbardan geri maine dönüş için eklendi -->
    function loadPage(section) {
        window.location.href = "main.html#" + section;
    }

// <!-- etkinlik galeride video tıklanınca arka planda çalanın sesini kısma için eklendi -->
    document.addEventListener("DOMContentLoaded", function () {
        var smallVideo = document.getElementById("small-video");
        var videoLinks = document.querySelectorAll(".video-link");

        videoLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                smallVideo.pause();
                smallVideo.currentTime = 0;
            });
        });
    });
    

// <!-- galeri acma kapatma butonları -->
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const closeBtn = document.querySelector(".close-btn");
    const galleryOverlay = document.querySelector(".gallery-overlay");

    function openGallery() {
        galleryOverlay.classList.add("active");
        toggleBtn.style.visibility = "hidden";
        document.body.style.overflow = "hidden";
    }

    function closeGallery() {
        galleryOverlay.classList.remove("active");
        toggleBtn.style.visibility = "visible";
        document.body.style.overflow = "auto";
    }

    toggleBtn.addEventListener("click", openGallery);
    closeBtn.addEventListener("click", closeGallery);

    galleryOverlay.addEventListener("scroll", function (e) {
        const atBottom = galleryOverlay.scrollHeight - galleryOverlay.scrollTop === galleryOverlay.clientHeight;
        if (atBottom) {
            document.body.style.overflow = "auto"; 
        } else {
            document.body.style.overflow = "hidden"; 
        }
    });
});


// Etkinliğe gitme fonksiyonu
function goToDetails(eventID) {   
    window.location.href = `index.html?event=${eventID}#${eventID}`;
}