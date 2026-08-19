const pageContent = document.getElementById("page-content");

let currentTopic = "";

function showHome(){

    closeEduBot();

    setActiveMenu("menu-home");

pageContent.innerHTML = `

<h1>Halo 👋</h1>

<p>Selamat datang di <b>EduSmart</b>.</p>

<div class="hero-card">

    <h2>📚 Materi Hari Ini</h2>

    <p>Perangkat Lunak untuk Produktivitas</p>

    <button
        class="btn btn-primary"
        onclick="showMateri()">
        Mulai Belajar
    </button>

</div>

<div class="info">

    <div class="box">
        <h3>5</h3>
        <p>Materi</p>
    </div>

    <div class="box">
        <h3>10</h3>
        <p>Soal</p>
    </div>

</div>

<div class="progress-card">

    <h3>📈 Progress Belajar</h3>

    <progress value="0" max="100"></progress>

    <p>0% Selesai</p>

</div>

`;

updateProgress();

}

function setActiveMenu(menuId) {

    document.querySelectorAll(".menu").forEach(menu => {
        menu.classList.remove("active");
    });

    document.getElementById(menuId).classList.add("active");
}


function showMateri() {

    closeEduBot();

setActiveMenu("menu-materi");

pageContent.innerHTML = `

<h1><i class="bi bi-book"></i> Materi</h1>

<p>Pilih materi yang ingin dipelajari.</p>

<div class="materi-list">

<div class="materi-card">

<div class="materi-icon">
<i class="bi bi-mouse"></i>
</div>

<div class="materi-body">

<h3>Interaksi dengan Perkakas</h3>

<p>Mempelajari antarmuka pengguna berbasis grafis (GUI), komponen-komponennya, serta cara menentukan komponen antarmuka yang diperlukan.</p>

<button class="btn btn-primary" onclick="showMateri1()">
Mulai Belajar
</button>

</div>

</div>

<div class="materi-card">

<div class="materi-icon">
<i class="bi bi-folder-fill"></i>
</div>

<div class="materi-body">

<h3>File dan Folder</h3>

<p>Memahami cara membuat, menyimpan, memindahkan, dan mengelola file serta folder.</p>

<button class="btn btn-primary" onclick="showMateri2()">
    Mulai Belajar
</button>

</div>

</div>

<div class="materi-card">

<div class="materi-icon">
<i class="bi bi-laptop"></i>
</div>

<div class="materi-body">

<h3>Aplikasi Perkantoran</h3>

<p>Mempelajari pembuatan brosur sederhana dengan aplikasi pengolah kata serta pembuatan dan penyajian slide presentasi, termasuk menyimpan dan membuka kembali file.</p>

<button class="btn btn-primary" onclick="showMateri3()">
Mulai Belajar
</button>

</div>

</div>

<div class="materi-card">

<div class="materi-icon">
<i class="bi bi-envelope"></i>
</div>

<div class="materi-body">

<h3>Surel</h3>

<p>Mempelajari cara membuat akun, menulis, mengirim, dan membalas surel dengan bahasa yang sesuai..</p>

<button class="btn btn-primary" onclick="showMateri4()">
Mulai Belajar
</button>

</div>

</div>

<div class="materi-card">

    <div class="materi-icon">
        <i class="bi bi-diagram-3"></i>
    </div>

    <div class="materi-body">

        <h3>Interaksi Antarperangkat</h3>

        <p>
            Mempelajari cara berbagai perangkat dapat saling
            terhubung dan berinteraksi untuk bertukar data.
        </p>

        <button class="btn btn-primary" onclick="showMateri5()">
            Mulai Belajar
        </button>

    </div>

</div>

`;

}

document.getElementById("menu-home").addEventListener("click", function(e) {

    e.preventDefault();

    setActiveMenu("menu-home");

    showHome();

});

document.getElementById("menu-materi").addEventListener("click", function(e) {
    e.preventDefault();
    showMateri();
});

document.getElementById("menu-latihan").addEventListener("click", function(e) {

    e.preventDefault();

    showLatihan();

});

document.getElementById("menu-tentang").addEventListener("click", function(e){

    e.preventDefault();

    showTentang();

});

function showMateri1(){

    closeEduBot();

setActiveMenu("menu-materi");

currentTopic = "perkakas";

showSuggestions();

pageContent.innerHTML = `

<button class="btn btn-secondary mb-4" onclick="showMateri()">
<i class="bi bi-arrow-left"></i> Kembali
</button>

<h1>Interaksi dengan Perkakas</h1>

<div class="hero-card">

<h3><i class="bi bi-window"></i> Mengenal Antarmuka Aplikasi</h3>

<div class="alert alert-primary mt-3">

    <h5>💡 Tahukah Kamu?</h5>

    <p class="mb-0">
        Setiap aplikasi perangkat lunak untuk produktivitas, seperti
        <strong>Microsoft Word</strong>,
        <strong>Microsoft Excel</strong>, dan
        <strong>Microsoft PowerPoint</strong>,
        memiliki komponen antarmuka yang hampir sama, seperti menu, ikon,
        area kerja, bilah gulir, dan bilah status.
        <strong>Pada materi ini, Microsoft Word digunakan sebagai contoh</strong>
        agar peserta didik lebih mudah mengenali bagian-bagian antarmuka aplikasi
        sebelum mempelajari aplikasi produktivitas lainnya.
    </p>

</div>

<div class="card shadow-sm border-0 my-4">

    <div class="card-body text-center">

       <img
    src="antarmuka-word.png.png"
    class="img-fluid rounded"
    style="max-width:900px;"
    alt="Contoh Antarmuka Microsoft Word">

        <p class="text-muted mt-3 mb-0">
            <em>Gambar 1. Contoh antarmuka aplikasi Microsoft Word.</em>
        </p>

        <p class="text-center text-muted mt-2">
    <em>
        Microsoft Word digunakan sebagai contoh antarmuka aplikasi.
        Konsep yang dipelajari pada materi ini juga dapat diterapkan pada
        Microsoft Excel dan Microsoft PowerPoint.
    </em>
</p>

    </div>

</div>

<div class="alert alert-primary mt-3">

<b>Contoh:</b><br><br>

📋 Menu → berisi kumpulan perintah.<br>

🖼️ Ikon → mewakili suatu perintah.<br>

🔘 Tombol → menjalankan suatu aksi.<br>

🪟 Area kerja → tempat membuat atau mengedit dokumen.

</div>

<hr>

<h3><i class="bi bi-grid-3x3-gap"></i> Komponen Antarmuka</h3>

<div class="col-lg-4 col-md-6">

    <div class="card h-100 shadow-sm komponen-card"
        onclick="showKomponen('menu')">

        <div class="card-body text-center">

            <i class="bi bi-menu-button-wide-fill fs-1 text-primary"></i>

            <h5 class="mt-3">
                📋 Menu
            </h5>

            <p class="text-muted small">
                Berisi kumpulan perintah seperti File,
                Beranda, Sisipkan, dan lainnya.
            </p>

            <span class="badge bg-primary">
                Klik untuk belajar
            </span>

        </div>

    </div>

</div>

<div class="col-lg-4 col-md-6">

    <div class="card h-100 shadow-sm komponen-card"
        onclick="showKomponen('ikon')">

        <div class="card-body text-center">

            <i class="bi bi-grid-3x3-gap-fill fs-1 text-success"></i>

            <h5 class="mt-3">
                🖼️ Ikon
            </h5>

            <p class="text-muted small">
                Gambar kecil yang mewakili suatu perintah agar lebih cepat digunakan.
            </p>

            <span class="badge bg-success">
                Klik untuk belajar
            </span>

        </div>

    </div>

</div>

<div class="col-lg-4 col-md-6">

    <div class="card h-100 shadow-sm komponen-card"
        onclick="showKomponen('area')">

        <div class="card-body text-center">

            <i class="bi bi-window fs-1 text-warning"></i>

            <h5 class="mt-3">
                🪟 Area Kerja
            </h5>

            <p class="text-muted small">
                Tempat utama untuk mengetik, mengedit, dan menyusun isi dokumen.
            </p>

            <span class="badge bg-warning text-dark">
                Klik untuk belajar
            </span>

        </div>

    </div>

</div>

<div class="col-lg-4 col-md-6">

    <div class="card h-100 shadow-sm komponen-card"
        onclick="showKomponen('scroll')">

        <div class="card-body text-center">

            <i class="bi bi-arrow-down-up fs-1 text-info"></i>

            <h5 class="mt-3">
                📜 Bilah Gulir
            </h5>

            <p class="text-muted small">
                Digunakan untuk menggeser tampilan dokumen ke atas, bawah, kiri, atau kanan.
            </p>

            <span class="badge bg-info text-dark">
                Klik untuk belajar
            </span>

        </div>

    </div>

</div>

<div class="col-lg-4 col-md-6">

    <div class="card h-100 shadow-sm komponen-card"
        onclick="showKomponen('status')">

        <div class="card-body text-center">

            <i class="bi bi-bar-chart-line-fill fs-1 text-danger"></i>

            <h5 class="mt-3">
                📊 Bilah Status
            </h5>

            <p class="text-muted small">
                Menampilkan informasi seperti nomor halaman, jumlah kata, dan tingkat pembesaran dokumen.
            </p>

            <span class="badge bg-danger">
                Klik untuk belajar
            </span>

        </div>

    </div>

</div>

</div>

<hr>

<h3><i class="bi bi-lightbulb"></i> Contoh Interaksi dengan Komputer</h3>

<div class="alert alert-success">

<p><b>Contoh:</b> Membuat dokumen menggunakan Microsoft Word.</p>

<p>
1️⃣ Klik ikon <b>Microsoft Word</b>.<br><br>

2️⃣ Ketik dokumen menggunakan <b>keyboard</b>.<br><br>

3️⃣ Klik tombol <b>Save</b> menggunakan <b>mouse</b>.<br><br>

4️⃣ Dokumen berhasil disimpan di komputer.
</p>

</div>

<hr>

<h3><i class="bi bi-mouse"></i> Mouse</h3>

<div class="card">

<div class="card-body">

<p><b>Fungsi Mouse:</b></p>

<ul>

<li>🖱️ Menggerakkan pointer.</li>

<li>👆 Memilih menu atau ikon.</li>

<li>📂 Membuka aplikasi atau file.</li>

<li>✔ Melakukan klik dan double click.</li>

<li>↕ Menggulir halaman menggunakan scroll wheel.</li>

</ul>

</div>

</div>

<hr>

<h3><i class="bi bi-keyboard"></i> Keyboard</h3>

<div class="card">

<div class="card-body">

<p><b>Fungsi Keyboard:</b></p>

<ul>

<li>⌨️ Mengetik huruf.</li>

<li>🔢 Memasukkan angka.</li>

<li>😊 Mengetik simbol.</li>

<li>⚡ Menjalankan shortcut, misalnya <b>Ctrl + C</b> dan <b>Ctrl + V</b>.</li>

</ul>

</div>

</div>

<hr>

<h3><i class="bi bi-pencil-square"></i> Ayo Mencoba</h3>

<div class="alert alert-warning">

<b>Coba amati aplikasi Microsoft Word atau PowerPoint di komputer.</b>

<br><br>

Apakah kamu dapat menemukan:

<ul class="mt-2">

<li>📋 Menu</li>

<li>🖼️ Ikon</li>

<li>🔘 Tombol</li>

<li>🪟 Area kerja</li>

</ul>

Diskusikan hasil pengamatanmu bersama guru atau teman.

</div>

<div class="alert alert-primary mt-4">

<h5>🤖 Masih Bingung?</h5>

<p>

Kamu bisa bertanya kepada <b>EduBot</b> tentang materi ini.

</p>

<p>

Contoh pertanyaan:

</p>

<ul>

<li>Apa itu GUI?</li>

<li>Apa fungsi ikon?</li>

<li>Apa itu menu?</li>

<li>Apa itu antarmuka pengguna?</li>

</ul>

</div>


</div>

<div class="d-flex justify-content-center mt-4">

    <button
    class="btn btn-primary"
    onclick="selesaiMateri(); showMateri2()">

    Lanjut ke Materi Berikutnya
    <i class="bi bi-arrow-right"></i>

</button>

</div>

`;

}

function showFileFolder(type){

    const title = document.getElementById("fileFolderTitle");
    const body = document.getElementById("fileFolderBody");

    if(type === "file"){

        title.innerHTML = "📄 File";

        body.innerHTML = `
            <p>
                <strong>File</strong> adalah kumpulan data atau informasi
                yang disimpan di dalam komputer.
            </p>

            <p>
                File dapat berupa dokumen, gambar, video, musik,
                maupun presentasi.
            </p>

            <h6>Contoh File</h6>

            <ul>
                <li>📄 Tugas Informatika.docx</li>
                <li>🖼 Foto Kelas.jpg</li>
                <li>🎵 Lagu.mp3</li>
                <li>🎥 Video.mp4</li>
                <li>📊 Nilai.xlsx</li>
            </ul>

            <div class="alert alert-primary">
                File dapat dibuka menggunakan aplikasi yang sesuai.
            </div>
        `;

    }else{

        title.innerHTML = "📁 Folder";

        body.innerHTML = `
            <p>
                <strong>Folder</strong> adalah tempat untuk menyimpan
                dan mengelompokkan file agar lebih rapi.
            </p>

            <p>
                Dengan folder, kita dapat mencari file lebih mudah.
            </p>

            <h6>Contoh Folder</h6>

<pre>
📁 Tugas Sekolah
 ├── 📄 Informatika.docx
 ├── 📄 IPA.pdf
 ├── 🖼 Foto.jpg
 └── 🎵 Lagu.mp3
</pre>

            <div class="alert alert-success">
                Folder membantu menjaga file tetap teratur sehingga mudah ditemukan.
            </div>
        `;

    }

    new bootstrap.Modal(
        document.getElementById("fileFolderModal")
    ).show();

}

