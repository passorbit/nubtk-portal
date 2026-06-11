# 🎓 NUBTK Student Portal

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success.svg?style=for-the-badge)

<div align="center">
  <img src="https://via.placeholder.com/1000x400?text=NUBTK+Student+Portal+Banner" alt="Project Banner" width="100%">
  <p><strong>An all-in-one, dynamic digital ecosystem designed to streamline academic workflows for the students of Northern University of Business & Technology Khulna (NUBTK).</strong></p>
</div>

---

## 📑 Table of Contents
- [About The Portal](#-about-the-portal)
- [Core Modules & Features](#-core-modules--features)
  - [1. Smart Cover Page Generator](#1-smart-cover-page-generator)
  - [2. Advanced Class Routine Manager](#2-advanced-class-routine-manager)
  - [3. Teachers Directory](#3-teachers-directory)
  - [4. Automated Index Maker](#4-automated-index-maker)
- [The Problem It Solves (Technical Highlights)](#-the-problem-it-solves-technical-highlights)
- [Pro Tips & Shortcuts](#-pro-tips--shortcuts)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Contribute](#-contribute)
- [Authors & Contributors](#-authors--contributors)

---

## 📖 About The Portal

The **NUBTK Student Portal** is a comprehensive open-source toolkit built to enhance the digital experience of university students. It serves as a centralized platform where students can generate flawless assignment cover pages, manage their academic schedules, find faculty information, and create lab report indexes effortlessly. 

---

## ✨ Core Modules & Features

### 1. Smart Cover Page Generator
A robust tool to automate the creation of official university cover pages for assignments and reports.
- **Customization:** Select from various official NUBTK logos and customize the PDF output file name.
- **Smart Auto-Fill:** Automatically detects and formats the teacher's department based on student input.
- **Live Preview:** Real-time visual updates of your cover page as you type.
- **QR Code & Link Sharing:** Generate a QR code or a direct link containing your input data. Share it with friends or scan another cover page's QR code to instantly auto-fill your form.
- **Direct Mail:** Instantly share the generated link via email, including a dedicated **NUBTK Button** to send files directly to *haquenubtk@gmail.com* (Mehedi vai, 4th floor).

### 2. Advanced Class Routine Manager
Revolutionizing how students interact with their class schedules.
- **Live Generator:** Enter your section code to instantly fetch the official schedule.
- **Manual Builder:** Create custom routines with personalized Class Names (e.g., *Discrete Mathematics*) styled with dark backgrounds under theory/lab badges.
- **Smart Edits & Auto-Save:** Pull existing data from an auto-generated routine into the manual builder. All manual progress is securely auto-saved as a local draft.
- **Bulletproof Downloads:** Export as high-resolution JPG or perfectly scaled Single-Page PDF without any mobile cropping issues.

### 3. Teachers Directory
A centralized, easy-to-navigate directory containing up-to-date information, contact details, and designations of university faculty members. No more searching through massive PDFs to find a teacher's email!

### 4. Automated Index Maker
Writing lab reports just got easier. This tool allows students to input their experiment names, dates, and page numbers to automatically generate a perfectly formatted Index/Table of Contents page ready for printing.

---

## 💡 The Problem It Solves (Technical Highlights)

- **Mobile Viewport Rendering Fix:** Generating PDFs and Images from wide HTML tables (like the Class Routine) often causes severe cropping on mobile devices. This portal implements a **Smart Download Engine** that temporarily bypasses mobile viewport constraints, delays the capture to ensure full DOM rendering, and seamlessly restores the UI, guaranteeing a perfect export every time.
- **State URL Sharing:** The Cover Page Generator utilizes URL parameters and QR code integration to share application state. This means users can share a link, and the receiver's form will populate automatically—eliminating repetitive data entry.

---

## ⚡ Pro Tips & Shortcuts

- **The Ultimate Time-Saver (Cover Page):** Fill in your common data (Student Name, ID, Semester, Session). Click **Share -> Copy Link**. Bookmark this link in your browser. Next time you click the bookmark, your personal details will be pre-filled automatically!
- **Smart Edits (Routine):** Don't build routines from scratch. Search your section, let it auto-generate, click **Edit This Routine**, and just type in the "Class Names". 
- **Mobile Experience:** For the best visual experience while building routines or cover pages on mobile, switching your browser to **Desktop Mode** is highly recommended.

---

## 🛠️ Tech Stack

- **Frontend Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Libraries & Tools:** 
  - `html2pdf.js` (For dynamic, single-page PDF generation)
  - `html2canvas` (For high-resolution JPG exports)
  - QR Code Generation/Scanning APIs
- **Data Persistence:** Browser LocalStorage API & URL State Management.

---


## 🤝 Contribute

This is an open-source initiative. We highly encourage students, developers, and tech enthusiasts to share ideas, report bugs, or submit pull requests to enhance its development. Please check out the repository issues for more information.

---

## 👨‍💻 Author & Contributors

**Suvro Mollick**
- Digital Agency: [Nexmover](https://suvro.nexmover.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- And all the students from my section

*Special thanks to all contributors and students providing valuable feedback.*

---
*If this portal helped you organize your academic life, please consider giving it a ⭐ on GitHub!*
