const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        b1: "Vazo Kimliği",
        b2: "Çiçekleri muhafaza etmek için tasarlanmıştır - veya tek başına da kullanılabilir.",
        b3: "Bu vazo serisi, organik kıvrımlar, yumuşak sırlar ve heykelsi bir çekicilikle biçim ve işlevi bir araya getiriyor. Her parça benzersizdir ve taze çiçekler, kuru saplar için veya sadece rafınızda bir ifade unsuru olarak mükemmeldir.",

        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        b1: "The Vase Identity",
        b2: "Built To Hoold Blooms - or Stand Alone",
        b3: "This range of vases blends form and function with organic curves, soft glazes, and sculptural appeal. Each piece is one-of-a-kind, perfect for fresh flowers, dried stems, or simply as a statement on your shelf.",
        
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