function showKelola(type){

    const title = document.getElementById("kelolaTitle");
    const body = document.getElementById("kelolaBody");

    const data = {

        folder: {
            judul: "📁 Membuat Folder",
            isi: `
                <p>
                    Folder digunakan untuk mengelompokkan file agar lebih rapi
                    dan mudah ditemukan.
                </p>

                <h6>Langkah Membuat Folder</h6>

                <ol>
                    <li>Buka lokasi tempat folder akan dibuat.</li>
                    <li>Klik kanan pada area kosong.</li>
                    <li>Pilih <strong>New → Folder</strong>.</li>
                    <li>Ketik nama folder.</li>
                    <li>Tekan <strong>Enter</strong>.</li>
                </ol>

                <div class="alert alert-warning">
                    💡 <strong>Tips:</strong>
                    Berikan nama folder yang sesuai dengan isinya,
                    misalnya <strong>Tugas Informatika</strong>.
                </div>
            `
        },

        rename: {
            judul: "✏️ Mengganti Nama",
            isi: `
                <p>
                    <strong>Rename</strong> digunakan untuk mengganti nama
                    file atau folder tanpa mengubah isi di dalamnya.
                </p>

                <h6>Langkah Mengganti Nama</h6>

                <ol>
                    <li>Pilih file atau folder.</li>
                    <li>Klik kanan.</li>
                    <li>Pilih <strong>Rename</strong>.</li>
                    <li>Ketik nama baru.</li>
                    <li>Tekan <strong>Enter</strong>.</li>
                </ol>

                <div class="alert alert-success">
                    💡 <strong>Tips:</strong>
                    Gunakan nama yang singkat dan mudah dikenali,
                    misalnya <strong>Tugas Informatika 1</strong>.
                </div>
            `
        },

        copy: {
            judul: "📋 Menyalin File atau Folder",
            isi: `
                <p>
                    <strong>Copy</strong> digunakan untuk membuat salinan
                    file atau folder tanpa menghilangkan file aslinya.
                </p>

                <h6>Langkah Menyalin</h6>

                <ol>
                    <li>Pilih file atau folder.</li>
                    <li>Tekan <strong>Ctrl + C</strong>.</li>
                    <li>Buka lokasi tujuan.</li>
                    <li>Tekan <strong>Ctrl + V</strong>.</li>
                </ol>

                <div class="alert alert-primary">
                    💡 <strong>Ingat:</strong>
                    Setelah disalin, file asli tetap berada di lokasi sebelumnya.
                </div>
            `
        },

        move: {
            judul: "📦 Memindahkan File atau Folder",
            isi: `
                <p>
                    Memindahkan berarti memindahkan file atau folder
                    dari satu lokasi ke lokasi lainnya.
                </p>

                <h6>Langkah Memindahkan</h6>

                <ol>
                    <li>Pilih file atau folder.</li>
                    <li>Tekan <strong>Ctrl + X</strong>.</li>
                    <li>Buka folder tujuan.</li>
                    <li>Tekan <strong>Ctrl + V</strong>.</li>
                </ol>

                <div class="alert alert-info">
                    💡 <strong>Ingat:</strong>
                    Berbeda dengan Copy, file yang dipindahkan tidak tetap
                    berada di lokasi sebelumnya.
                </div>
            `
        },

        delete: {
            judul: "🗑️ Menghapus File atau Folder",
            isi: `
                <p>
                    <strong>Delete</strong> digunakan untuk menghapus
                    file atau folder yang sudah tidak diperlukan.
                </p>

                <h6>Langkah Menghapus</h6>

                <ol>
                    <li>Pilih file atau folder.</li>
                    <li>Klik kanan.</li>
                    <li>Pilih <strong>Delete</strong>.</li>
                </ol>

                <p>
                    File yang dihapus biasanya akan dipindahkan ke
                    <strong>Recycle Bin</strong>.
                </p>

                <div class="alert alert-danger">
                    ⚠️ <strong>Perhatian:</strong>
                    Pastikan file atau folder sudah tidak diperlukan
                    sebelum menghapusnya.
                </div>
            `
        }

    };

    if(!data[type]) return;

    title.innerHTML = data[type].judul;
    body.innerHTML = data[type].isi;

    new bootstrap.Modal(
        document.getElementById("kelolaModal")
    ).show();
}

function showMateri2(){

    closeEduBot();

setActiveMenu("menu-materi");

    currentTopic = "filefolder";

    showSuggestions();

    pageContent.innerHTML = `

<button class="btn btn-secondary mb-4" onclick="showMateri()">
<i class="bi bi-arrow-left"></i> Kembali
</button>

<h1>File dan Folder</h1>

<div class="hero-card">

<!-- Pengertian File dan Folder -->
<section class="mt-4">

    <h4 class="fw-bold text-primary">
        <i class="bi bi-folder2-open"></i>
        Apa itu File dan Folder?
    </h4>

    <p class="mt-3">
        Saat menggunakan komputer, kita sering menyimpan tugas, gambar, video, atau musik.
        Semua data tersebut disebut <strong>file</strong>. Agar file tidak berantakan, kita
        menyimpannya di dalam <strong>folder</strong>.
    </p>

    <div class="alert alert-info mt-3">
        <i class="bi bi-lightbulb-fill"></i>
        <strong>Tahukah Kamu?</strong><br>
        File dapat diibaratkan seperti buku, sedangkan folder diibaratkan seperti tas atau rak
        yang digunakan untuk menyimpan buku agar tetap rapi.
    </div>

</section>

<div class="text-center my-4">
    <img 
    src="file-folder.png"
         class="img-fluid rounded shadow"
         style="max-width:750px; width:100%;"
         alt="Ilustrasi File dan Folder">

    <p class="text-muted mt-2">
        Gambar 2. Ilustrasi hubungan antara file, folder, dan subfolder.
    </p>
</div>

<!-- Mengenal File dan Folder -->
<section class="mt-5">

    <h4 class="fw-bold text-primary">
        <i class="bi bi-file-earmark-text"></i>
        Mengenal File dan Folder
    </h4>

    <p class="mt-3">
        File dan folder memiliki fungsi yang berbeda, tetapi keduanya saling berkaitan.
        Klik salah satu kartu di bawah ini untuk mempelajari penjelasannya.
    </p>

    <div class="row g-4 mt-2">

        <!-- File -->
        <div class="col-md-6">
            <div class="card h-100 shadow-sm border-0 komponen-card"
                 onclick="showFileFolder('file')">

                <div class="card-body text-center">

                    <i class="bi bi-file-earmark-text display-4 text-primary"></i>

                    <h5 class="mt-3 fw-bold">
                        File
                    </h5>

                    <p class="text-muted">
                        Berisi data atau informasi yang disimpan di komputer.
                    </p>

                    <span class="badge bg-primary">
                        Klik untuk mempelajari
                    </span>

                </div>
            </div>
        </div>

        <!-- Folder -->
        <div class="col-md-6">
            <div class="card h-100 shadow-sm border-0 komponen-card"
                 onclick="showFileFolder('folder')">

                <div class="card-body text-center">

                    <i class="bi bi-folder-fill display-4 text-warning"></i>

                    <h5 class="mt-3 fw-bold">
                        Folder
                    </h5>

                    <p class="text-muted">
                        Tempat untuk menyimpan dan mengelompokkan file.
                    </p>

                    <span class="badge bg-warning text-dark">
                        Klik untuk mempelajari
                    </span>

                </div>
            </div>
        </div>

    </div>

</section>

<hr class="my-5">

<section>

    <h4 class="fw-bold text-primary">
        <i class="bi bi-arrow-left-right"></i>
        Perbedaan File dan Folder
    </h4>

    <p class="mt-3">
        File dan folder memiliki fungsi yang berbeda.
        Perhatikan perbedaannya pada tabel berikut.
    </p>

    <div class="table-responsive mt-4">

        <table class="table table-bordered align-middle">

            <thead class="table-light">
                <tr>
                    <th>Perbedaan</th>
                    <th>📄 File</th>
                    <th>📁 Folder</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td><strong>Pengertian</strong></td>
                    <td>Data atau informasi yang disimpan di komputer.</td>
                    <td>Tempat untuk menyimpan dan mengelompokkan file.</td>
                </tr>

                <tr>
                    <td><strong>Isi</strong></td>
                    <td>Dapat berisi teks, gambar, audio, video, atau data lainnya.</td>
                    <td>Dapat berisi file maupun folder lain.</td>
                </tr>

                <tr>
                    <td><strong>Contoh</strong></td>
                    <td>Tugas.docx, Foto.jpg, Video.mp4</td>
                    <td>Tugas Sekolah, Foto, Dokumen</td>
                </tr>

                <tr>
                    <td><strong>Ekstensi</strong></td>
                    <td>Umumnya memiliki ekstensi seperti .docx, .jpg, atau .mp4.</td>
                    <td>Tidak memiliki ekstensi file.</td>
                </tr>

            </tbody>

        </table>

    </div>

    <div class="alert alert-success mt-3">
        <strong>💡 Mudah Diingat:</strong><br>
        📄 <strong>File</strong> adalah isi atau data yang disimpan.<br>
        📁 <strong>Folder</strong> adalah tempat untuk mengatur dan menyimpan file.
    </div>

</section>

<hr class="my-5">

<section>

    <h4 class="fw-bold text-primary">
        <i class="bi bi-file-earmark"></i>
        Jenis dan Ekstensi File
    </h4>

    <p class="mt-3">
        File memiliki jenis yang berbeda-beda. Jenis file dapat dikenali
        melalui <strong>ekstensi file</strong>, yaitu bagian yang terdapat
        di akhir nama file setelah tanda titik (.).
    </p>

    <div class="alert alert-info mt-3">
        <strong>💡 Contoh:</strong><br>
        Pada nama file <strong>Tugas Informatika.docx</strong>,
        bagian <strong>.docx</strong> merupakan ekstensi file.
    </div>

    <div class="row g-4 mt-3">

        <!-- Word -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-word display-4 text-primary"></i>
                    <h5 class="mt-3">Dokumen</h5>
                    <p class="text-muted">
                        File yang berisi teks atau dokumen.
                    </p>
                    <span class="badge bg-primary">.docx</span>
                </div>
            </div>
        </div>

        <!-- Excel -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-spreadsheet display-4 text-success"></i>
                    <h5 class="mt-3">Spreadsheet</h5>
                    <p class="text-muted">
                        File yang digunakan untuk mengolah angka dan data.
                    </p>
                    <span class="badge bg-success">.xlsx</span>
                </div>
            </div>
        </div>

        <!-- PowerPoint -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-slides display-4 text-danger"></i>
                    <h5 class="mt-3">Presentasi</h5>
                    <p class="text-muted">
                        File yang berisi slide untuk presentasi.
                    </p>
                    <span class="badge bg-danger">.pptx</span>
                </div>
            </div>
        </div>

        <!-- PDF -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-pdf display-4 text-danger"></i>
                    <h5 class="mt-3">PDF</h5>
                    <p class="text-muted">
                        File dokumen yang tampilannya relatif tetap saat dibuka.
                    </p>
                    <span class="badge bg-danger">.pdf</span>
                </div>
            </div>
        </div>

        <!-- Gambar -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-image display-4 text-warning"></i>
                    <h5 class="mt-3">Gambar</h5>
                    <p class="text-muted">
                        File yang menyimpan gambar atau foto.
                    </p>
                    <span class="badge bg-warning text-dark">.jpg / .png</span>
                </div>
            </div>
        </div>

        <!-- Video -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <div class="card-body">
                    <i class="bi bi-file-earmark-play display-4 text-info"></i>
                    <h5 class="mt-3">Video</h5>
                    <p class="text-muted">
                        File yang menyimpan gambar bergerak dan suara.
                    </p>
                    <span class="badge bg-info text-dark">.mp4</span>
                </div>
            </div>
        </div>

    </div>

</section>

<hr class="my-5">

<section>

    <h4 class="fw-bold text-primary">
        <i class="bi bi-diagram-3-fill"></i>
        Struktur Folder dan Subfolder
    </h4>

    <p class="mt-3">
        Sebuah folder dapat berisi <strong>file</strong> maupun
        <strong>folder lain</strong>. Folder yang berada di dalam
        folder utama disebut <strong>subfolder</strong>.
    </p>

    <div class="alert alert-info mt-3">
        <strong>💡 Contoh:</strong><br>
        Kamu dapat membuat folder <strong>Tugas Sekolah</strong>,
        kemudian membuat beberapa subfolder berdasarkan mata pelajaran
        agar tugas lebih rapi dan mudah ditemukan.
    </div>

    <div class="card border-0 shadow-sm mt-4">

        <div class="card-body">

            <h5 class="fw-bold mb-4">
                📁 Tugas Sekolah
            </h5>

            <div class="ms-4">

                <p>
                    ├── 📁 <strong>Informatika</strong>
                </p>

                <div class="ms-4">
                    <p>
                        └── 📄 Tugas Informatika.docx
                    </p>
                </div>

                <p>
                    ├── 📁 <strong>Matematika</strong>
                </p>

                <div class="ms-4">
                    <p>
                        └── 📊 Nilai Latihan.xlsx
                    </p>
                </div>

                <p>
                    └── 📁 <strong>IPA</strong>
                </p>

                <div class="ms-4">
                    <p>
                        └── 📕 Laporan Praktikum.pdf
                    </p>
                </div>

            </div>

        </div>

    </div>

    <div class="alert alert-success mt-4">

        <strong>📌 Mudah Diingat:</strong><br><br>

        📁 <strong>Folder utama</strong> → tempat pengelompokan utama.<br>
        📂 <strong>Subfolder</strong> → folder yang berada di dalam folder lain.<br>
        📄 <strong>File</strong> → data atau informasi yang disimpan.

    </div>

</section>

<hr class="my-5">

<section>

<h4 class="fw-bold text-primary">
<i class="bi bi-folder-check"></i>
Mengelola File dan Folder
</h4>

<p class="mt-3">
Selain mengetahui pengertian file dan folder,
kita juga perlu mengetahui cara mengelolanya.
Klik salah satu kartu berikut untuk mempelajari caranya.
</p>

<div class="row g-4 mt-3">

<!-- Membuat Folder -->

<div class="col-lg-4 col-md-6">

<div class="card h-100 shadow-sm komponen-card"
onclick="showKelola('folder')">

<div class="card-body text-center">

<i class="bi bi-folder-plus display-4 text-warning"></i>

<h5 class="mt-3">
Membuat Folder
</h5>

<p class="text-muted">
Membuat tempat penyimpanan baru.
</p>

<span class="badge bg-warning text-dark">
Klik untuk belajar
</span>

</div>

</div>

</div>

<!-- Rename -->

<div class="col-lg-4 col-md-6">

<div class="card h-100 shadow-sm komponen-card"
onclick="showKelola('rename')">

<div class="card-body text-center">

<i class="bi bi-pencil-square display-4 text-success"></i>

<h5 class="mt-3">
Mengganti Nama
</h5>

<p class="text-muted">
Mengubah nama file atau folder.
</p>

<span class="badge bg-success">
Klik untuk belajar
</span>

</div>

</div>

</div>

<!-- Copy -->

<div class="col-lg-4 col-md-6">

<div class="card h-100 shadow-sm komponen-card"
onclick="showKelola('copy')">

<div class="card-body text-center">

<i class="bi bi-files display-4 text-primary"></i>

<h5 class="mt-3">
Menyalin
</h5>

<p class="text-muted">
Membuat salinan file.
</p>

<span class="badge bg-primary">
Klik untuk belajar
</span>

</div>

</div>

</div>

<!-- Move -->

<div class="col-lg-4 col-md-6">

<div class="card h-100 shadow-sm komponen-card"
onclick="showKelola('move')">

<div class="card-body text-center">

<i class="bi bi-arrow-left-right display-4 text-info"></i>

<h5 class="mt-3">
Memindahkan
</h5>

<p class="text-muted">
Memindahkan file ke folder lain.
</p>

<span class="badge bg-info text-dark">
Klik untuk belajar
</span>

</div>

</div>

</div>

<!-- Delete -->

<div class="col-lg-4 col-md-6">

<div class="card h-100 shadow-sm komponen-card"
onclick="showKelola('delete')">

<div class="card-body text-center">

<i class="bi bi-trash display-4 text-danger"></i>

<h5 class="mt-3">
Menghapus
</h5>

<p class="text-muted">
Menghapus file atau folder.
</p>

<span class="badge bg-danger">
Klik untuk belajar
</span>

</div>

</div>

</div>

</div>

</section>

<hr class="my-5">

<section>

    <h4 class="fw-bold text-primary">
        <i class="bi bi-pencil-square"></i>
        Ayo Mencoba
    </h4>

    <div class="alert alert-warning mt-3">

        <h5>🧩 Tantangan Mengelola File</h5>

        <p>
            Coba lakukan kegiatan berikut pada komputer bersama arahan guru.
        </p>

        <ol>
            <li>
                Buat sebuah folder baru dengan nama
                <strong>Latihan EduSmart</strong>.
            </li>

            <li>
                Di dalam folder tersebut, buat subfolder bernama
                <strong>Informatika</strong>.
            </li>

            <li>
                Pilih sebuah file latihan yang diberikan guru,
                kemudian salin ke dalam folder
                <strong>Informatika</strong>.
            </li>

            <li>
                Ganti nama file tersebut menjadi
                <strong>Latihan Informatika</strong>.
            </li>

            <li>
                Amati ekstensi yang terdapat pada nama file tersebut.
            </li>
        </ol>

        <div class="bg-white rounded p-3 mt-3">
            <strong>💭 Coba Pikirkan:</strong><br><br>

            Apa keuntungan menyimpan file ke dalam folder yang
            tersusun dengan rapi?
        </div>

    </div>

</section>

<hr class="my-5">

<section>

    <div class="alert alert-primary">

        <h5>
            🤖 Masih Bingung?
        </h5>

        <p>
            Kamu bisa bertanya kepada <strong>EduBot</strong>
            tentang materi File dan Folder.
        </p>

        <p>
            Contoh pertanyaan:
        </p>

        <ul class="mb-0">
            <li>Apa itu file?</li>
            <li>Apa itu folder?</li>
            <li>Apa perbedaan file dan folder?</li>
            <li>Apa itu ekstensi file?</li>
            <li>Apa itu subfolder?</li>
            <li>Bagaimana cara membuat folder?</li>
        </ul>

    </div>

</section>


<div class="d-flex justify-content-center mt-4">

    <button
    class="btn btn-primary"
    onclick="selesaiMateri(); showMateri3()">

    Lanjut ke Materi Berikutnya
    <i class="bi bi-arrow-right"></i>

</button>

</div>

<!-- Modal File & Folder -->
<div class="modal fade" id="fileFolderModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="fileFolderTitle"></h5>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal">
                </button>
            </div>

            <div class="modal-body" id="fileFolderBody">
            </div>

        </div>
    </div>
</div>

</div>

<!-- Modal Mengelola File dan Folder -->

<div class="modal fade" id="kelolaModal" tabindex="-1">

    <div class="modal-dialog modal-lg modal-dialog-centered">

        <div class="modal-content">

            <div class="modal-header">

                <h5 class="modal-title" id="kelolaTitle">
                </h5>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal">
                </button>

            </div>

            <div class="modal-body" id="kelolaBody">
            </div>

        </div>

    </div>

</div>

`;

}


