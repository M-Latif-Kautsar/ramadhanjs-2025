const doaList = [
    {
        doa: "اللهم لك صمت وبك آمنت وعلى رزقك أفطرت",
        latin: "Allahumma laka sumtu wa bika aamantu wa ‘alayka tawakkaltu wa ‘ala rizq-ika-aftartu",
        arti: "Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, kepada-Mu aku bertawakal, dan dengan rezeki-Mu aku berbuka."
    },
    {
        doa: "رب اغفر لي ولوالدي",
        latin: "Rabbi ighfir li wa liwalidayya",
        arti: "Ya Tuhanku, ampunilah aku dan kedua orang tuaku."
    },
    {
        doa: "اللهم اني اسالك علما نافعا ورزقا طيبا وعملا متقبلا",
        latin: "Allahumma inni as’aluka ‘ilman naafi’an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan",
        arti: "Ya Allah, sesungguhnya aku meminta kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima."
    },
    {
        doa: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        latin: "Bismillahirrahmanirrahim",
        arti: "Dengan menyebut nama Allah yang Maha Pengasih lagi Maha Penyayang."
    },
    {
        doa: "اللهم اجعلني من التوابين واجعلني من المتطهرين",
        latin: "Allahumma aj’alni minat-tawwabina waj’alni minal mutatahhirin",
        arti: "Ya Allah, jadikanlah aku termasuk orang yang bertaubat dan orang yang bersuci."
    },
    {
        doa: "اللهم ارزقني فهم النبيين وحفظ المرسلين وإلهام الملائكة المقربين",
        latin: "Allahumma arzuqni fahman-nabiyyina wa hifzhal-mursalin wa ilhamal-malaikatil-muqarrabin",
        arti: "Ya Allah, anugerahkanlah kepadaku pemahaman para nabi, hafalan para rasul, dan ilham para malaikat yang didekatkan kepada-Mu."
    },
    {
        doa: "اللهم اعني على ذكرك وشكرك وحسن عبادتك",
        latin: "Allahumma a’inni ‘ala dzikrika wa syukrika wa husni ‘ibadatika",
        arti: "Ya Allah, bantulah aku untuk selalu mengingat-Mu, bersyukur kepada-Mu, dan memperindah ibadah kepada-Mu."
    },
    {
        doa: "اللهم احسن عاقبتنا في الأمور كلها وأجرنا من خزي الدنيا وعذاب الآخرة",
        latin: "Allahumma ahsin ‘aqibatana fil-umuri kulliha wa ajirna min khizyi ad-dunya wa ‘adzabil akhirah",
        arti: "Ya Allah, perbaikilah akhir urusan kami dalam segala hal, dan lindungilah kami dari kehinaan dunia serta azab akhirat."
    },
    {
        doa: "اللهم اجعل القرآن العظيم ربيع قلبي ونور صدري وجلاء حزني وذهاب همي",
        latin: "Allahumma aj’alil-qur’anal ‘azhim rabi’a qalbi wa nura shadri wa jala’a huzni wa dzahaba hammi",
        arti: "Ya Allah, jadikanlah Al-Qur’an yang agung sebagai penyejuk hatiku, cahaya dadaku, penghilang kesedihanku, dan pelepas kegelisahanku."
    },
    {
        doa: "اللهم ثبت قلبي على دينك",
        latin: "Allahumma tsabbit qalbi ‘ala dinik",
        arti: "Ya Allah, teguhkanlah hatiku di atas agama-Mu."
    }
];

function nextDoa() {
    const randomIndex = Math.floor(Math.random() * doaList.length);
    const doa = doaList[randomIndex];

    document.getElementById("doaText").innerText = doa.doa;
    document.getElementById("doaLatin").innerText = doa.latin;
    document.getElementById("doaArti").innerText = `"${doa.arti}"`;
}

// Set doa pertama kali saat halaman dimuat
nextDoa();
