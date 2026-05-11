# 🎬 Movies Market

Modern ve performans odaklı bir film keşif uygulaması.  
Bu proje, kullanıcıların popüler filmleri keşfetmesini, detaylarını incelemesini ve favori listesi oluşturmasını sağlar.

Veri kaynağı olarak TMDB (The Movie Database) API kullanılmıştır.

---

## 🚀 Özellikler

- 🔥 Popular, Top Rated ve Trending film listeleri
- 🎥 Film detay sayfası
  - Poster
  - Açıklama
  - Puan
  - Çıkış tarihi
- ❤️ Favori filmlere ekleme / çıkarma
- 💾 localStorage ile kalıcı favori sistemi
- ⚡ RTK Query ile optimize veri yönetimi ve caching
- 🎨 Responsive ve modern kullanıcı arayüzü
- ⏳ Skeleton loading desteği
- ❌ API error handling

---

## 🛠 Kullanılan Teknolojiler

- React
- TypeScript
- Redux Toolkit Query
- React Router DOM
- Tailwind CSS
- TMDB API

---

## 📸 Uygulama Bölümleri

### 🏠 Ana Sayfa

- Popular Movies
- Top Rated Movies
- Trending Movies

### 🎬 Film Detay Sayfası

- Film bilgileri
- Poster ve açıklama
- Puan bilgisi
- Çıkış tarihi

### ❤️ My List (Favoriler)

- Kullanıcının seçtiği filmler
- localStorage ile kalıcı veri saklama

---

## 📦 Kurulum

Projeyi lokal ortamda çalıştırmak için:

``bash
git clone https://github.com/bekirsglm/movies-market.git

cd movies-market

npm install

npm run dev


🔑 Environment Variables

Projeyi çalıştırabilmek için root dizininde bir .env dosyası oluşturup aşağıdaki değişkeni ekleyin:

VITE_TMDB_API_KEY=your_api_key

TMDB API key almak için:
https://developer.themoviedb.org/


## EKRAN GÖRÜNTÜSÜ
![EkranKayd2026-03-26211449-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/ccbf545f-824a-4853-84e3-8d4138f7796c)

