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
        clay: "Aklınızı kaybetmeden kil nasıl merkezlenir?",
        BASLIK1: "KİLİ AKLINIZI KAYBETMEDEN NASIL MERKEZLEYEBİLİRSİNİZ?",

        paragraf: " ",

        link1: "Yeni Başlayanların Yaptığı 5 Yaygın Hata (Ve Ağlamadan Nasıl Düzeltilir)",
        link2: "En Çok Kullandığım Sırlar ve Ne Zaman Kullanmalıyım",
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
        clay: "How to Center Clay Without Losing Your Mind",
        BASLIK1: "HOW TO CENTER CLAY WİTHOUT LOSING YOUR MIND",

        paragraf: " ",

        link1: "5 Common Beginner Mistakes (And How to Fix Them Without Crying)",
        link2: "My Go-To Glazes and When to Use Them",
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