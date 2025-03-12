async function getRandomAyat() {
    try{
        //pilih ayat random acak 
        const randomAyat = Math.floor(Math.random()*6236)+1;
        const response = await fetch (`https://api.alquran.cloud/v1/ayah/${randomAyat}/editions/quran-uthmani,id.indonesian`);
        const data = await response.json();

        if(data.code === 200){
            const ayatArab = data.data[0];  // Teks Arab
            const ayatIndo = data.data[1];  // Terjemahan Indonesia
        
            document.getElementById("ayatSurah").innerText = `${ayatArab.surah.englishName} - Ayat ${ayatArab.numberInSurah}`;
            document.getElementById("ayatText").innerText = ayatArab.text; // Ayat dalam bahasa Arab
            document.getElementById("ayatArti").innerText = `"${ayatIndo.text}"`; // Terjemahan bahasa Indonesia
        }else{
            throw new Error("gagal mengambil ayat");
        }
    }catch (error){
        document.getElementById("ayatText").innerText = "Gagal mengambil ayat,";
        console.error(error);
    }    
}

getRandomAyat();