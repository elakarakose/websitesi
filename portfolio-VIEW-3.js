const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        bb1: "Saksılar, Saksılar ve Daha Fazla Saksı",
        bb2: "Yapraklı Dostlarınız İçin",
        bb3: "Her şekil ve boyutta, özenle tasarlanmış saksı koleksiyonu. İster sukulent ister sarkıcı bir saksı yetiştirin, bu parçalar doğal bir çekicilik ve tarzla yeşilliği kutlamak için tasarlandı.",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        bb1: "Pots, Pots & More Pots",
        bb2: "For Your Leafy Companions",
        bb3: "A collection of thoughtfully crafted plant pots in all shapes and sizes. Whether you're housing a succulent or a trailing pothos, these pieces are designed to celebrate greenery with earthy charm and style.",
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