let correctSurah = "";

async function getRandomAyat() {
    try {
        const randomAyat = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyat}/editions/quran-uthmani,id.indonesian`);
        const data = await response.json();

        if (data.code === 200) {
            const ayat = data.data[0];  // Teks Arab
            correctSurah = ayat.surah.englishName; // Nama surah yang benar
            document.getElementById("ayatSurah").innerText = ayat.surah.englishName;
            document.getElementById("ayatText").innerText = ayat.text; 
            document.getElementById("feedback").innerText = "";
            document.getElementById("jawaban").value = "";
        } else {
            throw new Error("Gagal mengambil data ayat");
        }
    } catch (error) {
        document.getElementById("ayatText").innerText = "Gagal mengambil ayat.";
        console.error(error);
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("jawaban").value.trim().toLowerCase();
    const correctAnswer = correctSurah.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "🎉 Benar! Surah " + correctSurah;
        document.getElementById("feedback").classList.add("text-green-600");
    } else {
        document.getElementById("feedback").innerText = "❌ Salah! Coba lagi.";
        document.getElementById("feedback").classList.add("text-red-600");
    }
}

// Ambil ayat pertama saat halaman dimuat
getRandomAyat();
