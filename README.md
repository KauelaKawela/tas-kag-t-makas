# Taş Kağıt Makas (Rock Paper Scissors)

[![GitHub Issues](https://img.shields.io/github/issues/KauelaKawela/tas-kag-t-makas)](https://github.com/KauelaKawela/tas-kag-t-makas/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)

Modern, web tabanlı ve komut satırı destekli yapıya sahip, interaktif bir algoritma uygulaması.

[🔗 Canlı Demo (Live Demo) İçin Tıklayın](https://kauelakawela.github.io/tas-kag-t-makas/web/)

## 📖 Proje Hakkında

Bu proje, klasik Taş-Kağıt-Makas oyununun algoritmik mantığını iki farklı mecrada kullanılmak üzere geliştirilmiş bir yazılım mimarisidir:

1. **Web Arayüzü (Frontend):** JavaScript, web standartlarına (HTML5 / CSS3) uygun geliştirilmiş, "Retro/Arcade" tasarım desenlerini benimseyen tarayıcı tabanlı arayüz. Dinamik DOM maniplasyonu, ses efektleri ve CSS animasyonları barındırır.
2. **CLI Arayüzü (Backend/Script):** Python dili üzerine inşa edilmiş, terminal ve sistem ortamlarında yüksek performanslı, hızlı çalışacak şekilde tasarlanmış komut satırı arayüzü.

## 🚀 Teknik Özellikler

- **Çoklu Platform Desteği:** İster interaktif web tarayıcısında, ister işletim sisteminizin komut satırında doğrudan çalıştırılma imkanı.
- **Asenkron Animasyonlar:** Web sürümünde oyun esnasında durumu kullanıcıya bildiren ve gecikme hissi yaratan (setTimeout) asenkron UI elementleri.
- **Programatik Ses Entegrasyonu:** `Web Audio API` (OscillatorNode) vasıtasıyla dinamik olarak sentezlenen 8-bit retro frekans sesleri.
- **Zero Dependency (Sıfır Bağımlılık):** Herhangi bir paket yöneticisine (NPM, Pip), ekstra kütüphaneye veya framework'e ihtiyaç duymadan cihazda doğrudan çalıştırılabilir mimari.

## 📁 Proje Mimarisi

```text
.
├── cli/
│   └── oyun.py          # Python CLI kaynak kodu ve terminal döngüsü
└── web/
    ├── index.html       # Web ana iskeleti ve semantik DOM yapısı
    ├── style.css        # Arayüz, Grid/Flexbox yerleşimleri ve animasyonlar
    └── script.js        # Oyun algoritması ve Web Audio API entegrasyonu
```

## 💻 Kurulum ve Kullanım

### Web Kurulumu (Tarayıcı Üzerinden)

Herhangi bir sunucu konfigürasyonu gerektirmez. Repoyu makinenize klonladıktan veya indirdikten sonra kök dizindeki `web/index.html` dosyasını tarayıcınız ile başlatmanız uygulamanın çalışması için yeterlidir. Canlı dağıtım doğrudan GitHub Pages ortamında yapılmıştır.

### CLI Kurulumu (Terminal Ortamı İçin)

Python 3.x ortamının sisteminizde yüklü ve çevre değişkenlerinize yapılandırılmış olduğunu varsayarak:

1. Depoyu yerelinize klonlayın:
```bash
git clone https://github.com/KauelaKawela/tas-kag-t-makas.git
```
2. Terminal programınızda ilgili çalışma dizinine geçiş yapın:
```bash
cd tas-kag-t-makas/cli
```
3. Script'i çalıştırın:
```bash
python oyun.py
```

## 🤝 Katkıda Bulunma (Contributing)

Açık kaynak dünyasına ve geliştirmelere açığız. Eğer projeye kod veya dokümantasyon katkısı sağlamak isterseniz:
1. Projeyi fork'layın.
2. Yeni bir özellik dalı (branch) oluşturun (`git checkout -b feature/YeniOzellik`).
3. Değişikliklerinizi commit'leyin (`git commit -m 'Yeni özellik: Animasyon geliştirmesi'`).
4. Dalınızı ana projeye push'layın (`git push origin feature/YeniOzellik`).
5. GitHub üzerinden bir **Pull Request (PR)** oluşturun.

## 📄 Lisans

Bu proje açık kaynaklı olup **MIT Lisansı** altında lisanslanmıştır. Kodları dilediğiniz gibi kullanabilir, kopyalayabilir ve kişisel/kurumsal projelerinizde geliştirebilirsiniz.
