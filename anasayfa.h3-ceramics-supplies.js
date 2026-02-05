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
        baslik: "SERAMİK MALZEMELERİ",
        paragraf: "Stüdyoda test edilmiş ve yaratıcı sürecinizi desteklemek için özenle seçilmiştir.",
        urun1: "Seramik Kil - 5 kg Çuval 600$",
        urun2: "Polimer kil başlangıç ​​seti 400$",
        urun3: "Başlangıç ​​Seviyesi Sır Örnek Seti 700$",
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
        baslik: "CERAMICS SUPPLIES",
        paragraf: "Studio-tested and lovingly selected to support your creative process.",
        urun1: "Stoneware Clay - 5 kg Bag $600",
        urun2: "Polyclay Starter Range $400",
        urun3: "Beginner Glaze Sampler Pack $700",
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