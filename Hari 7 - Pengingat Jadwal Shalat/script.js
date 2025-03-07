    function fetchPrayerTimes(){
        if (!navigator.geolocation) {
            alert("Browser tidak mendukung geolocation!");
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) =>{
            const {latitude, longitude} = position.coords;
            const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

            try{
                const response = await fetch(url);
                const data = await response.json();
                const times = data.data.timings;

                document.getElementById("subuh").innerText = times.Fajr;
                document.getElementById("dzuhur").innerText = times.Dhuhr;
                document.getElementById("ashar").innerText = times.Asr;
                document.getElementById("maghrib").innerText = times.Maghrib;
                document.getElementById("isya").innerText = times.Isha;
            } catch (error){
                alert("Gagal mengambil data waktu shalat");
                console.error(error);
            }
        }, ()=> {
            alert("Izinkan Akses lokasi untuk mengambil waktu shalat");
        });
    }
    fetchPrayerTimes();