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
        glazes: "En Çok Kullandığım Sırlar ve Ne Zaman Kullanmalıyım",
        baslikk: "EN SEVDİĞİM SIRLAR VE NE ZAMAN KULLANMAM GEREKTİĞİ",

        paragraf: " ",
        
        link1: "Yeni Başlayanların Yaptığı 5 Yaygın Hata (Ve Ağlamadan Nasıl Düzeltilir)",
        link2: "Aklınızı kaybetmeden kil nasıl merkezlenir?",
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
        glazes: "My Go-To Glazes and When to Use Them",
        baslikk: "MY GO-TO GLAZES AND WHEN TO USE THEM",
        
        pararaf: " ",

        link1: "5 Common Beginner Mistakes (And How to Fix Them Without Crying)",
        link2: "How to Center Clay Without Losing Your Mind",
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