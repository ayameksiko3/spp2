document.getElementById('jemput-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    fetch('submit_jemput.php', {  // Ganti dengan endpoint server yang sesuai
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('jemput-form').classList.add('hidden');
            document.getElementById('confirmation').classList.remove('hidden');
            document.getElementById('order-details').innerHTML = `
                <p><strong>Nama:</strong> ${formData.get('nama')}</p>
                <p><strong>Nomor Telepon:</strong> ${formData.get('telepon')}</p>
                <p><strong>Alamat Jemput:</strong> ${formData.get('alamat')}</p>
                <p><strong>Lokasi Tujuan:</strong> ${formData.get('tujuan')}</p>
                <p><strong>Jenis Kendaraan:</strong> ${formData.get('kendaraan')}</p>
                <p><strong>Metode Pembayaran:</strong> ${formData.get('pembayaran')}</p>
            `;
        } else {
            alert('Terjadi kesalahan, silakan coba lagi.');
        }
    })
    .catch(error => console.error('Error:', error));
});