function showMateri3(){

    closeEduBot();

setActiveMenu("menu-materi");

    currentTopic = "office";

    showSuggestions();

    pageContent.innerHTML = `

<button class="btn btn-secondary mb-4" onclick="showMateri()">
<i class="bi bi-arrow-left"></i> Kembali
</button>

<h1>Aplikasi Perkantoran</h1>

<div class="hero-card">

<section class="mt-4">

    <h3 class="fw-bold text-primary">
        <i class="bi bi-laptop"></i>
        Mengenal Aplikasi Perkantoran
    </h3>

    <p class="mt-3">
        Aplikasi perkantoran adalah perangkat lunak yang digunakan
        untuk membantu berbagai pekerjaan, seperti membuat dan
        mengedit dokumen, mengolah angka dan data, serta membuat
        bahan presentasi.
    </p>

    <div class="alert alert-info mt-3">

        <strong>💡 Contoh:</strong><br><br>

        📝 <strong>Pengolah Kata</strong> → membuat dan mengedit dokumen.<br>
        📊 <strong>Pengolah Angka</strong> → mengolah angka dan data.<br>
        📽️ <strong>Aplikasi Presentasi</strong> → membuat bahan presentasi.

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-grid-3x3-gap"></i>
        Jenis Aplikasi Perkantoran
    </h3>

    <p class="mt-3">
        Aplikasi perkantoran memiliki fungsi yang berbeda-beda.
        Berikut beberapa aplikasi yang sering digunakan.
    </p>

    <div class="row g-4 mt-2">

        <!-- Microsoft Word -->
        <div class="col-lg-4 col-md-6">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-body text-center">

                    <i class="bi bi-file-earmark-word display-4 text-primary"></i>

                    <h5 class="fw-bold mt-3">
                        Microsoft Word
                    </h5>

                    <span class="badge bg-primary mb-3">
                        Pengolah Kata
                    </span>

                    <p class="text-muted">
                        Digunakan untuk membuat dan mengedit dokumen
                        seperti tugas sekolah, surat, dan laporan.
                    </p>

                </div>

            </div>

        </div>


        <!-- Microsoft Excel -->
        <div class="col-lg-4 col-md-6">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-body text-center">

                    <i class="bi bi-file-earmark-spreadsheet display-4 text-success"></i>

                    <h5 class="fw-bold mt-3">
                        Microsoft Excel
                    </h5>

                    <span class="badge bg-success mb-3">
                        Pengolah Angka
                    </span>

                    <p class="text-muted">
                        Digunakan untuk mengolah angka dan data,
                        membuat tabel, serta melakukan perhitungan.
                    </p>

                </div>

            </div>

        </div>


        <!-- Microsoft PowerPoint -->
        <div class="col-lg-4 col-md-6">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-body text-center">

                    <i class="bi bi-file-earmark-slides display-4 text-danger"></i>

                    <h5 class="fw-bold mt-3">
                        Microsoft PowerPoint
                    </h5>

                    <span class="badge bg-danger mb-3">
                        Presentasi
                    </span>

                    <p class="text-muted">
                        Digunakan untuk membuat bahan presentasi
                        dalam bentuk slide yang berisi teks,
                        gambar, tabel, maupun media lainnya.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-file-earmark-word"></i>
        Aplikasi Pengolah Kata
    </h3>

    <p class="mt-3">
        Aplikasi pengolah kata adalah perangkat lunak yang digunakan
        untuk membuat, mengedit, menyimpan, dan mengatur dokumen
        berbasis teks.
    </p>

    <p>
        Salah satu contoh aplikasi pengolah kata adalah
        <strong>Microsoft Word</strong>. Aplikasi ini dapat digunakan
        untuk membuat berbagai dokumen, seperti tugas sekolah,
        surat, laporan, dan dokumen lainnya.
    </p>

    <div class="alert alert-primary mt-3">

        <strong>📝 Contoh Penggunaan:</strong><br><br>

        Seorang siswa mendapat tugas membuat laporan kegiatan kelas.
        Siswa dapat menggunakan aplikasi pengolah kata untuk
        mengetik isi laporan, memperbaiki tulisan, mengatur tampilan
        teks, lalu menyimpan dokumen tersebut.

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-file-earmark-plus"></i>
        Membuat Dokumen Sederhana
    </h3>

    <p class="mt-3">
        Untuk membuat dokumen menggunakan aplikasi pengolah kata,
        kita dapat mengikuti beberapa langkah sederhana berikut.
    </p>

    <div class="row g-4 mt-3">

        <!-- Langkah 1 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 1
                    </span>

                    <h5 class="fw-bold">
                        💻 Buka Aplikasi
                    </h5>

                    <p class="text-muted mb-0">
                        Buka aplikasi pengolah kata, misalnya
                        Microsoft Word.
                    </p>

                </div>
            </div>
        </div>

        <!-- Langkah 2 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 2
                    </span>

                    <h5 class="fw-bold">
                        📄 Buat Dokumen Baru
                    </h5>

                    <p class="text-muted mb-0">
                        Pilih dokumen kosong atau
                        <strong>Blank Document</strong>
                        untuk mulai membuat dokumen.
                    </p>

                </div>
            </div>
        </div>

        <!-- Langkah 3 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 3
                    </span>

                    <h5 class="fw-bold">
                        ⌨️ Ketik Isi Dokumen
                    </h5>

                    <p class="text-muted mb-0">
                        Gunakan keyboard untuk mengetik
                        teks pada area kerja dokumen.
                    </p>

                </div>
            </div>
        </div>

        <!-- Langkah 4 -->
        <div class="col-lg-6 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 4
                    </span>

                    <h5 class="fw-bold">
                        ✏️ Edit dan Atur Teks
                    </h5>

                    <p class="text-muted mb-0">
                        Periksa tulisan dan atur tampilannya,
                        seperti jenis huruf, ukuran huruf,
                        ketebalan, atau perataan teks.
                    </p>

                </div>
            </div>
        </div>

        <!-- Langkah 5 -->
        <div class="col-lg-6 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 5
                    </span>

                    <h5 class="fw-bold">
                        💾 Simpan Dokumen
                    </h5>

                    <p class="text-muted mb-0">
                        Simpan dokumen dengan nama yang mudah
                        dikenali agar dapat dibuka kembali.
                    </p>

                </div>
            </div>
        </div>

    </div>

    <div class="alert alert-success mt-4">
        <strong>💡 Ingat:</strong><br>
        Simpan dokumen secara berkala saat sedang mengerjakan tugas
        agar perubahan yang telah dibuat tidak hilang.
    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-fonts"></i>
        Mengedit dan Memformat Teks
    </h3>

    <p class="mt-3">
        Setelah mengetik dokumen, teks dapat diedit dan diformat
        agar lebih rapi, jelas, dan mudah dibaca.
    </p>

    <p>
        Klik kartu berikut untuk mempelajari beberapa fungsi
        pemformatan teks yang sering digunakan.
    </p>

    <div class="row g-4 mt-3">

        <!-- Bold -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('bold')">

                <div class="card-body text-center">

                    <i class="bi bi-type-bold display-4 text-primary"></i>

                    <h5 class="fw-bold mt-3">Bold</h5>

                    <p class="text-muted">
                        Membuat teks menjadi tebal.
                    </p>

                    <span class="badge bg-primary">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

        <!-- Italic -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('italic')">

                <div class="card-body text-center">

                    <i class="bi bi-type-italic display-4 text-success"></i>

                    <h5 class="fw-bold mt-3">Italic</h5>

                    <p class="text-muted">
                        Membuat teks menjadi miring.
                    </p>

                    <span class="badge bg-success">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

        <!-- Underline -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('underline')">

                <div class="card-body text-center">

                    <i class="bi bi-type-underline display-4 text-danger"></i>

                    <h5 class="fw-bold mt-3">Underline</h5>

                    <p class="text-muted">
                        Memberikan garis bawah pada teks.
                    </p>

                    <span class="badge bg-danger">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

        <!-- Font -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('font')">

                <div class="card-body text-center">

                    <i class="bi bi-fonts display-4 text-info"></i>

                    <h5 class="fw-bold mt-3">Jenis Huruf</h5>

                    <p class="text-muted">
                        Mengubah bentuk atau jenis huruf.
                    </p>

                    <span class="badge bg-info text-dark">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

        <!-- Font Size -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('size')">

                <div class="card-body text-center">

                    <i class="bi bi-type-h1 display-4 text-warning"></i>

                    <h5 class="fw-bold mt-3">Ukuran Huruf</h5>

                    <p class="text-muted">
                        Memperbesar atau memperkecil teks.
                    </p>

                    <span class="badge bg-warning text-dark">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

        <!-- Alignment -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm komponen-card"
                 onclick="showFormatTeks('align')">

                <div class="card-body text-center">

                    <i class="bi bi-text-left display-4 text-secondary"></i>

                    <h5 class="fw-bold mt-3">Perataan Teks</h5>

                    <p class="text-muted">
                        Mengatur posisi teks pada dokumen.
                    </p>

                    <span class="badge bg-secondary">
                        Klik untuk belajar
                    </span>

                </div>
            </div>
        </div>

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-file-earmark-slides"></i>
        Membuat Presentasi Sederhana
    </h3>

    <p class="mt-3">
        Presentasi adalah cara menyampaikan informasi kepada orang lain
        dengan bantuan beberapa halaman yang disebut
        <strong>slide</strong>.
    </p>

    <p>
        Untuk membuat presentasi, kita dapat menggunakan aplikasi
        presentasi seperti <strong>Microsoft PowerPoint</strong>.
        Dalam sebuah slide, kita dapat memasukkan teks, gambar,
        tabel, bentuk, dan berbagai elemen lainnya untuk membantu
        menyampaikan informasi.
    </p>

    <div class="alert alert-primary mt-3">

        <strong>📽️ Contoh Penggunaan:</strong><br><br>

        Seorang siswa mendapat tugas mempresentasikan hasil kegiatan
        kelompok. Siswa dapat membuat beberapa slide yang berisi
        judul, poin-poin penting, dan gambar pendukung, kemudian
        menampilkannya di depan kelas.

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-easel"></i>
        Langkah Membuat Presentasi Sederhana
    </h3>

    <p class="mt-3">
        Untuk membuat presentasi sederhana menggunakan aplikasi
        presentasi, kita dapat mengikuti langkah-langkah berikut.
    </p>

    <div class="row g-4 mt-3">

        <!-- Langkah 1 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 1
                    </span>

                    <h5 class="fw-bold">
                        💻 Buka Aplikasi
                    </h5>

                    <p class="text-muted mb-0">
                        Buka aplikasi presentasi, misalnya
                        <strong>Microsoft PowerPoint</strong>.
                    </p>

                </div>
            </div>
        </div>


        <!-- Langkah 2 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 2
                    </span>

                    <h5 class="fw-bold">
                        📽️ Buat Presentasi Baru
                    </h5>

                    <p class="text-muted mb-0">
                        Pilih <strong>Blank Presentation</strong>
                        untuk membuat presentasi baru.
                    </p>

                </div>
            </div>
        </div>


        <!-- Langkah 3 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 3
                    </span>

                    <h5 class="fw-bold">
                        ✏️ Isi Slide
                    </h5>

                    <p class="text-muted mb-0">
                        Masukkan judul dan informasi penting
                        yang ingin disampaikan pada slide.
                    </p>

                </div>
            </div>
        </div>


        <!-- Langkah 4 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 4
                    </span>

                    <h5 class="fw-bold">
                        ➕ Tambahkan Slide
                    </h5>

                    <p class="text-muted mb-0">
                        Tambahkan slide baru jika informasi
                        yang ingin disampaikan terdiri dari
                        beberapa bagian.
                    </p>

                </div>
            </div>
        </div>


        <!-- Langkah 5 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 5
                    </span>

                    <h5 class="fw-bold">
                        🖼️ Tambahkan Gambar
                    </h5>

                    <p class="text-muted mb-0">
                        Tambahkan gambar yang sesuai untuk
                        membantu memperjelas informasi pada slide.
                    </p>

                </div>
            </div>
        </div>


        <!-- Langkah 6 -->
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-primary mb-3">
                        Langkah 6
                    </span>

                    <h5 class="fw-bold">
                        💾 Simpan Presentasi
                    </h5>

                    <p class="text-muted mb-0">
                        Simpan presentasi dengan nama yang mudah
                        dikenali agar dapat dibuka kembali.
                    </p>

                </div>
            </div>
        </div>

    </div>


    <div class="alert alert-success mt-4">

        <strong>💡 Tips Presentasi:</strong><br><br>

        Gunakan teks yang singkat dan mudah dibaca.
        Tambahkan gambar yang sesuai dengan materi dan hindari
        memasukkan terlalu banyak tulisan dalam satu slide.

    </div>

</section>

<hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-layout-text-window"></i>
        Contoh Susunan Presentasi Sederhana
    </h3>

    <p class="mt-3">
        Presentasi yang sederhana dapat terdiri dari beberapa slide.
        Setiap slide sebaiknya memiliki tujuan dan informasi yang jelas.
        Perhatikan contoh susunan berikut.
    </p>

    <div class="row g-4 mt-3">

        <!-- Slide 1 -->
        <div class="col-md-4">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-header bg-primary text-white text-center">
                    Slide 1
                </div>

                <div class="card-body text-center">

                    <i class="bi bi-card-heading display-4 text-primary"></i>

                    <h5 class="fw-bold mt-3">
                        Slide Judul
                    </h5>

                    <p class="text-muted">
                        Berisi judul presentasi dan identitas penyaji.
                    </p>

                    <div class="border rounded p-3 bg-light">

                        <strong>Perangkat Lunak Produktivitas</strong>

                        <hr>

                        <small>
                            Oleh: Kelompok 1
                        </small>

                    </div>

                </div>

            </div>

        </div>


        <!-- Slide 2 -->
        <div class="col-md-4">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-header bg-primary text-white text-center">
                    Slide 2
                </div>

                <div class="card-body text-center">

                    <i class="bi bi-card-text display-4 text-success"></i>

                    <h5 class="fw-bold mt-3">
                        Slide Isi
                    </h5>

                    <p class="text-muted">
                        Berisi informasi utama yang ingin disampaikan.
                    </p>

                    <div class="border rounded p-3 bg-light text-start">

                        <strong>Aplikasi Perkantoran</strong>

                        <hr>

                        • Pengolah kata<br>
                        • Pengolah angka<br>
                        • Aplikasi presentasi

                    </div>

                </div>

            </div>

        </div>


        <!-- Slide 3 -->
        <div class="col-md-4">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-header bg-primary text-white text-center">
                    Slide 3
                </div>

                <div class="card-body text-center">

                    <i class="bi bi-check-circle display-4 text-warning"></i>

                    <h5 class="fw-bold mt-3">
                        Slide Penutup
                    </h5>

                    <p class="text-muted">
                        Berisi kesimpulan atau kalimat penutup presentasi.
                    </p>

                    <div class="border rounded p-3 bg-light">

                        <strong>Kesimpulan</strong>

                        <hr>

                        Aplikasi perkantoran membantu
                        menyelesaikan berbagai pekerjaan.

                        <br><br>

                        <strong>Terima Kasih</strong>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="alert alert-info mt-4">

        <strong>📌 Ingat:</strong><br><br>

        Tidak semua presentasi harus terdiri dari tiga slide.
        Jumlah slide dapat disesuaikan dengan informasi yang ingin
        disampaikan. Yang terpenting, susun informasi secara runtut
        dan mudah dipahami.

    </div>

</section>

<!-- Ilustrasi Presentasi Sederhana -->

<div class="text-center my-5">

    <img
        src="presentasi-sederhana.png.png"
        class="img-fluid rounded shadow"
        style="max-width:900px; width:100%;"
        alt="Contoh Presentasi Sederhana">

    <p class="text-muted mt-3">
        Gambar 3. Contoh susunan presentasi sederhana.
    </p>

    <hr class="my-5">

<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-pencil-square"></i>
        Ayo Mencoba
    </h3>

    <p class="mt-3">
        Sekarang saatnya mempraktikkan apa yang telah kamu pelajari
        tentang aplikasi pengolah kata dan aplikasi presentasi.
    </p>


    <!-- Tantangan 1 -->
    <div class="alert alert-warning mt-4">

        <h5 class="fw-bold">
            📝 Tantangan 1 — Membuat Dokumen Sederhana
        </h5>

        <p>
            Gunakan aplikasi pengolah kata pada komputer,
            kemudian lakukan kegiatan berikut.
        </p>

        <ol class="text-start mx-auto" style="max-width: 850px; line-height: 1.8;">
            <li>
                Buka aplikasi pengolah kata, misalnya
                <strong>Microsoft Word</strong>.
            </li>

            <li>
                Buat dokumen baru menggunakan
                <strong>Blank Document</strong>.
            </li>

            <li>
                Ketik judul:
                <strong>Pengalaman Belajar Informatika</strong>.
            </li>

            <li>
                Tuliskan satu paragraf singkat tentang
                pengalamanmu belajar Informatika.
            </li>

            <li>
                Buat judul menjadi <strong>Bold</strong>
                dan atur ukurannya agar lebih besar daripada isi.
            </li>

            <li>
                Simpan dokumen dengan nama
                <strong>Latihan Pengolah Kata.docx</strong>.
            </li>
        </ol>

        <div class="bg-white rounded p-3 mt-3">

            <strong>💭 Coba Pikirkan:</strong>

            <p class="mb-0 mt-2">
                Mengapa judul dokumen biasanya dibuat lebih
                menonjol daripada teks lainnya?
            </p>

        </div>

    </div>


    <!-- Tantangan 2 -->
    <div class="alert alert-info mt-4">

        <h5 class="fw-bold">
            📽️ Tantangan 2 — Membuat Presentasi Sederhana
        </h5>

        <p>
            Selanjutnya, gunakan aplikasi presentasi pada komputer
            dan lakukan kegiatan berikut.
        </p>

        <ol class="text-start mx-auto" style="max-width: 850px; line-height: 1.8;">
            <li>
                Buka aplikasi presentasi, misalnya
                <strong>Microsoft PowerPoint</strong>.
            </li>

            <li>
                Buat presentasi baru menggunakan
                <strong>Blank Presentation</strong>.
            </li>

            <li>
                Buat <strong>Slide 1</strong> sebagai slide judul
                dengan tema <strong>Hobi Saya</strong>.
            </li>

            <li>
                Buat <strong>Slide 2</strong> yang berisi
                beberapa informasi singkat tentang hobimu.
            </li>

            <li>
                Tambahkan satu gambar yang sesuai dengan
                isi presentasi.
            </li>

            <li>
                Buat <strong>Slide 3</strong> sebagai
                slide penutup.
            </li>

            <li>
                Simpan presentasi dengan nama
                <strong>Presentasi Hobi Saya.pptx</strong>.
            </li>
        </ol>

        <div class="bg-white rounded p-3 mt-3">

            <strong>💭 Coba Pikirkan:</strong>

            <p class="mb-0 mt-2">
                Mengapa sebaiknya kita tidak memasukkan terlalu
                banyak tulisan dalam satu slide?
            </p>

        </div>

    </div>


    <!-- Pesan -->
    <div class="alert alert-success mt-4">

        <strong>🎯 Tujuan Kegiatan:</strong><br><br>

        Setelah menyelesaikan kedua tantangan, kamu diharapkan
        dapat membuat dokumen sederhana menggunakan aplikasi
        pengolah kata dan membuat presentasi sederhana menggunakan
        aplikasi presentasi.

    </div>

</section>

</div>

<hr class="my-5">

<div class="alert alert-primary mt-4">

    <h5 class="fw-bold">
        🤖 Masih Bingung?
    </h5>

    <p>
        Kamu bisa bertanya kepada <strong>EduBot</strong>
        tentang Aplikasi Perkantoran, Pengolah Kata,
        dan Presentasi.
    </p>

    <p class="mb-2">
        <strong>Contoh pertanyaan:</strong>
    </p>

    <ul class="mb-0">
        <li>Apa itu aplikasi perkantoran?</li>
        <li>Apa fungsi aplikasi pengolah kata?</li>
        <li>Apa itu Microsoft Word?</li>
        <li>Apa fungsi Bold?</li>
        <li>Apa fungsi Italic?</li>
        <li>Apa fungsi Underline?</li>
        <li>Bagaimana cara membuat dokumen sederhana?</li>
        <li>Apa itu aplikasi presentasi?</li>
        <li>Apa itu slide?</li>
        <li>Bagaimana cara membuat presentasi sederhana?</li>
        <li>Bagaimana cara menambahkan gambar ke slide?</li>
        <li>Mengapa slide tidak boleh terlalu banyak tulisan?</li>
    </ul>

</div>

<div class="d-flex justify-content-center mt-4">

   <button
    class="btn btn-primary"
    onclick="selesaiMateri(); showMateri4()">

    Lanjut ke Materi Berikutnya
    <i class="bi bi-arrow-right"></i>

</button>

</div>

</div>

<!-- Modal Format Teks -->

<div class="modal fade" id="formatTeksModal" tabindex="-1">

    <div class="modal-dialog modal-lg modal-dialog-centered">

        <div class="modal-content">

            <div class="modal-header">

                <h5 class="modal-title" id="formatTeksTitle"></h5>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal">
                </button>

            </div>

            <div class="modal-body" id="formatTeksBody">
            </div>

            <div class="modal-footer">

                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal">
                    Tutup
                </button>

            </div>

        </div>

    </div>

</div>

`;

}

