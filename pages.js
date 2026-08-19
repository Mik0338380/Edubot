function showHome() {

pageContent.innerHTML = `
<h1>Halo 👋</h1>

<p>Selamat datang di <b>EduSmart</b>.</p>

<div class="hero-card">

<h2>Materi Hari Ini</h2>

<p>Perangkat Lunak untuk Produktivitas</p>

<button class="btn btn-primary">
Mulai Belajar
</button>

</div>
`;

}

function showKomponen(nama){

    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    const data = {

        menu: {
    judul: "📋 Menu",
    isi: `

    <div class="text-center mb-3">
        <img src="menu.png">
             class="img-fluid rounded shadow"
             style="max-height:300px;"
             alt="Menu Microsoft Word">
    </div>

    <p>
        <strong>Menu</strong> adalah kumpulan perintah yang digunakan untuk mengelola dokumen dan menjalankan berbagai fungsi pada Microsoft Word.
    </p>

    <h6>Contoh Menu</h6>

    <ul>
        <li>📂 File</li>
        <li>🏠 Beranda</li>
        <li>➕ Sisipkan</li>
        <li>📄 Tata Letak</li>
    </ul>

    <div class="alert alert-info">
        💡 <strong>Tips:</strong> Gunakan menu <strong>File</strong> untuk membuat, membuka, dan menyimpan dokumen.
    </div>

    `
},

        ikon: {
    judul: "🖼️ Ikon",
    isi: `

    <div class="text-center mb-3">
        <img src="ikon.png">
             class="img-fluid rounded shadow"
             style="max-height:300px;"
             alt="Ikon Microsoft Word">
    </div>

    <p>
        <strong>Ikon</strong> adalah gambar kecil yang mewakili suatu perintah sehingga pengguna dapat menjalankan fitur dengan cepat tanpa harus membuka menu.
    </p>

    <h6>Contoh Ikon</h6>

    <ul>
        <li>💾 Simpan</li>
        <li>📄 Dokumen Baru</li>
        <li>↩️ Undo</li>
        <li>🖨️ Cetak</li>
    </ul>

    <div class="alert alert-success">
        💡 <strong>Tips:</strong> Arahkan kursor ke sebuah ikon untuk melihat nama dan fungsi ikon tersebut.
    </div>

    `
},

        area: {
    judul: "🪟 Area Kerja",
    isi: `

    <div class="text-center mb-3">
        <img src="area.png">
             class="img-fluid rounded shadow"
             style="max-height:300px;"
             alt="Area Kerja Microsoft Word">
    </div>

    <p>
        <strong>Area Kerja</strong> adalah bagian utama pada Microsoft Word yang digunakan untuk mengetik, mengedit, dan menyusun isi dokumen.
    </p>

    <h6>Aktivitas yang dapat dilakukan</h6>

    <ul>
        <li>⌨️ Mengetik teks</li>
        <li>🖼️ Menambahkan gambar</li>
        <li>📋 Menyalin dan menempel teks</li>
        <li>✏️ Mengedit isi dokumen</li>
    </ul>

    <div class="alert alert-warning">
        💡 <strong>Tips:</strong> Klik pada area kerja sebelum mulai mengetik agar tulisan muncul pada posisi yang diinginkan.
    </div>

    `
},

        scroll: {
    judul: "📜 Bilah Gulir",
    isi: `

    <div class="text-center mb-3">
       <img src="scroll.png">
             class="img-fluid rounded shadow"
             style="max-height:300px;"
             alt="Bilah Gulir Microsoft Word">
    </div>

    <p>
        <strong>Bilah Gulir (Scroll Bar)</strong> digunakan untuk menggeser tampilan dokumen sehingga pengguna dapat melihat bagian dokumen yang belum terlihat pada layar.
    </p>

    <h6>Cara Menggunakan</h6>

    <ul>
        <li>⬆️ Geser ke atas untuk melihat bagian sebelumnya.</li>
        <li>⬇️ Geser ke bawah untuk melihat bagian berikutnya.</li>
        <li>↔️ Pada dokumen yang lebar, gunakan bilah gulir horizontal untuk bergeser ke kiri atau kanan.</li>
    </ul>

    <div class="alert alert-info">
        💡 <strong>Tips:</strong> Putar roda (scroll wheel) pada mouse untuk menggulir dokumen dengan lebih cepat.
    </div>

    `
},
        status: {
    judul: "📊 Bilah Status",
    isi: `

    <div class="text-center mb-3">
        <img src="status.png">
             class="img-fluid rounded shadow"
             style="max-height:300px;"
             alt="Bilah Status Microsoft Word">
    </div>

    <p>
        <strong>Bilah Status</strong> adalah bagian yang berada di bawah jendela Microsoft Word dan berfungsi menampilkan informasi tentang dokumen yang sedang dikerjakan.
    </p>

    <h6>Informasi yang Ditampilkan</h6>

    <ul>
        <li>📄 Nomor halaman dokumen.</li>
        <li>📝 Jumlah kata (Word Count).</li>
        <li>🌐 Bahasa yang digunakan.</li>
        <li>🔍 Tingkat pembesaran (Zoom).</li>
    </ul>

    <div class="alert alert-danger">
        💡 <strong>Tips:</strong> Gunakan fitur <strong>Zoom</strong> pada bilah status untuk memperbesar atau memperkecil tampilan dokumen agar lebih nyaman dibaca.
    </div>

    `
},


    };

    title.innerHTML = data[nama].judul;
    body.innerHTML = data[nama].isi;

    const modal = new bootstrap.Modal(
        document.getElementById("komponenModal")
    );

    modal.show();

}
