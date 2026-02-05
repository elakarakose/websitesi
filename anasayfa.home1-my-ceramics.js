const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        myceramics: "Seramiklerim",
        home1: "Anasayfa /",
        shop1: "Online Mağaza /",
        prgrf: "Sevgiyle (ve bolca sır denemesiyle) üretilen, eşsiz, el yapımı parçalar.",
        mug: "Wabi Kupa $185",
        bowl: "Günlük Kullanım İçin Kase Seti 280$",
        vase: "Ay Işığı Vazosu 250$",
        o1: "Sıralama Ölçütü",
        o2: "Önerilenler",
        o3: "Fiyat, yüksekten düşüğe",
        o4: "Fiyat, düşükten yükseğe",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",

    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        myceramics: "My Ceramics",
        home1: "Home /",
        shop1: "Online Shop /",
        prgrf: "One-of-a-kind, handcrafted pieces made with love (and lots of glaze testing).",
        mug: "Wabi Mug $185",
        bowl: "Everyday Bowl Set $280",
        vase: "Moonlight Vase $250",
        o1: "Sort By",
        o2: "Recommended",
        o3: "Price, high to low",
        o4: "Price, low to high",
        copyright: "Copyright © 2025 All rights reserved - Mud & Muse"
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