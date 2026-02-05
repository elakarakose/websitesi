const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        pp: "Kil ile ilgili her şey hakkında (çamurlu) dedikoduları paylaştığım günlüğe hoş geldiniz.",
        card1: "Sıkıntıları atlayıp eğlenceye dalmanıza yardımcı olacak, samimi bir rehber.",
        k1: "Yeni Başlayanların Yaptığı 5 Yaygın Hata (Ve Ağlamadan Nasıl Düzeltilir)",
        card2: "Renk, bitiş ve favori kombinasyonlarımla ilgili notlarla birlikte, sır rafıma bir göz atın.",
        k2: "En Çok Kullandığım Sırlar ve Ne Zaman Kullanmalıyım",
        card3: "Çünkü evet, zor - ve evet, başarabilirsiniz. İşte sonunda nasıl başardığım.",
        k3: "Aklınızı kaybetmeden kil nasıl merkezlenir?",
        readmore: "DEVAMINI OKU",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        pp: "Welcome to the journal—where I spill the (muddy) tea on all things clay.",
        card1:"A friendly guide to help you skip the frustration and jump into the fun.",
        k1:"5 Common Beginner Mistakes (And How to Fix Them Without Crying)",
        card2: "A peek into my glaze shelf, with notes on color, finish, and favorite combos.",
        k2: "My Go-To Glazes and When to Use Them",
        card3: "Because yes, it’s hard—and yes, you can do it. Here’s how I finally cracked it.",
        k3: "How to Center Clay Without Losing Your Mind",
        readmore: "READ MORE",
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