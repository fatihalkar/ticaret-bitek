
const slides = [
    {
      quote: "Kariyer yolculuğunuzda size rehberlik edecek, iş dünyasına dair ipuçları edinecek ve staj fırsatları hakkında önemli bilgiler edineceğiniz etkinliğimize davetlisiniz!",
      name: "YILDIZ Holding ile Buluşma",
      designation: "19 Mart 2025",
      src: "/images/19mart2025/19martmain.jpg",
      button: "Detayları gör",
      link: "mart19_2025"
    },
    {
      quote: "Yeni insanlarla ve topluluğumuzla tanışabileceğiniz Bi-Tek Tanışma etkinliğinde sizleri de bekliyoruz!",
      name: "Bİ-TEK Tanışma",
      designation: "14 Ekim 2024",
      src: "/images/14ekim2024/14ekimmain.jpg",
      link: "ekim14_2024"
    },
    {
      quote: "“Swift UI - 101” eğitimimize katılarak iOS uygulama geliştirme dünyasına adım atın!",
      name: "Swift UI - 101",
      designation: "22 Ocak 2025",
      src: "/images/22ocak2025/22ocakmain.jpg",
      link: "ocak22_2025"
    },
    {
      quote: "Siber güvenlik ve veri bilimi hakkında bilgilenmek için söyleşimize davetlisiniz!",
      name: "DIGITECH TALKS",
      designation: "29 Mayıs 2024",
      src: "/images/29mayıs2024/29mayısmain.png",
      link: "mayıs29_2024"
    },
    // {
    //   quote: "Siber güvenlik ve veri bilimi hakkında bilgilenmek için söyleşimize davetlisiniz!",
    //   name: "DIGITECH TALKS",
    //   designation: "29 Mayıs 2024",
    //   src: "/images/29mayıs2024/29mayısmain.png",
    //   link: "mayıs29_2024"
    // },
    
  ];
  
  let activeIndex = 0;
  const imageContainer = document.getElementById("image-container");
  const nameElement = document.getElementById("name");
  const designationElement = document.getElementById("designation");
  const quoteElement = document.getElementById("quote");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  
  function calculateGap(width) {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
  
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  }
  
  function updateSlide(direction) {
    const oldIndex = activeIndex;
    activeIndex =
      (activeIndex + direction + slides.length) % slides.length;
  
    const containerWidth = imageContainer.offsetWidth;
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8; 
  
    slides.forEach((slide, index) => {
      let img = imageContainer.querySelector(`[data-index="${index}"]`);
      if (!img) {
        img = document.createElement("img");
        img.src = slide.src;
        img.alt = slide.name;
        img.classList.add("slide-image");
        img.dataset.index = index;
        imageContainer.appendChild(img);
      }
  
      const offset =
        (index - activeIndex + slides.length) % slides.length;
      const zIndex = slides.length - Math.abs(offset);
      const opacity = index === activeIndex ? 1 : 1;
      const scale = index === activeIndex ? 1 : 0.85;
  
      let translateX, translateY, rotateY;
      if (offset === 0) {
        translateX = "0%";
        translateY = "0%";
        rotateY = "0deg";
      } else if (offset === 1 || offset === -2) {
        translateX = "20%";
        translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
        rotateY = "-15deg";
      } else {
        translateX = "-20%";
        translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
        rotateY = "15deg";
      }
  
      img.style.zIndex = zIndex;
      img.style.opacity = opacity;
      img.style.transform = `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`;
    });
  
    nameElement.textContent = slides[activeIndex].name;
    designationElement.textContent = slides[activeIndex].designation;
    quoteElement.innerHTML = slides[activeIndex].quote
      .split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
  

      const detailButton = document.getElementById("detail-button");
  
      const slide = slides[activeIndex];
      if (detailButton && slide.link) {
        detailButton.dataset.link = slide.link;
        detailButton.textContent = slide.button || "Detayları Gör";
      }


    animateWords();
  }
  
  function animateWords() {
    const words = quoteElement.querySelectorAll(".word");
    words.forEach((word, index) => {
      word.style.opacity = "0";
      word.style.transform = "translateY(10px)";
      word.style.filter = "blur(10px)";
      setTimeout(() => {
        word.style.transition =
          "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out";
        word.style.opacity = "1";
        word.style.transform = "translateY(0)";
        word.style.filter = "blur(0)";
      }, index * 20);
    });
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const nameElement = document.getElementById("name");
    const designationElement = document.getElementById("designation");
    const quoteElement = document.getElementById("quote");
    const detailButton = document.getElementById("detail-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentIndex = 0; 

    // Slaytları ekle
    slides.forEach((slide, index) => {
        const img = document.createElement("img");
        img.src = slide.src;
        img.alt = slide.name;
        img.classList.add("slide-image");
        img.dataset.index = index;
        imageContainer.appendChild(img);
    });

    // Slayt içeriğini güncelle
    function updateSlideContent(index) {
        const slide = slides[index];
        nameElement.textContent = slide.name;
        designationElement.textContent = slide.designation || "";
        quoteElement.textContent = slide.quote || "";

        // Detaylar butonunu güncelle
        const selectedLink = slide.link;
        detailButton.dataset.link = selectedLink;
        detailButton.textContent = "Detayları Gör";
    }

    // Detaylar butonuna tıklanınca yönlendirme
    detailButton.addEventListener("click", () => {
        const selectedLink = detailButton.dataset.link;
        if (selectedLink) {
            localStorage.setItem("selectedEventLink", selectedLink);
            window.location.href = `etkinlikler.html?event=${selectedLink}`;
        } else {
            console.warn("Seçilen slaytta link tanımlı değil!");
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlideContent(currentIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlideContent(currentIndex);
        }
    });

    // Sayfa ilk yüklendiğinde ilk slaytı göster
    updateSlideContent(currentIndex);
});

  function handleNext() {
    updateSlide(1);
  }
  
  function handlePrev() {
    updateSlide(-1);
  }
  
  prevButton.addEventListener("click", handlePrev);
  nextButton.addEventListener("click", handleNext);
  
  updateSlide(0);
  
  window.addEventListener("resize", () => updateSlide(0));
  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      421: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      }
    }
  });
  