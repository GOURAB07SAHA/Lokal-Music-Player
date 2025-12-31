# 🎵 Lokal Music Player – Intern Assignment

A high-performance music streaming application built with **React Native (Expo)** and **TypeScript**, powered by the **JioSaavn API**. This project focuses on native-level audio handling, complex state synchronization, and persistent user sessions.

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
cd MusicPlayerApp
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the application

```bash
npx expo start
```

Scan the QR code with **Expo Go (Android)** or the **Camera app (iOS)** to run the app on your physical device.

---

## 🏗 Architecture

The application is designed with a **clear separation of concerns** to meet the **Key Challenges** of the assignment:

### 🔹 API Service

A dedicated service layer to interact with the JioSaavn API endpoints:

* `/api/search/songs`
* `/api/songs/{id}`

### 🔹 Audio Engine

Powered by **expo-av**, enabling:

* Background playback
* Music continuation when the app is minimized or the screen is off

### 🔹 Navigation

Implemented using **React Navigation v6** with a **Stack-based structure**, strictly avoiding **Expo Router** as required.

### 🔹 State Management

Uses **Zustand** to ensure the **Mini Player** and **Full Player** remain perfectly synchronized across all screens.

---

## 🧠 Technical Decisions & Trade-offs

### 🔸 Zustand over Redux

Zustand was chosen for its:

* Lightweight footprint
* Minimal boilerplate
* Excellent real-time synchronization for audio playback state

### 🔸 AsyncStorage for Persistence

AsyncStorage is used to persist:

* Playback queue
* Last played song

This ensures the queue remains intact even after app restarts.

### 🔸 Native Audio Handling

Playback progress and seek functionality are handled through native audio callbacks to avoid UI lag and ensure smooth performance.

---

## ✨ Features

### 🎧 Core Features

* **Search & Discover**: Real-time song search using the JioSaavn API
* **Synced Mini Player**: Persistent mini player visible across all screens
* **Queue Management**: Add, remove, and reorder songs with local persistence
* **Background Playback**: Music continues playing when the app is minimized or the screen is locked

### 🌟 Bonus Features

* Shuffle mode
* Repeat mode
* Offline-ready architecture (future scope)

---

## 📁 Submission Requirements

* **GitHub Repository**: [https://github.com/GOURAB07SAHA/Lokal-Music-Player]
* **APK File**: [Insert Link / Location]
* **Demo Video**: [Insert 2–3 minute demo link showing background playback and state sync]

---

## 📝 Final Submission Checklist

* ✅ APK builds successfully and runs on Android devices
* ✅ Demo video clearly shows:

  * Background playback
  * Mini Player & Full Player synchronization
  * Queue persistence after app restart
* ✅ No mock data used
* ✅ All data fetched live from: [https://saavn.sumit.co/](https://saavn.sumit.co/)

---

### 👨‍💻 Author

**Gourab Saha**
B.Tech CSE, NIT Rourkela

---

> This project was developed as part of a React Native Intern Assignment, with a strong emphasis on clean architecture, real-world API usage, and production-ready audio handling.