function showMateri4(){

    closeEduBot();

setActiveMenu("menu-materi");

    currentTopic = "email";

    showSuggestions();

    pageContent.innerHTML = `

<button class="btn btn-secondary mb-4" onclick="showMateri()">
    <i class="bi bi-arrow-left"></i> Kembali
</button>

<h1>Surel</h1>

<div class="hero-card">

    <!-- Mengenal Surel -->
    <section>

    <hr class="my-5">

    </section>

        <h3 class="fw-bold text-primary">
            <i class="bi bi-envelope"></i>
            Mengenal Surel
        </h3>

        <p class="mt-3">
            Pernahkah kamu mengirim surat kepada seseorang?
            Selain menggunakan kertas, surat juga dapat dikirim
            secara elektronik melalui internet.
        </p>

        <p>
            Surat yang dikirim secara elektronik disebut
            <strong>surel</strong> atau <strong>surat elektronik</strong>.
            Dalam bahasa Inggris, surel dikenal dengan istilah
            <strong>email (electronic mail)</strong>.
        </p>

        <div class="alert alert-info mt-4">

            <strong>📧 Apa itu Surel?</strong><br><br>

            Surel adalah layanan komunikasi yang digunakan untuk
            <strong>mengirim dan menerima pesan secara elektronik
            melalui internet</strong>.

        </div>

        <h5 class="fw-bold mt-4">
            🎯 Untuk Apa Surel Digunakan?
        </h5>

        <p>
            Surel dapat digunakan untuk berbagai keperluan, misalnya:
        </p>

        <ul>
            <li>Mengirim pesan kepada guru atau teman.</li>
            <li>Mengirim tugas sekolah.</li>
            <li>Mengirim dokumen atau gambar.</li>
            <li>Menerima informasi atau pemberitahuan.</li>
            <li>Membalas pesan yang diterima.</li>
        </ul>

        <div class="alert alert-success mt-4">

            <strong>💡 Contoh dalam kehidupan sehari-hari:</strong><br><br>

            Seorang siswa tidak dapat mengikuti pembelajaran karena
            sedang sakit. Siswa tersebut dapat menggunakan surel
            untuk mengirimkan <strong>surat izin kepada guru atau
            wali kelas</strong>.

        </div>

    </section>

    <hr class="my-5">

<!-- Akun dan Alamat Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-person-circle"></i>
        Mengenal Akun dan Alamat Surel
    </h3>

    <p class="mt-3">
        Agar dapat mengirim dan menerima surel, kita memerlukan
        <strong>akun surel</strong>. Akun surel merupakan identitas
        yang digunakan seseorang untuk menggunakan layanan surel.
    </p>

    <div class="alert alert-info mt-3">

        <strong>📧 Apa itu Alamat Surel?</strong><br><br>

        Alamat surel adalah alamat yang digunakan untuk
        <strong>mengirim dan menerima pesan melalui surel</strong>.

        Setiap akun memiliki alamat surel yang digunakan sebagai
        identitas penggunanya.

    </div>


    <h5 class="fw-bold mt-4">
        🔍 Mengenal Bagian Alamat Surel
    </h5>

    <p>
        Perhatikan contoh alamat surel berikut:
    </p>

    <div class="text-center my-4">

        <div class="border rounded p-4 bg-light d-inline-block">

            <span class="fs-4 fw-bold text-primary">
                siswa7
            </span>

            <span class="fs-4 fw-bold">
                @
            </span>

            <span class="fs-4 fw-bold text-success">
                gmail.com
            </span>

        </div>

    </div>

    <div class="row g-3">

        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <h5 class="fw-bold text-primary">
                        👤 siswa7
                    </h5>

                    <p class="mb-0">
                        Disebut <strong>nama pengguna</strong>
                        (username). Bagian ini digunakan untuk
                        mengenali pemilik akun.
                    </p>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <h5 class="fw-bold text-success">
                        🌐 gmail.com
                    </h5>

                    <p class="mb-0">
                        Disebut <strong>domain</strong>.
                        Bagian ini menunjukkan layanan surel
                        yang digunakan.
                    </p>

                </div>

            </div>

        </div>

    </div>

    <div class="alert alert-warning mt-4">

        <strong>📌 Ingat:</strong><br>

        Alamat surel harus ditulis dengan benar.
        Kesalahan satu huruf saja dapat menyebabkan pesan
        tidak sampai kepada penerima yang dituju.

    </div>

</section>

<hr class="my-5">

<!-- Membuat Akun Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-person-plus"></i>
        Membuat Akun Surel
    </h3>

    <p class="mt-3">
        Sebelum dapat mengirim dan menerima surel, kita perlu memiliki
        <strong>akun surel</strong>. Akun dapat dibuat melalui layanan
        surel yang tersedia di internet.
    </p>

    <div class="alert alert-info mt-3">
        <strong>💡 Sebelum Membuat Akun</strong><br><br>
        Siapkan nama pengguna yang mudah dikenali dan buat
        <strong>kata sandi yang kuat</strong> untuk melindungi akun.
    </div>

    <h5 class="fw-bold mt-4">
        📝 Langkah-Langkah Membuat Akun Surel
    </h5>

    <div class="row g-4 mt-2">

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 1</span>
                    <h5 class="fw-bold">🌐 Buka Layanan Surel</h5>
                    <p class="mb-0">
                        Buka layanan surel melalui peramban pada komputer
                        yang digunakan.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 2</span>
                    <h5 class="fw-bold">👤 Pilih Buat Akun</h5>
                    <p class="mb-0">
                        Pilih menu untuk membuat atau mendaftarkan
                        akun baru.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 3</span>
                    <h5 class="fw-bold">✍️ Isi Data yang Diperlukan</h5>
                    <p class="mb-0">
                        Isi informasi yang diminta dengan benar sesuai
                        petunjuk pada layanan surel.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 4</span>
                    <h5 class="fw-bold">📧 Tentukan Alamat Surel</h5>
                    <p class="mb-0">
                        Pilih nama pengguna yang akan menjadi bagian
                        dari alamat surelmu.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 5</span>
                    <h5 class="fw-bold">🔐 Buat Kata Sandi</h5>
                    <p class="mb-0">
                        Buat kata sandi yang kuat dan mudah kamu ingat,
                        tetapi sulit ditebak oleh orang lain.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">Langkah 6</span>
                    <h5 class="fw-bold">✅ Selesaikan Pendaftaran</h5>
                    <p class="mb-0">
                        Ikuti petunjuk yang diberikan hingga proses
                        pembuatan akun selesai.
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div class="alert alert-warning mt-4">

        <strong>🔐 Jaga Keamanan Akunmu</strong><br><br>

        • Jangan memberitahukan kata sandi kepada teman atau orang lain.<br>
        • Hindari menggunakan kata sandi yang mudah ditebak.<br>
        • Jangan menuliskan kata sandi di tempat yang mudah dilihat orang lain.<br>
        • Jika menggunakan komputer bersama, jangan lupa keluar
        (<strong>logout</strong>) setelah selesai.

    </div>

    <div class="alert alert-success mt-3">
        <strong>👩‍🏫 Ingat:</strong><br><br>
        Saat membuat akun surel di sekolah, ikuti petunjuk dan
        bimbingan guru.
    </div>

</section>

<hr class="my-5">

<!-- Mengenal Bagian-Bagian Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-envelope-paper"></i>
        Mengenal Bagian-Bagian Surel
    </h3>

    <p class="mt-3">
        Saat membuat surel, terdapat beberapa bagian yang perlu
        diperhatikan agar pesan dapat dikirim kepada orang yang tepat
        dan mudah dipahami.
    </p>

    <div class="alert alert-info mt-3">

        <strong>📨 Contoh:</strong><br><br>

        Kamu ingin mengirim surel kepada wali kelas untuk
        memberitahukan bahwa kamu tidak dapat mengikuti pembelajaran
        karena sedang sakit.

    </div>

    <div class="row g-4 mt-2">

        <!-- Penerima -->
        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <div class="fs-2 text-primary mb-2">
                        <i class="bi bi-person"></i>
                    </div>

                    <h5 class="fw-bold">
                        Penerima (To)
                    </h5>

                    <p>
                        Berisi alamat surel orang yang akan menerima
                        pesan.
                    </p>

                    <div class="bg-light rounded p-2">
                        <strong>Contoh:</strong><br>
                        walikelas@sekolah.sch.id
                    </div>

                </div>

            </div>

        </div>


        <!-- Subjek -->
        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <div class="fs-2 text-warning mb-2">
                        <i class="bi bi-tag"></i>
                    </div>

                    <h5 class="fw-bold">
                        Subjek (Subject)
                    </h5>

                    <p>
                        Berisi judul singkat yang menggambarkan
                        isi atau tujuan surel.
                    </p>

                    <div class="bg-light rounded p-2">
                        <strong>Contoh:</strong><br>
                        Izin Tidak Mengikuti Pembelajaran
                    </div>

                </div>

            </div>

        </div>


        <!-- Isi Pesan -->
        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <div class="fs-2 text-success mb-2">
                        <i class="bi bi-chat-left-text"></i>
                    </div>

                    <h5 class="fw-bold">
                        Isi Pesan
                    </h5>

                    <p>
                        Bagian untuk menuliskan informasi yang ingin
                        disampaikan kepada penerima.
                    </p>

                    <div class="bg-light rounded p-2">
                        Gunakan bahasa yang
                        <strong>sopan, jelas, dan mudah dipahami</strong>.
                    </div>

                </div>

            </div>

        </div>


        <!-- Lampiran -->
        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <div class="fs-2 text-danger mb-2">
                        <i class="bi bi-paperclip"></i>
                    </div>

                    <h5 class="fw-bold">
                        Lampiran (Attachment)
                    </h5>

                    <p>
                        Digunakan jika kita ingin menyertakan file
                        bersama surel.
                    </p>

                    <div class="bg-light rounded p-2">
                        <strong>Contoh:</strong><br>
                        dokumen, gambar, atau file tugas.
                    </div>

                </div>

            </div>

        </div>


        <!-- Kirim -->
        <div class="col-md-12">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <div class="fs-2 text-primary mb-2">
                        <i class="bi bi-send"></i>
                    </div>

                    <h5 class="fw-bold">
                        Kirim (Send)
                    </h5>

                    <p class="mb-0">
                        Digunakan untuk mengirim surel setelah alamat
                        penerima, subjek, dan isi pesan sudah diperiksa.
                    </p>

                </div>

            </div>

        </div>

    </div>


    <div class="alert alert-warning mt-4">

        <strong>💡 Sebelum Menekan Kirim</strong><br><br>

        Periksa kembali <strong>alamat penerima, subjek, isi pesan,
        dan lampiran</strong>. Pastikan semuanya sudah benar sebelum
        surel dikirim.

    </div>

</section>

<hr class="my-5">

<!-- Membuat dan Mengirim Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-send"></i>
        Membuat dan Mengirim Surel
    </h3>

    <p class="mt-3">
        Setelah mengenal bagian-bagian surel, sekarang kita akan
        mempelajari cara membuat dan mengirim surel dengan
        <strong>bahasa yang sopan, jelas, dan sesuai</strong>.
    </p>

    <div class="alert alert-info mt-3">

        <strong>📌 Contoh Situasi:</strong><br><br>

        Kamu tidak dapat mengikuti pembelajaran karena sedang sakit.
        Kamu ingin memberitahukan ketidakhadiran tersebut kepada
        wali kelas melalui surel.

    </div>


    <!-- Langkah Mengirim Surel -->

    <h5 class="fw-bold mt-4">
        📨 Langkah-Langkah Mengirim Surel
    </h5>

    <div class="row g-4 mt-2">

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 1
                    </span>

                    <h5 class="fw-bold">
                        🌐 Buka Layanan Surel
                    </h5>

                    <p class="mb-0">
                        Masuk ke akun surel yang akan digunakan.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 2
                    </span>

                    <h5 class="fw-bold">
                        ✏️ Buat Pesan Baru
                    </h5>

                    <p class="mb-0">
                        Pilih menu untuk membuat atau menulis
                        surel baru.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 3
                    </span>

                    <h5 class="fw-bold">
                        👤 Masukkan Penerima
                    </h5>

                    <p class="mb-0">
                        Tuliskan alamat surel wali kelas pada
                        bagian <strong>Penerima (To)</strong>.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 4
                    </span>

                    <h5 class="fw-bold">
                        🏷️ Tuliskan Subjek
                    </h5>

                    <p class="mb-0">
                        Tuliskan subjek yang singkat dan sesuai
                        dengan tujuan pesan.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 5
                    </span>

                    <h5 class="fw-bold">
                        📝 Tuliskan Isi Surel
                    </h5>

                    <p class="mb-0">
                        Tuliskan pesan dengan bahasa yang
                        <strong>sopan, jelas, dan mudah dipahami</strong>.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 6
                    </span>

                    <h5 class="fw-bold">
                        🔍 Periksa dan Kirim
                    </h5>

                    <p class="mb-0">
                        Periksa kembali penerima, subjek, dan isi pesan.
                        Jika sudah benar, pilih <strong>Kirim (Send)</strong>.
                    </p>

                </div>
            </div>
        </div>

    </div>

    </section>

    <hr class="my-5">

    <!-- Bahasa yang Sesuai -->

    <h5 class="fw-bold mt-5">
        💬 Gunakan Bahasa yang Sesuai
    </h5>

    <p>
        Saat mengirim surel kepada guru atau wali kelas,
        gunakan bahasa yang sopan dan susun pesan secara runtut.
    </p>

    <div class="row g-3 mt-2">

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center">
                <div class="card-body">
                    <div class="fs-2">👋</div>
                    <h5 class="fw-bold mt-2">Pembuka</h5>
                    <p class="mb-0">
                        Awali pesan dengan salam dan sapaan
                        yang sopan.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center">
                <div class="card-body">
                    <div class="fs-2">📝</div>
                    <h5 class="fw-bold mt-2">Isi</h5>
                    <p class="mb-0">
                        Sampaikan identitas, tujuan, dan informasi
                        yang diperlukan dengan jelas.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm text-center">
                <div class="card-body">
                    <div class="fs-2">🙏</div>
                    <h5 class="fw-bold mt-2">Penutup</h5>
                    <p class="mb-0">
                        Akhiri dengan ucapan terima kasih,
                        salam penutup, dan nama pengirim.
                    </p>
                </div>
            </div>
        </div>

    </div>

</section>

    <hr class="my-5">


    <!-- Contoh Surel -->

    <h5 class="fw-bold mt-5">
        📧 Contoh Surel Izin
    </h5>

    <div class="card border-0 shadow-sm mt-3">

        <div class="card-body p-4">

            <p>
                <strong>Kepada:</strong>
                walikelas@sekolah.sch.id
            </p>

            <p>
                <strong>Subjek:</strong>
                Izin Tidak Mengikuti Pembelajaran
            </p>

            <hr>

            <p>
                Yth. Bapak/Ibu Wali Kelas,
            </p>

            <p>
                Dengan hormat,
            </p>

            <p>
                Saya Andi, siswa kelas VII, ingin memberitahukan
                bahwa hari ini saya tidak dapat mengikuti
                pembelajaran karena sedang sakit.
            </p>

            <p>
                Demikian pemberitahuan ini saya sampaikan.
                Terima kasih atas pengertiannya.
            </p>

            <p class="mb-0">
                Hormat saya,<br>
                <strong>Andi</strong>
            </p>

        </div>

    </div>


    <div class="alert alert-warning mt-4">

        <strong>💡 Ingat Sebelum Mengirim:</strong><br><br>

        Hindari menggunakan bahasa yang terlalu singkat atau tidak sopan.
        Bacalah kembali surel sebelum menekan tombol
        <strong>Kirim</strong>.

    </div>

</section>

<hr class="my-5">

<!-- Membalas Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-reply"></i>
        Membalas Surel
    </h3>

    <p class="mt-3">
        Selain mengirim surel, kita juga dapat
        <strong>membalas surel yang diterima</strong>.
        Balasan sebaiknya sesuai dengan isi pesan dan tetap
        menggunakan bahasa yang sopan dan jelas.
    </p>

    <div class="alert alert-info mt-3">

        <strong>📌 Contoh Situasi:</strong><br><br>

        Kamu menerima surel dari guru yang mengingatkan
        agar tugas Informatika dikumpulkan besok.
        Kamu ingin membalas untuk memberitahukan bahwa
        pesan tersebut sudah diterima.

    </div>


    <!-- Langkah Membalas Surel -->

    <h5 class="fw-bold mt-4">
        ↩️ Langkah-Langkah Membalas Surel
    </h5>

    <div class="row g-4 mt-2">

        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 1
                    </span>

                    <h5 class="fw-bold">
                        📥 Buka Surel
                    </h5>

                    <p class="mb-0">
                        Buka surel yang ingin dibalas dan
                        baca isi pesannya dengan teliti.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 2
                    </span>

                    <h5 class="fw-bold">
                        ↩️ Pilih Balas (Reply)
                    </h5>

                    <p class="mb-0">
                        Pilih tombol <strong>Balas (Reply)</strong>
                        pada surel yang diterima.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 3
                    </span>

                    <h5 class="fw-bold">
                        ✍️ Tulis Balasan
                    </h5>

                    <p class="mb-0">
                        Tulis jawaban yang sesuai dengan isi surel
                        menggunakan bahasa yang sopan dan jelas.
                    </p>

                </div>
            </div>
        </div>


        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <span class="badge bg-primary mb-2">
                        Langkah 4
                    </span>

                    <h5 class="fw-bold">
                        🔍 Periksa dan Kirim
                    </h5>

                    <p class="mb-0">
                        Baca kembali balasanmu. Jika sudah benar,
                        pilih tombol <strong>Kirim (Send)</strong>.
                    </p>

                </div>
            </div>
        </div>

    </div>


    <!-- Contoh Pesan Masuk -->

    <h5 class="fw-bold mt-5">
        📥 Contoh Surel yang Diterima
    </h5>

    <div class="card border-0 shadow-sm mt-3">

        <div class="card-body p-4">

            <p>
                <strong>Dari:</strong>
                guru@sekolah.sch.id
            </p>

            <p>
                <strong>Subjek:</strong>
                Pengumpulan Tugas Informatika
            </p>

            <hr>

            <p>
                Halo Andi,
            </p>

            <p>
                Jangan lupa untuk mengumpulkan tugas Informatika
                paling lambat besok.
            </p>

            <p class="mb-0">
                Terima kasih.<br>
                <strong>Guru Informatika</strong>
            </p>

        </div>

    </div>


    <!-- Contoh Balasan -->

    <h5 class="fw-bold mt-4">
        ↩️ Contoh Balasan yang Sesuai
    </h5>

    <div class="card border-0 shadow-sm mt-3">

        <div class="card-body p-4">

            <p>
                Yth. Bapak/Ibu Guru,
            </p>

            <p>
                Baik, Bapak/Ibu. Terima kasih atas informasinya.
                Saya akan mengumpulkan tugas Informatika sesuai
                dengan waktu yang telah ditentukan.
            </p>

            <p class="mb-0">
                Hormat saya,<br>
                <strong>Andi</strong>
            </p>

        </div>

    </div>


    <div class="alert alert-warning mt-4">

        <strong>💡 Saat Membalas Surel:</strong><br><br>

        • Baca pesan yang diterima sampai selesai.<br>
        • Pastikan balasan sesuai dengan isi pesan.<br>
        • Gunakan bahasa yang sopan dan mudah dipahami.<br>
        • Periksa kembali balasan sebelum dikirim.

    </div>

</section>

<hr class="my-5">

<!-- Keamanan Menggunakan Surel -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-shield-check"></i>
        Aman Menggunakan Surel
    </h3>

    <p class="mt-3">
        Saat menggunakan surel dan internet, kita perlu berhati-hati
        agar akun dan informasi pribadi tetap aman.
    </p>

    <div class="row g-4 mt-2">

        <!-- Password -->
        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <div class="fs-2 mb-2">🔐</div>

                    <h5 class="fw-bold">
                        Jaga Kata Sandi
                    </h5>

                    <p class="mb-0">
                        Jangan memberitahukan kata sandi akun surel
                        kepada teman atau orang lain.
                    </p>

                </div>
            </div>
        </div>


        <!-- Pengirim -->
        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <div class="fs-2 mb-2">👤</div>

                    <h5 class="fw-bold">
                        Periksa Pengirim
                    </h5>

                    <p class="mb-0">
                        Periksa siapa yang mengirim surel sebelum
                        membalas pesan atau mengikuti petunjuk di dalamnya.
                    </p>

                </div>
            </div>
        </div>


        <!-- Link dan Lampiran -->
        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <div class="fs-2 mb-2">⚠️</div>

                    <h5 class="fw-bold">
                        Hati-Hati dengan Tautan dan Lampiran
                    </h5>

                    <p class="mb-0">
                        Jangan membuka tautan atau lampiran yang
                        mencurigakan atau berasal dari pengirim
                        yang tidak dikenal.
                    </p>

                </div>
            </div>
        </div>


        <!-- Logout -->
        <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">

                    <div class="fs-2 mb-2">🚪</div>

                    <h5 class="fw-bold">
                        Keluar Setelah Selesai
                    </h5>

                    <p class="mb-0">
                        Jika menggunakan komputer bersama atau komputer
                        laboratorium sekolah, selalu
                        <strong>logout</strong> setelah selesai.
                    </p>

                </div>
            </div>
        </div>

    </div>


    <div class="alert alert-warning mt-4">

        <strong>🚨 Jika Menemukan Surel Mencurigakan</strong><br><br>

        Jangan terburu-buru membuka tautan, mengunduh lampiran,
        atau membalas pesan. Mintalah bantuan
        <strong>guru atau orang dewasa yang dipercaya</strong>
        jika kamu merasa ragu.

    </div>


    <div class="alert alert-info mt-3">

        <strong>👀 Jaga Kenyamanan Saat Menggunakan Komputer</strong><br><br>

        Gunakan komputer dengan posisi yang nyaman dan beristirahatlah
        sejenak setelah menggunakan layar dalam waktu tertentu
        agar mata tidak cepat lelah.

    </div>

</section>

<hr class="my-5">

<!-- Ayo Mencoba -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-pencil-square"></i>
        Ayo Mencoba
    </h3>

    <p class="mt-3">
        Sekarang saatnya mempraktikkan apa yang telah kamu pelajari
        tentang membuat, mengirim, dan membalas surel.
    </p>


    <!-- Tantangan 1 -->
    <div class="alert alert-warning mt-4">

        <h5 class="fw-bold">
            📝 Tantangan 1 — Menyusun Surat Izin
        </h5>

        <p>
            Sebelum menggunakan surel, buatlah terlebih dahulu
            surat izin secara tertulis.
        </p>

        <div class="bg-white rounded p-3 mt-3">

            <strong>📌 Situasi:</strong>

            <p class="mb-0 mt-2">
                Bayangkan kamu tidak dapat mengikuti pembelajaran
                karena sedang sakit. Buatlah surat izin yang ditujukan
                kepada wali kelas.
            </p>

        </div>

        <p class="mt-3 mb-2">
            <strong>Suratmu harus memuat:</strong>
        </p>

        <ol class="text-start"
            style="max-width: 850px; line-height: 1.8;">

            <li>Salam atau sapaan yang sopan.</li>

            <li>Identitas diri dan kelas.</li>

            <li>Tujuan mengirim surat.</li>

            <li>Alasan tidak dapat mengikuti pembelajaran.</li>

            <li>Ucapan terima kasih.</li>

            <li>Salam penutup dan nama pengirim.</li>

        </ol>

    </div>


    <!-- Tantangan 2 -->
    <div class="alert alert-info mt-4">

        <h5 class="fw-bold">
            💻 Tantangan 2 — Mengubah Surat Menjadi Surel
        </h5>

        <p>
            Setelah surat izin selesai dibuat, sekarang ubahlah
            surat tersebut menjadi <strong>surel</strong>
            menggunakan komputer.
        </p>

        <ol class="text-start"
            style="max-width: 850px; line-height: 1.8;">

            <li>
                Masuk ke akun surel yang digunakan.
            </li>

            <li>
                Pilih menu untuk membuat pesan baru.
            </li>

            <li>
                Masukkan alamat surel penerima sesuai
                arahan guru.
            </li>

            <li>
                Tuliskan subjek yang sesuai, misalnya
                <strong>Izin Tidak Mengikuti Pembelajaran</strong>.
            </li>

            <li>
                Ketik kembali surat izin yang sudah dibuat
                pada bagian isi pesan.
            </li>

            <li>
                Periksa kembali alamat penerima, subjek,
                dan isi pesan.
            </li>

            <li>
                Jika sudah benar, kirim surel sesuai
                arahan guru.
            </li>

        </ol>

        <div class="bg-white rounded p-3 mt-3">

            <strong>💭 Coba Pikirkan:</strong>

            <p class="mb-0 mt-2">
                Apa perbedaan yang kamu rasakan ketika membuat
                surat menggunakan kertas dan membuat surat
                menggunakan surel?
            </p>

        </div>

    </div>


    <!-- Tantangan 3 -->
    <div class="alert alert-success mt-4">

        <h5 class="fw-bold">
            ↩️ Tantangan 3 — Membalas Surel
        </h5>

        <p>
            Sekarang bayangkan kamu menerima surel berikut
            dari guru:
        </p>

        <div class="bg-white rounded p-3 mt-3">

            <p>
                <strong>Subjek:</strong>
                Pengumpulan Tugas Informatika
            </p>

            <hr>

            <p>
                Halo,
            </p>

            <p>
                Jangan lupa untuk mengumpulkan tugas Informatika
                paling lambat besok.
            </p>

            <p class="mb-0">
                Terima kasih.<br>
                <strong>Guru Informatika</strong>
            </p>

        </div>

        <p class="mt-3">
            Buatlah balasan yang menunjukkan bahwa kamu
            <strong>memahami pesan tersebut</strong>.
            Gunakan bahasa yang sopan dan jelas.
        </p>

        <div class="bg-white rounded p-3 mt-3">

            <strong>💭 Coba Pikirkan:</strong>

            <p class="mb-0 mt-2">
                Mengapa kita perlu membaca seluruh isi surel
                sebelum memberikan balasan?
            </p>

        </div>

    </div>


    <!-- Tujuan Kegiatan -->
<div class="alert alert-primary mt-4">

    <strong>🎯 Setelah Menyelesaikan Kegiatan Ini</strong><br><br>

    Kamu diharapkan mampu membuat surat sederhana,
    mengubahnya menjadi surel, mengirim surel dengan bahasa
    yang sesuai, serta membalas surel yang diterima
    dengan sopan dan jelas.

</div>

</section>

<hr class="my-5">


<!-- EduBot Materi 4 -->
<section>

    <div class="alert alert-primary mt-4">

        <h5 class="fw-bold">
            🤖 Masih Bingung?
        </h5>

        <p>
            Kamu bisa bertanya kepada <strong>EduBot</strong>
            tentang materi Surel.
        </p>

        <p class="mb-2">
            <strong>Contoh pertanyaan:</strong>
        </p>

        <ul class="mb-0">

            <li>Apa itu surel?</li>
            <li>Apa fungsi surel?</li>
            <li>Apa itu akun surel?</li>
            <li>Apa itu alamat surel?</li>
            <li>Apa itu username pada alamat surel?</li>
            <li>Apa itu domain pada alamat surel?</li>
            <li>Bagaimana cara membuat akun surel?</li>
            <li>Apa itu bagian To pada surel?</li>
            <li>Apa itu Subject pada surel?</li>
            <li>Apa fungsi lampiran pada surel?</li>
            <li>Bagaimana cara mengirim surel?</li>
            <li>Bagaimana cara menulis surel kepada guru?</li>
            <li>Bagaimana cara membalas surel?</li>
            <li>Bagaimana bahasa yang sesuai saat mengirim surel?</li>
            <li>Bagaimana cara menjaga keamanan akun surel?</li>

        </ul>

    </div>

</section>


</div>

</section>


<!-- EduBot Materi 4 -->

</div>


<div class="d-flex justify-content-center mt-4">

    <button
    class="btn btn-primary"
    onclick="selesaiMateri(); showMateri5()">

    Lanjut ke Materi Berikutnya
    <i class="bi bi-arrow-right"></i>

</button>

</div>


`;

}

