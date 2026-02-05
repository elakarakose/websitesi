const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        page: "Bu sayfada, orijinal seramik parçalarımın, geçmiş koleksiyonlarımın, yapım aşamalarına ait fotoğrafların ve en sevdiğim eserlerimin bir galerisi yer alıyor; çömlekçi çarkında şekillendirilmiş kupalardan el yapımı vazolara kadar her şey mevcut. Her fotoğraf, yavaş yapım, keşif ve neşe dolu bir hikaye anlatıyor.",
        the: "VAZO KİMLİĞİ",
        view: "görüntüle",
        but: "MUTFAK EVYESİ HARİÇ HER ŞEY",
        pots: "SAKSILAR, SAKSILAR VE DAHA FAZLA SAKSI",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        page: "This page features a gallery of my original ceramic pieces, past collections, process shots, and favorite works—from wheel-thrown mugs to hand-built vases. Each photo tells a story of slow making, exploration, and joy.",
        the: "THE VAZE IDENTITY",
        view: "VIEW",
        but: "EVERYTHING BUT THE KITCHEN SINK",
        pots: "POTS, POTS & MORE POTS",
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