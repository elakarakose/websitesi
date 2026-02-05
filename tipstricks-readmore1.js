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
        myceramics: "Seramiklerim",
        baslik: "5 Sık Yapılan Başlangıç ​​Hatası (Ve Ağlamadan Nasıl Düzeltilir)",
        paragraf: "Sonunda çarkın başına mı oturdun ya da ilk plakanı mı açtın—yaşasın, çamur kulübüne hoş geldin! 🎉 Şimdi sıra her şeyin sallandığı, çöktüğü, çatladığı ya da просто… tuhaf göründüğü kısımda. Endişelenme. Hepimiz bunu yaşadık (bazılarımız haftada birkaç kez). İşte yeni başlayanların yaptığı 5 yaygın hata—ve eserinle (ya da kendinle) birlikte her şeyi pencereden atmadan bunları nasıl düzelteceğin: Çok Fazla Su Kullanmak. Sorun: Dönen çamur bir anda üzgün, sarkık bir su birikintisine dönüşür. Çözüm: Suyu ölçülü kullan. Bunu yemeği baharatlamak gibi düşün—pürüzsüzlük için yeterince. Fazlasını almak için yanında mutlaka bir sünger bulundur. Merkezlemeyi Aceleye Getirmek. Sorun: Parçan çarkta sanki cha-cha yapıyormuş gibi sallanır. Çözüm: Yavaşla. Merkezleme zaman ve pratik ister. Sabit baskı uygula, dirseklerini vücuduna dayayıp sabitle ve şunu unutma: Seansın büyük kısmını sadece merkezlemeye ayırman tamamen normal. Tabanı Sıkıştırmamak. Sorun: Kuruduktan sonra kabının tabanında sihirli bir şekilde çatlaklar oluşur. Çözüm: Şekillendirirken bir rib ya da parmağınla tabanı sıkıştır. Emin olmak için bunu birkaç kez yap—gelecekteki halin sana teşekkür edecek. Çamuru Fazla Kurcalamak. Sorun: Sürekli düzeltir, yeniden şekillendirirsin ve çamur hayata küser. Çözüm: Ne zaman duracağını bil. Mükemmel olmak zorunda değil—işin büyüsü de burada! Geri çekil ve şunu söyle: “Bu garip küçük kaseyi ben yaptım ve bu çok güzel.” Kurutma Sürecini Atlamak. Sorun: Parçan fırında yamulur ya da çatlar. Çözüm: Yavaşça kurumasına izin ver. Hafifçe plastikle ört ve her yerinin—özellikle tabanın—eşit şekilde kurumasını sağla. Bu adımı aceleye getirme! Son ipucu: Bol bol gül. Parçaların zamanla gelişecek—ama dürüst olalım, asıl eğlence o dağınıklığın içinde.",
        ikincilink:"En Çok Kullandığım Sırlar ve Ne Zaman Kullanmalıyım",
        ucunculink:"Aklınızı kaybetmeden kil nasıl merkezlenir?",
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
        myceramics: "My Ceramics",
        baslik: "5 COMMON BEGINNER MISTAKES (AND HOW TO FIX THEM WITHOUT CRYING)",
        paragraf: "So, you finally sat down at the wheel or rolled out your first slab—yay, welcome to the mud club! Now comes the part where everything wobbles, collapses, cracks, or just looks... weird. Don’t worry. We’ve all been there (some of us multiple times a week). Here are 5 common beginner mistakes—and how to fix them without throwing your piece (or yourself) out the window: Using Too Much Water The problem: That spinning clay suddenly turns into a sad, saggy puddle. The fix: Use water sparingly. Think of it like seasoning food—you want just enough to keep things smooth. Keep a sponge handy to dab away the extra. Rushing the Centering The problem: Your piece looks like it’s doing the cha-cha on the wheel. The fix: Slow. Down. Centering takes time and practice. Apply consistent pressure, keep your elbows braced, and remember: it’s okay to spend most of your session just getting centered. Not Compressing the Bottom The problem: Cracks magically appear at the base of your pot after drying. The fix: Use a rib or finger to compress the base as you throw. Do it a few times just to be safe—your future self will thank you. Overworking the Clay The problem: You keep fiddling and re-shaping, and the clay gives up on life. The fix: Know when to stop. It doesn’t have to be perfect—that’s the charm! Step back and say, “I made this weird little bowl, and that’s beautiful.” Skipping the Drying Process The problem: Your piece warps or cracks in the kiln. The fix: Let it dry slowly. Cover it lightly with plastic and let it dry evenly—especially the base. Don’t rush this step! Final Tip Laugh. A lot. Your pieces will improve—but honestly, the real fun is in the mess.",
        ikincilink:"My Go-To Glazes and When to Use Them",
        ucunculink:"How to Center Clay Without Losing Your Mind",
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