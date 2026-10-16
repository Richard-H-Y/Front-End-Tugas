import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Identitas Mahasiswa */}
      <div className="student-info">
        <h1>Richard Harris Yuwono</h1>
        <p>NIM: 535250058</p>
      </div>

      {/* Header & Navigasi */}
      <header className="header">
        <a href="#beranda" className="logo">
          <span className="logo-dot"></span>Kopi Nusantara
        </a>

        <nav className="navbar">
          <a href="#beranda" className="active">Beranda</a>
          <a href="#menu">Menu</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      {/* Hero / Banner */}
      <section className="hero" id="beranda">
        <div className="hero-content">
          <p className="hero-label">Sejak 2019 - Diracik di Rumah, Disajikan dengan Hati</p>
          <h2>Secangkir Kehangatan Khas Nusantara</h2>
          <p>
            Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok Indonesia, diseduh
            langsung setiap hari tanpa bahan pengawet. Nikmati dari layar HP, tablet, atau
            laptop Anda, tampilan kami menyesuaikan di mana pun Anda membuka halaman ini.
          </p>
          <div className="hero-btn-group">
            <a href="#menu" className="btn btn-solid">Lihat Menu</a>
            <a href="#kontak" className="btn btn-outline">Pesan Sekarang</a>
          </div>
        </div>

        <div className="hero-img">
          <div className="steam">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cup">
            <div className="cup-foam"></div>
            <div className="cup-handle"></div>
          </div>
        </div>
      </section>

      {/* Konten Utama: Menu */}
      <section className="menu" id="menu">
        <h2 className="heading">Menu Favorit Kami</h2>
        <p className="subheading">Menu andalan yang paling sering dipesan pelanggan.</p>

        <div className="menu-container">
          <div className="menu-box">
            <Image src="/images/Kopi Kelapa.jpg" alt="Es Kopi Kelapa" width={1200} height={1200} className="menu-img" />
            <h3>Es Kopi Kelapa</h3>
            <p>Espresso segar berpadu dengan air kelapa muda asli dan sedikit gula aren.</p>
            <span className="price">Rp 22.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Guren.jpg" alt="Kopi Susu Gula Aren" width={720} height={1280} className="menu-img" />
            <h3>Kopi Susu Gula Aren</h3>
            <p>Perpaduan klasik kopi robusta lokal, susu segar, dan gula aren asli.</p>
            <span className="price">Rp 20.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/americano.jpg" alt="Americano" width={1080} height={1080} className="menu-img" />
            <h3>Americano</h3>
            <p>Espresso murni dengan air panas, cocok untuk penikmat kopi hitam.</p>
            <span className="price">Rp 18.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/cappuccino.jpg" alt="Cappuccino" width={800} height={1000} className="menu-img" />
            <h3>Cappuccino</h3>
            <p>Espresso dengan foam susu lembut dan taburan bubuk cokelat.</p>
            <span className="price">Rp 24.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Klepon.jpg" alt="Kopi Klepon" width={675} height={1200} className="menu-img" />
            <h3>Kopi Klepon</h3>
            <p>Minuman kopi khas Indonesia dengan rasa manis dari klepon.</p>
            <span className="price">Rp 20.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Rarobang.jpeg" alt="Kopi Rarobang" width={396} height={372} className="menu-img" />
            <h3>Kopi Rarobang</h3>
            <p>Kopi khas Maluku berempah cengkeh dan kayu manis, disajikan dengan taburan kenari.</p>
            <span className="price">Rp 22.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Arang.jpg" alt="Kopi Joss Arang" width={736} height={736} className="menu-img" />
            <h3>Kopi Joss (Arang)</h3>
            <p>Kopi hitam khas yang disajikan unik dengan celupan arang membara pilihan.</p>
            <span className="price">Rp 15.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Tubruk.jpg" alt="Kopi Tubruk" width={695} height={926} className="menu-img" />
            <h3>Kopi Tubruk</h3>
            <p>Seduhan tradisional dengan aroma kuat dan bodi tebal khas warkop Nusantara.</p>
            <span className="price">Rp 12.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Klotok.jpg" alt="Kopi Klotok" width={867} height={1156} className="menu-img" />
            <h3>Kopi Klotok</h3>
            <p>Kopi khas Jogja yang direbus bersama bubuknya, menghasilkan rasa pahit gurih yang unik.</p>
            <span className="price">Rp 14.000</span>
          </div>

          <div className="menu-box">
            <Image src="/images/Kopi Jahe.jpeg" alt="Kopi Jahe" width={736} height={980} className="menu-img" />
            <h3>Kopi Jahe</h3>
            <p>Paduan rempah jahe bakar dan kopi hitam yang hangat serta menyegarkan tubuh.</p>
            <span className="price">Rp 17.000</span>
          </div>
        </div>
      </section>

      {/* Konten Utama: Tentang Kami */}
      <section className="about" id="tentang">
        <div className="about-icon">
          <Image src="/images/biji-kopi.png" alt="Biji kopi" width={515} height={485} />
        </div>

        <div className="about-content">
          <h2 className="heading">Tentang Kopi Nusantara</h2>
          <p>
            Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh dari kecintaan
            terhadap biji kopi lokal Indonesia dari Gayo, Toraja, hingga Kintamani.
            Kami percaya secangkir kopi terbaik lahir dari proses yang jujur dan bahan
            yang berkualitas.
          </p>

          <ul className="about-list">
            <li><span className="dot"></span>Biji kopi pilihan langsung dari petani lokal</li>
            <li><span className="dot"></span>Diseduh segar setiap hari di dapur rumahan kami</li>
            <li><span className="dot"></span>Bisa dipesan kapan saja lewat WhatsApp</li>
          </ul>
        </div>
      </section>

      {/* Konten Utama: Kontak */}
      <section className="contact" id="kontak">
        <div className="contact-info">
          <h2 className="heading">Hubungi &amp; Pesan</h2>
          <p>Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.</p>
          <p><b>Alamat:</b> Jl. Melati No. 12, Bandung</p>
          <p><b>WhatsApp:</b> 0812-3456-7890</p>
          <p><b>Jam Buka:</b> Setiap hari, 08.00 - 21.00</p>
        </div>

        <form className="contact-form">
          <div className="input-box">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" name="nama" placeholder="Nama lengkap Anda" />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="nama@email.com" />
          </div>

          <div className="input-box">
            <label htmlFor="pesan">Pesan</label>
            <textarea id="pesan" name="pesan" rows={5} placeholder="Tuliskan pesanan atau pertanyaan Anda"></textarea>
          </div>

          <input type="submit" value="Kirim Pesan" className="btn btn-solid" />
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
      </footer>

      {/* Tombol kembali ke atas */}
      <a href="#" className="scroll-top" aria-label="Kembali ke atas">&uarr;</a>
    </>
  );
}