function showMateri5(){

    closeEduBot();

setActiveMenu("menu-materi");

    currentTopic = "device_interaction";

    showSuggestions();

    pageContent.innerHTML = `

    <button class="btn btn-secondary mb-4" onclick="showMateri()">
<i class="bi bi-arrow-left"></i> Kembali
</button>


    <!-- Materi 5 -->
    <section>

        <h3 class="fw-bold text-primary">
            <i class="bi bi-diagram-3"></i>
            Interaksi Antarperangkat
        </h3>

        <p class="mt-3">
            Pernahkah kamu melihat beberapa perangkat bekerja
            bersama untuk melakukan suatu kegiatan?
            Misalnya, kamera CCTV yang digunakan untuk
            membantu melakukan pengawasan.
        </p>

        <p>
            Dalam kehidupan sehari-hari, kita dapat menemukan
            berbagai perangkat yang saling berinteraksi untuk
            membantu manusia menyelesaikan suatu pekerjaan.
        </p>

        <div class="alert alert-info mt-4">

            <strong>🎯 Tujuan Pembelajaran</strong><br><br>

            Setelah mempelajari materi ini, kamu diharapkan
            mampu memahami interaksi antarperangkat yang berbeda.

        </div>

            <hr class="my-5">

    <!-- Mengenal Interaksi Antarperangkat -->
    <section>

        <h3 class="fw-bold text-primary">
            <i class="bi bi-link-45deg"></i>
            Apa Itu Interaksi Antarperangkat?
        </h3>

        <p class="mt-3">
            <strong>Interaksi antarperangkat</strong> adalah keadaan
            ketika dua atau lebih perangkat saling berhubungan
            untuk melakukan suatu kegiatan atau berbagi sumber daya.
        </p>

        <p>
            Interaksi antarperangkat dapat dilakukan menggunakan
            teknologi <strong>kabel</strong> maupun
            <strong>nirkabel</strong>.
        </p>

        <div class="alert alert-info mt-4">

            <strong>💡 Contoh Sederhana</strong><br><br>

            Sebuah komputer dapat berinteraksi dengan perangkat
            lain untuk menerima, mengirim, atau menampilkan data.
            Dengan adanya interaksi tersebut, perangkat dapat
            bekerja sama sesuai dengan kebutuhan.

        </div>

        <div class="alert alert-warning mt-4">

            <strong>🤔 Coba Pikirkan</strong><br><br>

            Pernahkah kamu melihat dua perangkat bekerja bersama
            untuk melakukan suatu kegiatan? Menurutmu, apa yang
            terjadi jika perangkat tersebut tidak dapat
            berinteraksi?

        </div>

    </section>

    </section>

    <hr class="my-5">

<!-- Contoh Interaksi Antarperangkat -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-camera-video"></i>
        Contoh Interaksi Antarperangkat
    </h3>

    <p class="mt-3">
        Salah satu contoh interaksi antarperangkat yang dapat
        kita temui dalam kehidupan sehari-hari adalah
        <strong>CCTV</strong>.
    </p>

    <p>
        CCTV digunakan untuk membantu melakukan pengawasan.
        Dalam penggunaannya, kamera CCTV menangkap gambar
        dari suatu tempat, kemudian hasil tangkapan tersebut
        dapat digunakan untuk melakukan pemantauan.
    </p>

    <div class="alert alert-info mt-4">

        <strong>📷 Contoh Situasi</strong><br><br>

        Bayangkan sebuah sekolah memiliki kamera CCTV
        yang dipasang di beberapa tempat.
        Kamera tersebut digunakan untuk membantu
        memantau keadaan di lingkungan sekolah.

    </div>

    <h5 class="fw-bold mt-4">
        🔗 Perangkat yang Terlibat
    </h5>

    <div class="row g-4 mt-2">

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">

                    <div class="fs-1 mb-2">📷</div>

                    <h5 class="fw-bold">
                        Kamera CCTV
                    </h5>

                    <p class="mb-0">
                        Digunakan untuk menangkap gambar
                        dari lingkungan yang diamati.
                    </p>

                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">

                    <div class="fs-1 mb-2">💾</div>

                    <h5 class="fw-bold">
                        Penyimpanan
                    </h5>

                    <p class="mb-0">
                        Hasil tangkapan kamera dapat
                        disimpan untuk digunakan kembali.
                    </p>

                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">

                    <div class="fs-1 mb-2">🖥️</div>

                    <h5 class="fw-bold">
                        Perangkat Pemantau
                    </h5>

                    <p class="mb-0">
                        Digunakan untuk membantu melihat
                        hasil pemantauan CCTV.
                    </p>

                </div>
            </div>
        </div>

    </div>

    <div class="alert alert-warning mt-4">

        <strong>💡 Intinya:</strong><br><br>

        CCTV menunjukkan bahwa beberapa perangkat dapat
        digunakan bersama untuk membantu melakukan
        suatu kegiatan, yaitu pengawasan.

    </div>

</section>

<hr class="my-5">

<!-- Manfaat Interaksi Antarperangkat -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-camera-video-fill"></i>
        Mengapa CCTV Digunakan?
    </h3>

    <p class="mt-3">
        CCTV dapat membantu manusia melakukan pengawasan
        terhadap suatu tempat. Dengan adanya perangkat yang
        bekerja bersama, kegiatan pengawasan dapat dilakukan
        dengan lebih terbantu.
    </p>

    <div class="alert alert-info mt-4">

        <strong>📌 Contoh:</strong><br><br>

        Di lingkungan sekolah, CCTV dapat digunakan untuk
        membantu memantau keadaan di beberapa tempat.
        Hal ini dapat membantu guru atau petugas dalam
        melakukan pengawasan.

    </div>

    <h5 class="fw-bold mt-4">
        💡 Jika Tidak Menggunakan CCTV
    </h5>

    <p>
        Pengawasan tetap dapat dilakukan secara manual
        oleh seseorang. Namun, cara tersebut membutuhkan
        orang yang bertugas untuk melakukan pengawasan
        secara langsung.
    </p>

    <h5 class="fw-bold mt-4">
        🤔 Coba Bandingkan
    </h5>

    <div class="row g-4 mt-2">

        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <h5 class="fw-bold">
                        👤 Pengawasan Manual
                    </h5>

                    <p class="mb-0">
                        Pengawasan dilakukan langsung oleh
                        seseorang yang bertugas mengamati
                        keadaan di suatu tempat.
                    </p>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <h5 class="fw-bold">
                        📷 Menggunakan CCTV
                    </h5>

                    <p class="mb-0">
                        Perangkat CCTV digunakan untuk membantu
                        melakukan pemantauan terhadap suatu tempat.
                    </p>

                </div>

            </div>

        </div>

    </div>

    <div class="alert alert-warning mt-4">

        <strong>💭 Coba Pikirkan:</strong><br><br>

        Menurutmu, apa keuntungan menggunakan CCTV
        dibandingkan melakukan pengawasan secara manual?

    </div>

</section>

<hr class="my-5">

<!-- Ayo Berdiskusi -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-people"></i>
        Ayo Berdiskusi
    </h3>

    <p class="mt-3">
        Sekarang, diskusikan bersama teman kelompokmu
        tentang penggunaan CCTV dalam kehidupan sehari-hari.
    </p>

    <div class="alert alert-info mt-4">

        <strong>📷 Situasi:</strong><br><br>

        Sebuah tempat menggunakan beberapa kamera CCTV
        untuk membantu melakukan pengawasan.
        Menurutmu, apakah CCTV dapat digantikan sepenuhnya
        oleh orang yang melakukan pengawasan secara manual?

    </div>

    <h5 class="fw-bold mt-4">
        💬 Pertanyaan Diskusi
    </h5>

    <ol class="text-start mt-3"
        style="max-width: 850px; line-height: 1.8;">

        <li>
            Menurut kelompokmu, apa tujuan penggunaan CCTV?
        </li>

        <li>
            Apa yang mungkin terjadi jika pengawasan hanya
            dilakukan secara manual?
        </li>

        <li>
            Apa keuntungan menggunakan CCTV untuk membantu
            melakukan pengawasan?
        </li>

        <li>
            Apakah penggunaan CCTV dapat menggantikan
            manusia sepenuhnya? Jelaskan alasanmu.
        </li>

    </ol>

    <div class="alert alert-warning mt-4">

        <strong>🧠 Ingat!</strong><br><br>

        Tidak harus semua anggota kelompok memiliki pendapat
        yang sama. Dengarkan pendapat temanmu dan berikan
        alasan yang mendukung pendapatmu.

    </div>

</section>

<hr class="my-5">

<!-- Catatan Diskusi -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-lightbulb"></i>
        Hal yang Perlu Diingat
    </h3>

    <div class="alert alert-info mt-4">

        <strong>🧠 Saat Berdiskusi</strong><br><br>

        Dengarkan pendapat temanmu dengan baik.
        Jika memiliki pendapat yang berbeda, sampaikan
        alasanmu dengan jelas dan tetap menghargai pendapat
        anggota kelompok lainnya.

    </div>

    <div class="alert alert-warning mt-3">

        <strong>🔎 Saat Mencari Informasi</strong><br><br>

        Jika kelompokmu menggunakan informasi dari internet
        atau sumber lain tentang CCTV, periksa terlebih dahulu
        apakah informasi tersebut dapat dipercaya.

    </div>

    <div class="alert alert-success mt-3">

        <strong>💡 Kesimpulan Sementara</strong><br><br>

        Interaksi antarperangkat dapat membantu manusia
        melakukan suatu pekerjaan. Namun, penggunaan perangkat
        tetap perlu dipahami sesuai dengan kebutuhan dan
        tujuan penggunaannya.

    </div>

</section>

<hr class="my-5">

<!-- Ayo Mencoba -->
<section>

    <h3 class="fw-bold text-primary">
        <i class="bi bi-pencil-square"></i>
        Ayo Mencoba
    </h3>

    <p class="mt-3">
        Sekarang saatnya kamu menerapkan pemahamanmu tentang
        interaksi antarperangkat melalui kegiatan berikut.
    </p>

    <div class="alert alert-primary mt-4">

        <h5 class="fw-bold">
            📷 Tantangan — Menganalisis Penggunaan CCTV
        </h5>

        <p class="mt-3">
            Bayangkan di sekolahmu dipasang beberapa kamera CCTV
            untuk membantu melakukan pengawasan.
        </p>

        <p class="mb-2">
            Diskusikan bersama kelompokmu pertanyaan berikut:
        </p>

        <ol class="text-start"
            style="max-width: 850px; line-height: 1.8;">

            <li>
                Di mana saja CCTV dapat dipasang di lingkungan sekolah?
            </li>

            <li>
                Apa tujuan pemasangan CCTV di tempat tersebut?
            </li>

            <li>
                Apa keuntungan penggunaan CCTV untuk membantu
                melakukan pengawasan?
            </li>

            <li>
                Jika tidak menggunakan CCTV, bagaimana cara
                pengawasan dapat dilakukan?
            </li>

            <li>
                Menurut kelompokmu, apakah CCTV dapat menggantikan
                manusia sepenuhnya dalam melakukan pengawasan?
                Jelaskan alasanmu.
            </li>

        </ol>

    </div>

    <div class="alert alert-warning mt-4">

        <strong>💬 Sampaikan Hasil Diskusi</strong><br><br>

        Setelah berdiskusi, sampaikan hasil pemikiran kelompokmu
        kepada guru dan kelompok lainnya. Dengarkan juga
        pendapat kelompok lain.

    </div>

</section>

<hr class="my-5">

<!-- Tujuan Kegiatan -->
<div class="alert alert-primary mt-4">

    <strong>🎯 Setelah Menyelesaikan Kegiatan Ini</strong><br><br>

    Kamu diharapkan mampu memahami bagaimana perangkat
    yang berbeda dapat saling berinteraksi dan bekerja sama
    untuk membantu manusia melakukan suatu pekerjaan.
    Kamu juga dapat menjelaskan contoh interaksi antarperangkat
    melalui penggunaan CCTV.

</div>

<hr class="my-5">

<!-- EduBot Materi 5 -->
<section>

    <div class="alert alert-primary mt-4">

        <h5 class="fw-bold">
            🤖 Masih Bingung?
        </h5>

        <p>
            Kamu bisa bertanya kepada <strong>EduBot</strong>
            tentang materi Interaksi Antarperangkat.
        </p>

        <p class="mb-2">
            <strong>Contoh pertanyaan:</strong>
        </p>

        <ul class="mb-0">

            <li>Apa itu interaksi antarperangkat?</li>

            <li>Apa tujuan interaksi antarperangkat?</li>

            <li>Bagaimana perangkat dapat saling berinteraksi?</li>

            <li>Apa perbedaan teknologi kabel dan nirkabel?</li>

            <li>Apa contoh interaksi antarperangkat?</li>

            <li>Apa itu CCTV?</li>

            <li>Apa tujuan penggunaan CCTV?</li>

            <li>Apa keuntungan menggunakan CCTV?</li>

            <li>Apa yang dimaksud dengan pengawasan manual?</li>

            <li>Apa perbedaan pengawasan manual dan menggunakan CCTV?</li>

            <li>Apakah CCTV dapat menggantikan manusia sepenuhnya?</li>

            <li>Mengapa kita perlu memeriksa informasi tentang CCTV?</li>

        </ul>

    </div>

</section>

<button
    class="btn btn-success"
    onclick="selesaiMateri(); showHome()">

    Selesai Belajar
    <i class="bi bi-check-circle"></i>

</button>

    `;

}

