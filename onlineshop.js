const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        baslik: "Çamur Pazarına Hoş Geldiniz",
        paragraf: "El yapımı hazineleri, başlangıç ​​setlerini ve güvenilir stüdyo malzemelerini keşfedin.",
        store: "Çevrimiçi Mağaza",
        myceramics: "Seramiklerim",
        uc: "3 ürün",
        shopnow: "ŞİMDİ ALIŞVERİŞ YAPIN",
        iki: "2 ürün",
        kits: "Seramik Kitleri",
        sup: "Seramik Malzemeleri",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },
    
    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        baslik: "Welcome to the Mud Market",
        paragraf: "Explore handmade treasures, starter kits, and trusted studio supplies.",
        store: "Online Store",
        myceramics: "My Ceramics",
        uc: "3 PRODUCTS",
        shopnow: "SHOP NOW",
        iki: "2 PRODUCTS",
        kits:"CERAMICS KITS",
        sup: "CERAMICS SUPPLIES",
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