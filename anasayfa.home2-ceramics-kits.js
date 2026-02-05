const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        home1: "Anasayfa /",
        shop1: "Online Mağaza /",
        myceramics: "Seramiklerim",
        kits: "SERAMIK KITLERI",
        etiket: "Çamurla oynamaya hazır mısınız? Bu setler yeni başlayanlar düşünülerek hazırlandı; fırına gerek yok.",
        urun1: "Kendi Saksınızı Boyayın Seti 250$",
        urun2: "Polikil Takı Seti 410$",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",

    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        home1: "Home /",
        shop1: "Online Shop /",
        myceramics: "My Ceramics",
        kits: "CERAMOCS KITS",
        etiket: "Ready to get muddy? These kits are curated with beginners in mind—no kiln needed.",
        urun1: "Paint-Your-Own Pot Kit $250",
        urun2: "Polyclay Jewellery Kit $410",
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