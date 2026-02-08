
document.addEventListener("DOMContentLoaded", function () {

    const events = {
        ekim14_2024: {
            title: "Bitek Tanışma",
            description: ["\u00A0\u00A0 Bitek Tanışma etkinliğinde yeni insanlarla tanışabilir, networkünüzü genişletebilirsiniz. Bugün gerçekleşen tanışma etkinliği oldukça keyifli geçti. Katılımcılar birbirleriyle sohbet ederek yeni arkadaşlıklar kurdu. Eğlenceli oyunlar oynandı. Güzel sürpriz hediyeler verildi. Çay, kahve, patlamış mısır eşliğinde keyifli anlar yaşandı.😊🌽🎉"],
            mainImage: "/images/14ekim2024/14ekimmain.jpg",
            images: ["/images/14ekim2024/14ekimfoto1.jpg", "/images/14ekim2024/14ekimfoto2.jpg", "/images/14ekim2024/14ekimfoto3.jpg"],
            video: "/images/14ekim2024/gifdeneme.mp4"
        },
        ocak22_2025: {
            title: "Swift UI - 101",
            description: ["\u00A0\u00A0 “Swift UI - 101” eğitimimize katılarak iOS uygulama geliştirme dünyasına adım atın! Daha önce Swift deneyiminiz olmasa bile bu etkinlik tam size göre. Eğitim sonunda e-sertifika kazanma fırsatını da kaçırmayın! Detaylı anlatımlar, sürpriz hediyeler ve ikramlarla dolu bu etkinlikte yerinizi alın. Çarşamba günü görüşmek üzere! 🎉"],
            mainImage: "/images/22ocak2025/22ocakmain.jpg",
            images: ["/images/22ocak2025/22ocakfoto1.jpg", "/images/22ocak2025/22ocakfoto2.jpg", "/images/22ocak2025/22ocakfoto3.jpg"],
            video: "/videos/kodlamaKampi.mp4"
        },
        mart19_2025: {
            title: "YILDIZ Holding ile Buluşma",
            description: ["\u00A0\u00A0 🚀 MEET YILDIZ ile Geleceğini Şekillendir!🚀",
                "\u00A0\u00A0 Bilgi ve Teknoloji Topluluğu olarak düzenlediğimiz bu özel etkinlikte, Yıldız Holding İşveren Markası, Öğrenme ve Gelişim Yöneticisi Esmannur YILDIRIM bizlerle olacak! 🌟",
                "\u00A0\u00A0 👩‍💼 Kariyer yolculuğunuzda size rehberlik edecek, iş dünyasına dair ipuçları paylaşacak ve staj fırsatları hakkında önemli bilgiler verecek!",
                "\u00A0\u00A0 📅 Tarih: 19 Mart 2025",
                "\u00A0\u00A0 ⏰ Saat: 16.00",
                "\u00A0\u00A0 📍 Yer: Online",
                "\u00A0\u00A0 💡 Sen de bu fırsatı kaçırma! Geleceğini inşa etmeye bizimle başla! 🏆",
            ],
            mainImage: "/images/19mart2025/19martmain.jpg",
            images: ["/images/19mart2025/19martfoto1.jpg", "/images/19mart2025/19martfoto2.jpg"],
            
        },
        mayıs29_2024: {
            title: "DIGITECH TALKS",
            description: ["\u00A0\u00A0 🚀 Etkinliğimize Davetlisiniz! 🚀",
                "\u00A0\u00A0 Bilgi ve Teknoloji Topluluğu olarak düzenlediğimiz bu özel etkinlikte sizleri aramızda görmekten mutluluk duyarız! 🌟",
                "\u00A0\u00A0 Bu etkinlikte çok değerli iki konuşmacıyı ağırlayacağız:",
                "\u00A0\u00A0\u00A0\u00A0 👩‍💼 Zahide Gür Taştan - Logo Yazılım'da Data Scientist, Yapay zeka ve veri bilimi üzerine engin bilgilerini bizlerle paylaşacak.",
                "\u00A0\u00A0\u00A0\u00A0 👨‍💼 Sedat Özdemir - Uniquesec'in Kurucu Ortağı, Girişimcilik ve teknoloji alanındaki tecrübelerini bizlere aktaracak.",
                "\u00A0\u00A0\u00A0\u00A0 📅 Tarih: 29 Mayıs 2024",
            ],
            mainImage: "/images/29mayıs2024/29mayısmain.png",
            images: ["/images/29mayıs2024/29mayısfoto1.png", "/images/29mayıs2024/29mayısfoto2.png", "/images/29mayıs2024/29mayısfoto3.png"],
        },
        // etkinlik4: {
        //     title: "baslık",
        //     description: "\u00A0\u00A0 açıklama burada...",
        //     mainImage: "/images/logo.png mainfoto",
        //     images: ["/images/logo.png", "/images/logo.png", "/images/logo.png"] genel fotolar,
        //     video: "/videos/" video
        // },

    };

    const urlParams = new URLSearchParams(window.location.search);
    const eventID = urlParams.get("event");

    console.log("eventID:", eventID);
    console.log("Etkinlik objesi:", events[eventID]);


    

    if (eventID && events[eventID]) {
        const event = events[eventID];

        // Başlık ve açıklamayı güncelle
        document.getElementById("eventTitle").textContent = event.title;
        document.getElementById("eventDescription").innerHTML = event.description.join('<br>');

        // Ana resmi güncelle
        document.getElementById("mainImage").src = event.mainImage;
        document.getElementById("mainImage").alt = event.title;

        // Galeri alanını temizle
        const galleryContainer = document.getElementById("galleryContainer");
        galleryContainer.innerHTML = ""; 

        // Resimleri galeriye ekle
        event.images.forEach(imgSrc => {
            const link = document.createElement("a");
            link.href = imgSrc;
            link.setAttribute("data-fancybox", "gallery");

            const img = document.createElement("img");
            img.src = imgSrc;
            img.classList.add("galleryItem");

            link.appendChild(img);
            galleryContainer.appendChild(link);
        });

        // Video varsa oluştur
        if (event.video) {
            const videoLink = document.createElement("a");
            videoLink.href = event.video;
            videoLink.setAttribute("data-fancybox", "gallery");
    
            const video = document.createElement("video");
            video.classList.add("galleryItem");
            video.controls = true;
    
            const source = document.createElement("source");
            source.src = event.video;
            source.type = "video/mp4";
    
            video.appendChild(source);
            videoLink.appendChild(video);
            galleryContainer.appendChild(videoLink);
        }

    } else {
        document.getElementById("eventTitle").textContent = "Etkinlik Bulunamadı";
        document.getElementById("eventDescription").textContent = "Üzgünüz, belirtilen etkinlik mevcut değil.";
        document.getElementById("mainImage").src = "/images/bitekLOGO.png";
        document.getElementById("mainImage").alt = "Etkinlik Bulunamadı";
    }
});