const languageSelect = document.getElementById("languageSelect");

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        portfolio: "Portfolyo",
        shop: "Online Mağaza",
        tips: "İpuçları & Tüyolar",
        touch: "iletişime geçin",
        studioTitle: "Stüdyom",
        introText: "Mud & Muse’da yavaşlamaya, ellerimi çamura bulamaya ve topraktan güzellik yaratmaya inanıyorum.",
        meetArtist: "ÇARKIN ARKASINDAKİ SANATÇIYI TANI",
        p1: "Ellerinizi kirletin - en iyi şekilde. Sır kılavuzlarından kil püf noktalarına kadar, seramik yolculuğunuzun her aşaması için kısa dersler ve atölye bilgeliğini keşfedin.",
        p2: "Fırının içine bir göz atın. Geçmiş çalışmalarımın koleksiyonuna, işlem fotoğraflarına ve favori parçalarıma göz atın; her biri yürekle, ateşle ve biraz da hayal gücüyle şekillendirildi.",
        shopceramics: "Seramik Dükkanı",
        p3: "El yapımı parçalar. Özenle seçilmiş setler. Gerçekten kullanacağınız aletler. İster koleksiyon yapın ister yaratın, orijinal seramikler, başlangıç ​​setleri ve güvenilir malzemeler arasından özenle seçilmiş veya üretilmiş ürünleri satın alın.",
        myceramics: "Seramiklerim",
        uc: "3 ürün",
        shopnow: "Şimdi Alışveriş Yapın",
        iki: "2 ürün",
        kits: "Seramik Kitleri",
        sup: "Seramik Malzemeleri",
        LM:" Daha fazla bilgi edin",
        join: "Seramik Kulübüne Katılın",
        get: "Bizimle birlikte çamurda eğlenin—yeni koleksiyonlar, stüdyo ipuçları, özel indirimler ve direksiyon başındaki sürprizlerden ilk siz haberdar olun.",
        sign: "Şimdi kaydolun ve ilk siparişinizde %10 indirim kazanın!",
        sub: "Takip et",
        copyright: "Telif hakkı © 2025 Tüm hakları saklıdır - Mud & Muse",

    },

    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        shop: "Online Shop",
        tips: "Tips & Tricks",
        touch: "Get In Touch",
        studioTitle: "My Studio",
        introText: "At Mud & Muse, I believe in slowing down, getting my hands dirty, and shaping beauty from the earth.",
        meetArtist: "MEET THE ARTIST BEHIND THE WHEEL",
        p1: "Get your hands dirty—in the best way. From glaze guides to clay hacks, explore bite-sized lessons and studio wisdom for every stage of your ceramics journey.",
        p2:"A peek inside the kiln. Browse my collection of past works, process photos, and favorite pieces—each one shaped with heart, fire, and a bit of whimsy.",
        shopceramics:"Shop Ceramics",
        p3:"Handmade pieces. Curated kits.Tools you’ll actually use. Whether you're collecting or creating, shop original ceramics, starter kits, and trusted supplies—all crafted or chosen with care.",
        myceramics: "My Ceramics",
        uc: "3 PRODUCTS",
        shopnow: "SHOP NOW",
        iki: "2 PRODUCTS",
        kits: "CERAMICS KITS",
        sup: "CERAMICS SUPPLIES",
        LM:"Learn More",
        join: "Join The Ceramics Club",
        get: "Get muddy with us—be the first to know about new collections, studio tips, exclusive discounts, and behind-the-wheel sneak peeks.",
        sign: "Sign up now and get 10% off your first order!",
        sub: "Subsrcibe",
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