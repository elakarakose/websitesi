const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        b1: "Mutfak Lavabosu Hariç Her Şey",
        b2: "Tabaklar, ama onları sanat eserine dönüştürün.",
        b3: "Bu koleksiyon, elde şekillendirilmiş ve elle yapılmış çeşitli seramik tabaklar içeriyor; kusursuz derecede kusurlu ve günlük kullanım için tasarlanmış. Rustik yemek takımlarından neşeli atıştırmalık tabaklarına kadar her parça sofranıza biraz ruh katıyor.",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        b1: "Everything But The Kitchen Sink",
        b2: "Plates, But Make Them Art",
        b3: "This collection features a range of hand-thrown and hand-built ceramic plates—perfectly imperfect and made for everyday beauty. From rustic dinnerware to playful snack plates, each piece brings a little soul to your table.",
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