const soalLatihan = [

    // =========================
    // MATERI 1 — INTERAKSI DENGAN PERKAKAS
    // =========================

    {
        materi: "Materi 1",

        pertanyaan:
            "Ketika menggunakan aplikasi, terdapat bagian yang berisi berbagai perintah seperti membuka file, menyimpan file, dan mencetak dokumen. Bagian tersebut disebut ...",

        pilihan: [
            "Ikon",
            "Menu",
            "Pointer",
            "Area kerja"
        ],

        jawaban: 1,

        pembahasan:
            "Menu merupakan bagian antarmuka yang berisi berbagai perintah yang dapat digunakan dalam aplikasi."
    },

    {
        materi: "Materi 1",

        pertanyaan:
            "Kamu ingin mengetik dan mengedit sebuah dokumen pada aplikasi pengolah kata. Komponen antarmuka yang paling diperlukan untuk melakukan kegiatan tersebut adalah ...",

        pilihan: [
            "Area kerja",
            "Menu",
            "Ikon",
            "Pointer"
        ],

        jawaban: 0,

        pembahasan:
            "Area kerja merupakan bagian antarmuka yang digunakan untuk melakukan pekerjaan utama, seperti mengetik dan mengedit dokumen."
    },


    // =========================
    // MATERI 2 — FILE DAN FOLDER
    // =========================

    {
        materi: "Materi 2",

        pertanyaan:
            "Rani memiliki file tugas Informatika, foto, dan dokumen pribadi. Agar file tersebut mudah ditemukan, tindakan yang paling tepat adalah ...",

        pilihan: [
            "Menyimpan semua file di satu tempat tanpa folder",
            "Menghapus file yang jarang digunakan",
            "Mengelompokkan file ke dalam folder sesuai jenisnya",
            "Mengubah nama semua file menjadi sama"
        ],

        jawaban: 2,

        pembahasan:
            "File sebaiknya dikelompokkan ke dalam folder yang sesuai agar penyimpanan lebih terstruktur dan file mudah ditemukan."
    },

    {
        materi: "Materi 2",

        pertanyaan:
            "Budi memiliki tiga file tugas Informatika. Ia ingin menyimpannya dengan terstruktur agar mudah ditemukan kembali. Cara yang paling tepat adalah ...",

        pilihan: [
            "Menyimpan semua file di folder yang sesuai dengan tugas Informatika",
            "Menyimpan file secara acak di berbagai folder",
            "Membiarkan file berada di tempat yang berbeda-beda",
            "Menghapus file setelah selesai digunakan"
        ],

        jawaban: 0,

        pembahasan:
            "Menyimpan file dalam folder yang sesuai membuat penyimpanan lebih terstruktur sehingga file lebih mudah diakses kembali."
    },


    // =========================
    // MATERI 3 — APLIKASI PERKANTORAN
    // =========================

    {
        materi: "Materi 3",

        pertanyaan:
            "Siti mendapat tugas membuat brosur sederhana menggunakan aplikasi pengolah kata. Kegiatan yang paling sesuai dengan tugas tersebut adalah ...",

        pilihan: [
            "Membuat dan mengatur isi brosur menggunakan aplikasi pengolah kata",
            "Membuat folder baru untuk menyimpan foto",
            "Mengirim pesan melalui surel",
            "Membuat tabel angka menggunakan spreadsheet"
        ],

        jawaban: 0,

        pembahasan:
            "Aplikasi pengolah kata dapat digunakan untuk membuat dan mengatur brosur sederhana sesuai dengan tujuan pembelajaran."
    },

    {
        materi: "Materi 3",

        pertanyaan:
            "Setelah membuat slide presentasi sederhana, Andi ingin menampilkan hasilnya di depan teman-temannya dan memastikan file tersebut dapat digunakan kembali. Apa yang sebaiknya dilakukan?",

        pilihan: [
            "Menghapus file setelah selesai membuat slide",
            "Menyimpan file presentasi kemudian membuka atau menjalankannya saat akan presentasi",
            "Menutup aplikasi tanpa menyimpan",
            "Memindahkan slide ke folder tanpa menyimpan file"
        ],

        jawaban: 1,

        pembahasan:
            "File presentasi perlu disimpan agar dapat dibuka dan digunakan kembali ketika diperlukan, termasuk saat melakukan presentasi."
    },


    // =========================
    // MATERI 4 — SUREL
    // =========================

    {
        materi: "Materi 4",

        pertanyaan:
            "Kamu ingin mengirimkan tugas Informatika kepada guru melalui surel. Setelah memasukkan alamat surel guru, tindakan yang tepat adalah ...",

        pilihan: [
            "Mengosongkan bagian Subject dan langsung menutup aplikasi",
            "Menuliskan Subject yang sesuai dan isi pesan dengan bahasa yang sopan",
            "Mengirimkan surel tanpa memeriksa alamat penerima",
            "Menuliskan kata sandi akun pada isi pesan"
        ],

        jawaban: 1,

        pembahasan:
            "Saat mengirim surel kepada guru, gunakan Subject yang sesuai dan tuliskan isi pesan dengan bahasa yang sopan dan sesuai."
    },

    {
        materi: "Materi 4",

        pertanyaan:
            "Kamu menerima surel dari guru yang meminta kamu mengumpulkan tugas. Balasan yang paling tepat adalah ...",

        pilihan: [
            "Tidak perlu membaca isi surel",
            "Membalas dengan bahasa yang sopan dan jelas",
            "Membalas hanya dengan simbol atau emoji",
            "Mengirimkan kata sandi akun kepada guru"
        ],

        jawaban: 1,

        pembahasan:
            "Balasan surel perlu menggunakan bahasa yang sesuai, sopan, dan jelas agar pesan dapat dipahami oleh penerima."
    },


    // =========================
    // MATERI 5 — INTERAKSI ANTARPERANGKAT
    // =========================

    {
        materi: "Materi 5",

        pertanyaan:
            "Apa yang dimaksud dengan interaksi antarperangkat?",

        pilihan: [
            "Keadaan ketika satu perangkat digunakan tanpa perangkat lain",
            "Keadaan ketika dua atau lebih perangkat saling berhubungan dan bekerja sama",
            "Kegiatan membuat perangkat lunak pada komputer",
            "Kegiatan menyimpan file ke dalam folder"
        ],

        jawaban: 1,

        pembahasan:
            "Interaksi antarperangkat adalah keadaan ketika dua atau lebih perangkat saling berhubungan dan bekerja sama untuk melakukan suatu kegiatan atau berbagi sumber daya."
    },

    {
        materi: "Materi 5",

        pertanyaan:
            "Contoh interaksi antarperangkat yang terdapat dalam materi adalah ...",

        pilihan: [
            "Kamera CCTV yang berinteraksi dengan perangkat lain untuk membantu melakukan pemantauan",
            "Mengetik dokumen menggunakan keyboard",
            "Membuat slide presentasi menggunakan PowerPoint",
            "Menyimpan dokumen ke dalam folder"
        ],

        jawaban: 0,

        pembahasan:
            "Kamera CCTV dapat berinteraksi dengan perangkat lain untuk membantu melakukan pemantauan."
    }

];

