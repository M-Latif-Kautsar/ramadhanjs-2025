function generateCalendar() {
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    const puasaSunnah = [
        { name: "Puasa 6 Hari Syawal", dates: getSyawalDates() },
        { name: "Puasa Ayyamul Bidh", dates: ["13", "14", "15"].map(d => `${d} ${getHijriMonth()}`) },
        { name: "Puasa Senin-Kamis", dates: getSeninKamis() },
        { name: "Puasa Arafah", dates: ["9 Dzulhijjah"] },
        { name: "Puasa Asyura", dates: ["10 Muharram", "9 Muharram (disunnahkan)"] }
    ];

    puasaSunnah.forEach(item => {
        const div = document.createElement("div");
        div.className = "p-3 bg-blue-50 rounded-lg shadow-md";
        div.innerHTML = `
            <h2 class="text-lg font-semibold text-gray-800">${item.name}</h2>
            <p class="text-gray-600">${item.dates.join(", ")}</p>
        `;
        calendarDiv.appendChild(div);
    });
}

function getSyawalDates() {
    let dates = [];
    let syawalStart = new Date("2025-04-01"); // Ambil tanggal hari ini
    syawalStart.setDate(syawalStart.getDate() + (1 - syawalStart.getDate())); // Geser ke 2 Syawal
    for (let i = 0; i < 6; i++) {
        dates.push(formatDate(syawalStart));
        syawalStart.setDate(syawalStart.getDate() + 1);
    }
    return dates;
}

function getSeninKamis() {
    let dates = [];
    let today = new Date();
    for (let i = 0; i < 10; i++) { // Cari 5 Senin dan 5 Kamis ke depan
        today.setDate(today.getDate() + 1);
        if (today.getDay() === 1 || today.getDay() === 4) {
            dates.push(formatDate(today));
        }
    }
    return dates;
}

function formatDate(date) {
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "long" });
}

function getHijriMonth() {
    const hijriMonths = ["Muharram", "Safar", "Rabiul Awal", "Rabiul Akhir", "Jumadil Awal", "Jumadil Akhir", "Rajab", "Sya'ban", "Ramadhan", "Syawal", "Dzulqaidah", "Dzulhijjah"];
    const currentMonth = new Date().getMonth() + 1;
    return hijriMonths[(currentMonth + 2) % 12]; // Perkiraan konversi bulan Masehi ke Hijriyah
}

// Generate kalender saat halaman dimuat
generateCalendar();
