const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        baslik: "Merhaba deyin veya stüdyoyu ziyaret edin.",
        p: "Bir ürün hakkında sorunuz mu var, özel sipariş talebiniz mi var veya en son kil çalışmanızı mı paylaşmak istiyorsunuz? Sizden haber almak çok isterim!",
        tel:"İletişim Bilgileri",
        adres: "Adres",
        saat: "Saat",
        monfri: "Pazartesi - Cuma - 08:00-19:00 ",
        buton: "BİZE ULAŞIN",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },
    
    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        baslik: "Say Hello or Visit the Studio",
        p: "Have a question about a product, commission request, or want to share your latest clay creation? I'd love to hear from you!",
        tel: "Contact Info",
        adres: "Address",
        saat: "Hours",
        monfri: "Mon-Fri - 08:00 - 19:00",
        buton: "CONTACT US",
        copyright: "Copyright © 2025 All rights reserved - Mud & Muse",
    }
};

languageSelect.addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});