let nomorSoal = 0;
let skorLatihan = 0;
let materiSelesai =
    Number(localStorage.getItem("edusmartProgress")) || 0;

function updateProgress(){

    const progress =
        Math.round((materiSelesai / 5) * 100);

    const progressBar =
        document.querySelector(".progress-card progress");

    const progressText =
        document.querySelector(".progress-card p");

    if(progressBar){
        progressBar.value = progress;
    }

    if(progressText){
        progressText.textContent =
            `${progress}% Selesai`;
    }

}

function selesaiMateri(){

    if(materiSelesai < 5){

        materiSelesai++;

        localStorage.setItem(
            "edusmartProgress",
            materiSelesai
        );

    }

    updateProgress();

}

document.getElementById("menu-home").addEventListener("click", function(e){

    e.preventDefault();

    showHome();

});

document.getElementById("menu-materi").addEventListener("click", function(e){

    e.preventDefault();

    showMateri();

});

document.getElementById("menu-latihan").addEventListener("click", function(e){

    e.preventDefault();

    showLatihan();

});

document.getElementById("menu-tentang").addEventListener("click", function(e){

    e.preventDefault();

    showTentang();

});


function showLatihan(){

    closeEduBot();

    setActiveMenu("menu-latihan");

    nomorSoal = 0;
    skorLatihan = 0;

    tampilkanSoal();

}

