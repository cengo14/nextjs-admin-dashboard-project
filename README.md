---

# Admin Panel

Bu proje, **Next.js** ile geliştirilmiş bir admin panelidir. Veriler için **JSON Server**, stillendirme için **Tailwind CSS**, ve dashboard üzerinde grafikler için **React Charts** kullanılmıştır.

## Özellikler

- **Kullanıcı Yönetimi**
  - Kayıtlı kullanıcı bilgilerini görüntüleyebilme.
  - Kullanıcıları silebilme.
  
- **Ürün Yönetimi**
  - Ürün bilgilerini görüntüleyebilme.
  - Yeni ürün ekleyebilme ve mevcut ürünleri silebilme.

- **Grafik ve Raporlama**
  - Satılan ürün miktarı.
  - Toplam gelir, gider ve kar.
  - Tüm bu verileri React Charts ile görsel olarak inceleyebilme.

## Kullanılan Teknolojiler

- **Next.js**: React tabanlı modern framework.
- **JSON Server**: Sahte REST API oluşturmak için.
- **Tailwind CSS**: Hızlı ve özelleştirilebilir CSS framework.
- **React Charts**: Grafik ve veri görselleştirme.

## Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16+)
- npm veya yarn

### Adımlar

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/cengo14/nextjs-admin-dashboard-project.git
   cd nextjs-admin-dashboard-project
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn
   ```

3. **JSON Server'ı başlatın:**
   JSON Server için bir `db.json` dosyası oluşturduktan sonra:
   ```bash
   npm run server
   ```

4. **Geliştirme sunucusunu çalıştırın:**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

5. **Uygulamayı açın:**
   Tarayıcınızda `http://localhost:3000` adresine gidin.


## Ekran Görüntüleri

**Dashboard:**  
Yönetim paneli üzerindeki grafik ve raporların görünümü.  

![Dashboard Screenshot](./screenshots/ss.gif)


## Katkıda Bulunma

Katkıda bulunmak isterseniz, bir **pull request** göndermekten çekinmeyin. 😊

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.  

---
