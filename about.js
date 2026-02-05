const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        meet: "Sayfanın Arkasındaki Sanatçıyla Tanışın",
        merhaba: "Merhaba, ben Ela!",
        messy: "Ben, Mud & Muse'un arkasındaki kirli eller ve çamurlu önlük sahibi kişiyim. Çömlekçi çarkının başına ilk oturduğumda kile aşık oldum; sanki dünya durmuş, nefes alıp yaratabileceğim kadar uzun bir süre için bana fırsat vermişti. Güney Afrika'nın Hillcrest tepelerinde yer alan şirin bir stüdyoda günlerimi taş eşya şekillendirerek, sırlarla deneyler yaparak ve başkalarının seramiğin büyüsünü keşfetmesine yardımcı olmak için kendin yap kitleri hazırlayarak geçiriyorum. Doğadan, sessiz anlardan ve el yapımı şeyleri gerçekten özel kılan güzel kusurlardan ilham alıyorum. Bu stüdyo bir dükkandan daha fazlası; hikayeler paylaşmak, öğrendiklerimi öğretmek ve diğer yaratıcı ruhlarla bağlantı kurmak için bir alan.",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",
    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        meet: "Meet the Artist Behind the Wheel",
        merhaba: "Hi, I’m Ela!",
        messy: "I’m the messy hands and muddy apron behind Mud & Muse. I fell in love with clay the first time I sat at a wheel—it felt like the world paused, just long enough for me to breathe and create. Based in a cozy little studio tucked in the hills of Hillcrest South Africa, I spend my days shaping stoneware, experimenting with glazes, and building DIY kits to help others discover the magic of ceramics. I’m inspired by nature, quiet moments, and the beautiful imperfections that make handmade things truly special. This studio is more than a shop—it’s a space to share stories, teach what I’ve learned, and connect with other creative souls.",
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