function showTentang(){

    closeEduBot();

    setActiveMenu("menu-tentang");

    pageContent.innerHTML = `

        <section>

            <h2 class="fw-bold text-primary">
                <i class="bi bi-info-circle"></i>
                Tentang EduSmart
            </h2>

            <div class="hero-card mt-4">

                <h3>📚 EduSmart</h3>

                <p class="mt-3">
                    EduSmart merupakan media pembelajaran berbasis web
                    yang dikembangkan untuk membantu peserta didik kelas VII
                    mempelajari materi
                    <strong>Perangkat Lunak untuk Produktivitas</strong>.
                </p>

            </div>

            <div class="row g-4 mt-2">

                <div class="col-md-4">

                    <div class="card h-100 shadow-sm border-0">

                        <div class="card-body text-center">

                            <i class="bi bi-book fs-1 text-primary"></i>

                            <h5 class="fw-bold mt-3">
                                📚 Materi
                            </h5>

                            <p>
                                Tersedia 5 materi pembelajaran
                                yang dapat dipelajari secara bertahap.
                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card h-100 shadow-sm border-0">

                        <div class="card-body text-center">

                            <i class="bi bi-pencil-square fs-1 text-success"></i>

                            <h5 class="fw-bold mt-3">
                                📝 Latihan
                            </h5>

                            <p>
                                Tersedia 10 soal latihan untuk
                                menguji pemahaman setelah belajar.
                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card h-100 shadow-sm border-0">

                        <div class="card-body text-center">

                            <i class="bi bi-robot fs-1 text-info"></i>

                            <h5 class="fw-bold mt-3">
                                🤖 EduBot
                            </h5>

                            <p>
                                Asisten belajar yang membantu menjawab
                                pertanyaan seputar materi pembelajaran.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div class="alert alert-primary mt-4">

                <h5 class="fw-bold">
                    🎯 Tujuan EduSmart
                </h5>

                <p class="mb-0">
                    Membantu peserta didik memahami materi Informatika
                    dengan cara yang lebih interaktif dan mudah dipahami.
                </p>

            </div>

        </section>

    `;

}

function periksaSoal(){

    const jawaban =
        document.querySelector('input[name="jawaban"]:checked');

    const feedback =
        document.getElementById("feedbackLatihan");

    if(!jawaban){

        feedback.innerHTML = `
            <div class="alert alert-warning">
                ⚠️ Silakan pilih salah satu jawaban terlebih dahulu.
            </div>
        `;

        return;
    }

    const soal = soalLatihan[nomorSoal];

    let hasil = "";

    if(Number(jawaban.value) === soal.jawaban){

        skorLatihan++;

        hasil = `
            <div class="alert alert-success">

                <strong>✅ Jawaban benar!</strong><br><br>

                ${soal.pembahasan}

            </div>
        `;

    }else{

        hasil = `
            <div class="alert alert-danger">

                <strong>❌ Jawaban belum tepat.</strong><br><br>

                Jawaban yang benar adalah
                <strong>
                    ${String.fromCharCode(65 + soal.jawaban)}.
                    ${soal.pilihan[soal.jawaban]}
                </strong>
                <br><br>

                ${soal.pembahasan}

            </div>
        `;

    }

    feedback.innerHTML = hasil;

    document.querySelectorAll('input[name="jawaban"]').forEach(input => {
        input.disabled = true;
    });

    const tombol = document.querySelector("#tombolBerikutnya");

  if(tombol){

    if(nomorSoal === soalLatihan.length - 1){

        tombol.innerHTML = `
            Lihat Hasil
            <i class="bi bi-bar-chart-fill"></i>
        `;

        tombol.onclick = tampilkanHasil;

    }else{

        tombol.innerHTML = `
            Soal Berikutnya
            <i class="bi bi-arrow-right"></i>
        `;

        tombol.onclick = soalBerikutnya;

    }

}

}

function soalBerikutnya(){

    if(nomorSoal < soalLatihan.length - 1){

        nomorSoal++;

        tampilkanSoal();

    }

}

function tampilkanHasil(){

    const jumlahSoal = soalLatihan.length;

    const jumlahBenar = skorLatihan;

    const jumlahSalah = jumlahSoal - jumlahBenar;

    const nilai = Math.round(
        (jumlahBenar / jumlahSoal) * 100
    );

    pageContent.innerHTML = `

        <section>

            <div class="text-center">

                <div class="mb-3" style="font-size: 60px;">
                    🎉
                </div>

                <h2 class="fw-bold text-primary">
                    Latihan Selesai!
                </h2>

                <p class="mt-3">
                    Kamu telah menyelesaikan seluruh soal.
                    Berikut hasil latihanmu.
                </p>

            </div>

            <div class="card border-0 shadow-sm mt-4">

                <div class="card-body p-4 text-center">

                    <h5 class="fw-bold mb-4">
                        📊 Hasil Latihan
                    </h5>

                    <div class="row g-3">

                        <div class="col-md-4">

                            <div class="alert alert-primary h-100">

                                <h3 class="fw-bold">
                                    ${jumlahSoal}
                                </h3>

                                <p class="mb-0">
                                    Jumlah Soal
                                </p>

                            </div>

                        </div>

                        <div class="col-md-4">

                            <div class="alert alert-success h-100">

                                <h3 class="fw-bold">
                                    ${jumlahBenar}
                                </h3>

                                <p class="mb-0">
                                    Jawaban Benar
                                </p>

                            </div>

                        </div>

                        <div class="col-md-4">

                            <div class="alert alert-danger h-100">

                                <h3 class="fw-bold">
                                    ${jumlahSalah}
                                </h3>

                                <p class="mb-0">
                                    Jawaban Salah
                                </p>

                            </div>

                        </div>

                    </div>

                    <div class="mt-4">

                        <p class="text-muted mb-2">
                            Nilai Kamu
                        </p>

                        <h1 class="display-3 fw-bold text-primary">
                            ${nilai}
                        </h1>

                    </div>

                    <div class="alert alert-info mt-4">

                        <strong>💡 Tetap Semangat!</strong><br><br>

                        Terus pelajari kembali materi yang belum
                        kamu pahami dan coba latihan lagi.

                    </div>

                    <button
                        class="btn btn-primary mt-3"
                        onclick="showLatihan()">

                        🔄 Ulangi Latihan

                    </button>

                </div>

            </div>

        </section>

    `;

}

function tampilkanSoal(){

    const soal = soalLatihan[nomorSoal];

    pageContent.innerHTML = `

        <section>

            <h2 class="fw-bold text-primary">
                <i class="bi bi-pencil-square"></i>
                Latihan
            </h2>

            <div class="card border-0 shadow-sm mt-4">

                <div class="card-body p-4">

                    <div class="d-flex justify-content-between
                        align-items-center mb-3">

                        <span class="badge bg-primary">
                            Soal ${nomorSoal + 1} dari ${soalLatihan.length}
                        </span>

                        <span class="text-muted">
                            ${soal.materi}
                        </span>

                    </div>

                    <h5 class="fw-bold mb-4">
                        ${soal.pertanyaan}
                    </h5>

                    <div class="list-group">

                        ${soal.pilihan.map((pilihan, index) => `

                            <label class="list-group-item">

                                <input
                                    class="form-check-input me-2"
                                    type="radio"
                                    name="jawaban"
                                    value="${index}">

                                ${String.fromCharCode(65 + index)}.
                                ${pilihan}

                            </label>

                        `).join("")}

                    </div>

                    <div id="feedbackLatihan"
                         class="mt-4"></div>

                   <div class="text-end mt-3">

    <button
        id="tombolBerikutnya"
        class="btn btn-primary"
        onclick="periksaSoal()">

        Periksa Jawaban
        <i class="bi bi-check-circle"></i>

    </button>

</div>

                </div>

            </div>

        </section>

    `;

}

function cekJawabanLatihan(){

    const jawaban =
        document.querySelector('input[name="jawaban"]:checked');

    const feedback =
        document.getElementById("feedbackLatihan");

    if(!jawaban){

        feedback.innerHTML = `
            <div class="alert alert-warning">
                ⚠️ Silakan pilih salah satu jawaban terlebih dahulu.
            </div>
        `;

        return;

    }

    if(jawaban.value === "B"){

        feedback.innerHTML = `
            <div class="alert alert-success">

                <strong>✅ Jawaban benar!</strong><br><br>

                Menu berisi kumpulan perintah
                yang dapat digunakan dalam aplikasi.

            </div>
        `;

    }else{

        feedback.innerHTML = `
            <div class="alert alert-danger">

                <strong>❌ Jawaban belum tepat.</strong><br><br>

                Jawaban yang benar adalah
                <strong>B. Berisi kumpulan perintah.</strong>

            </div>
        `;

    }

}

const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");

chatToggle.addEventListener("click", function(){

if(chatWindow.style.display==="block"){

chatWindow.style.display="none";

}else{

chatWindow.style.display="block";

}

});

function closeEduBot(){

    chatWindow.style.display = "none";

}

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const text = userInput.value.trim();

if(text==="") return;

chatBody.innerHTML += `
<div class="user-message">
${text}
</div>
`;

const typingId = "typing-" + Date.now();

chatBody.innerHTML += `
<div class="bot-message" id="${typingId}">
🤖 EduBot sedang mengetik...
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

setTimeout(() => {

    const reply = getBotResponse(text);

    document.getElementById(typingId).innerHTML = reply;

    chatBody.scrollTop = chatBody.scrollHeight;

}, 1000);

userInput.value="";

chatBody.scrollTop = chatBody.scrollHeight;

}


function showSuggestions() {

    const suggestions = getSuggestions(currentTopic);

    if (!suggestions.length) return;

    let materi = "";

    if(currentTopic === "perkakas"){
        materi = "Interaksi dengan Perkakas";
    }
    else if(currentTopic === "filefolder"){
        materi = "File dan Folder";
    }
    else if(currentTopic === "office"){
        materi = "Aplikasi Perkantoran";
    }
    else if(currentTopic === "email"){
        materi = "Surel";
    }
    else if(currentTopic === "device_interaction"){
        materi = "Interaksi Antarperangkat";
    }

    let html = `
    <div class="bot-message">

        <b>📖 Kamu sedang mempelajari</b><br><br>

        <b>${materi}</b><br><br>

        Saya siap membantu menjelaskan materi ini.<br><br>

        <b>💡 Coba tanyakan:</b>
    `;

    suggestions.forEach(question => {

        html += `
        <button
            class="suggestion-btn"
            onclick="askSuggestion('${question}')">
            ${question}
        </button><br><br>
        `;

    });

    html += `</div>`;

    chatBody.innerHTML = html;

    chatBody.scrollTop = chatBody.scrollHeight;

}

function askSuggestion(question) {

    userInput.value = question;

    sendMessage();

}

function showFormatTeks(type){

    const title = document.getElementById("formatTeksTitle");
    const body = document.getElementById("formatTeksBody");

    const data = {

        bold: {
            judul: "𝐁 Bold (Tebal)",
            isi: `
                <p>
                    <strong>Bold</strong> digunakan untuk membuat teks
                    menjadi lebih tebal sehingga bagian penting lebih menonjol.
                </p>

                <h6>Contoh:</h6>

                <div class="alert alert-light border">
                    Sebelum: EduSmart<br><br>
                    Sesudah: <strong>EduSmart</strong>
                </div>

                <p>
                    <strong>Cara menggunakan:</strong><br>
                    Pilih teks → klik tombol <strong>B</strong>.
                </p>

                <div class="alert alert-primary">
                    ⌨️ Shortcut: <strong>Ctrl + B</strong>
                </div>
            `
        },

        italic: {
            judul: "𝘐 Italic (Miring)",
            isi: `
                <p>
                    <strong>Italic</strong> digunakan untuk membuat
                    teks menjadi miring.
                </p>

                <h6>Contoh:</h6>

                <div class="alert alert-light border">
                    Sebelum: EduSmart<br><br>
                    Sesudah: <em>EduSmart</em>
                </div>

                <p>
                    <strong>Cara menggunakan:</strong><br>
                    Pilih teks → klik tombol <strong>I</strong>.
                </p>

                <div class="alert alert-success">
                    ⌨️ Shortcut: <strong>Ctrl + I</strong>
                </div>
            `
        },

        underline: {
            judul: "U̲ Underline (Garis Bawah)",
            isi: `
                <p>
                    <strong>Underline</strong> digunakan untuk memberikan
                    garis bawah pada teks.
                </p>

                <h6>Contoh:</h6>

                <div class="alert alert-light border">
                    Sebelum: EduSmart<br><br>
                    Sesudah: <u>EduSmart</u>
                </div>

                <p>
                    <strong>Cara menggunakan:</strong><br>
                    Pilih teks → klik tombol <strong>U</strong>.
                </p>

                <div class="alert alert-danger">
                    ⌨️ Shortcut: <strong>Ctrl + U</strong>
                </div>
            `
        },

        font: {
            judul: "🔤 Jenis Huruf (Font)",
            isi: `
                <p>
                    <strong>Jenis huruf</strong> digunakan untuk mengubah
                    bentuk tampilan tulisan pada dokumen.
                </p>

                <h6>Contoh:</h6>

                <div class="alert alert-light border">
                    <span style="font-family:Arial;">EduSmart — Arial</span><br><br>
                    <span style="font-family:'Times New Roman';">
                        EduSmart — Times New Roman
                    </span>
                </div>

                <p>
                    <strong>Cara menggunakan:</strong><br>
                    Pilih teks → pilih jenis huruf pada bagian
                    <strong>Font</strong>.
                </p>
            `
        },

        size: {
            judul: "🔠 Ukuran Huruf",
            isi: `
                <p>
                    <strong>Ukuran huruf</strong> digunakan untuk
                    memperbesar atau memperkecil tampilan teks.
                </p>

                <h6>Contoh:</h6>

                <div class="alert alert-light border">
                    <span style="font-size:14px;">EduSmart — 14 pt</span><br><br>
                    <span style="font-size:24px;">EduSmart — 24 pt</span>
                </div>

                <p>
                    <strong>Cara menggunakan:</strong><br>
                    Pilih teks → pilih ukuran huruf yang diinginkan
                    pada bagian <strong>Font Size</strong>.
                </p>
            `
        },

        align: {
            judul: "↔️ Perataan Teks",
            isi: `
                <p>
                    <strong>Perataan teks</strong> digunakan untuk mengatur
                    posisi teks pada dokumen.
                </p>

                <div class="alert alert-light border">

                    <p class="text-start">
                        ⬅️ Rata Kiri
                    </p>

                    <p class="text-center">
                        ↔️ Rata Tengah
                    </p>

                    <p class="text-end">
                        Rata Kanan ➡️
                    </p>

                    <p style="text-align:justify;">
                        ↔ Rata Kiri-Kanan (Justify) membuat teks tersusun
                        rata pada sisi kiri dan kanan paragraf.
                    </p>

                </div>

                <p>
                    Pilih perataan sesuai kebutuhan dokumen.
                </p>
            `
        }

    };

    if(!data[type]) return;

    title.innerHTML = data[type].judul;
    body.innerHTML = data[type].isi;

    new bootstrap.Modal(
        document.getElementById("formatTeksModal")
    ).show();
}

showHome();
