# 🎓 NUBTK Student Portal

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success.svg?style=for-the-badge)

<div align="center">
  <img src="https://via.placeholder.com/1000x400?text=NUBTK+Student+Portal+Banner](https://github.com/passorbit/nubtk-portal/blob/main/Portal_IMG.png)](https://raw.githubusercontent.com/passorbit/nubtk-portal/refs/heads/main/Portal_IMG.png" alt="Project Banner" width="100%">
  <p><strong>A comprehensive, dynamic, and smart digital hub designed to streamline academic activities for the students of Northern University of Business & Technology Khulna (NUBTK).</strong></p>
</div>

---

## 📑 Table of Contents
- [About The Portal](#-about-the-portal)
- [Highlighted Module: Class Routine Manager](#-highlighted-module-class-routine-manager)
- [The Problem It Solves (Technical Highlight)](#-the-problem-it-solves-technical-highlight)
- [How to Use (User Guide)](#-how-to-use-user-guide)
- [Pro Tips & Shortcuts](#-pro-tips--shortcuts)
- [Tech Stack](#-tech-stack)
- [Roadmap & Future Integrations](#-roadmap--future-integrations)
- [Contribute](#-contribute)
- [Author & Contributors](#-author--contributors)

---

## 📖 About The Portal

The **NUBTK Student Portal** is an ambitious open-source initiative built to enhance the digital experience of university students. It serves as a centralized platform where students can seamlessly manage their academic schedules, generate necessary documents, and access university-related utilities without the hassle of navigating through scattered PDF notices or complex software.

---

## ✨ Highlighted Module: Class Routine Manager

The current flagship feature of this portal is the **Advanced Class Routine Manager**, which completely revolutionizes how students interact with their class schedules.

### Core Features
- **🔍 Auto-Generate Schedule**: Enter your section code (e.g., `1A`, `3D`) to instantly fetch the official, up-to-date class routine directly from the live database.
- **✍️ Manual Routine Builder**: A fully customizable interface allowing students to build a routine completely from scratch. 
- **🏷️ Custom Class Names**: Add specific course titles (e.g., *Discrete Mathematics*) under the theory/lab badges for better clarity. Styled beautifully with custom dark backgrounds.
- **🔄 Smart 'Edit' Functionality**: Found a generated routine but want to tweak the times or add class names? The "Edit This Routine" button pulls all existing data into the manual builder for rapid modification.
- **💾 Local Auto-Save Draft**: Never lose your progress. The manual builder securely saves your inputs in the browser's Local Storage. If you accidentally close the tab, your data will be right there when you return.

---

## 💡 The Problem It Solves (Technical Highlight)

**The Mobile Cropping Issue:** Generating PDFs and Images (JPGs) from wide HTML tables often causes severe cropping issues on mobile devices due to responsive screen width limitations. 

**The Solution:** This project implements a **Bulletproof Smart Download Engine**. When a user hits download, the engine dynamically calculates the absolute scroll-width, temporarily bypasses the mobile viewport limits, captures the full uncropped routine using a 150ms render delay, and flawlessly restores the UI state. It guarantees a **perfect, single-page A4 download** or **full-width high-resolution JPG** across all devices, including smartphones!

---

## 🎯 How to Use (User Guide)

### Using the Routine Generator
1. Navigate to the **Class Routine** section.
2. Enter your exact section code in the search box (e.g., `2D`).
3. Click **Generate Routine**.
4. Review your schedule. If everything looks good, use the **Download PDF** or **Download JPG** buttons.

### Using the Manual Builder
1. Click the **"✍️ Manual Create"** button.
2. Enter a custom Section Name at the top.
3. For each specific time slot, enter the:
   - Course Code (e.g., *CSE 2105*)
   - Class Name (Max 20 chars, e.g., *Discrete Math*)
   - Room Number (e.g., *202*)
   - Class Type (Theory / Lab / Phy Lab)
4. Hit **Save Draft** periodically.
5. Once finished, click **Preview & Download**. Review the layout to ensure all class names fit perfectly, then download!

---

## ⚡ Pro Tips & Shortcuts

- **Smart Edits:** Instead of building from scratch, search for your section, let it auto-generate, and then click **Edit This Routine**. It will auto-fill the entire form, allowing you to just type in the "Class Names" and save massive amounts of time!
- **Draft Persistence:** If you find it overwhelming to fill in all the inputs at once, just fill in your common data and hit **Save Draft**. You can close the browser and come back days later—your schedule will be waiting for you.
- **Mobile Experience:** While the Smart Download Engine prevents cropping on mobile, for the best visual experience while *building* the routine, switching your mobile browser to **Desktop Mode** is highly recommended.

---

## 🛠️ Tech Stack

- **Frontend Core:** HTML5, CSS3 (Custom Design System), Vanilla JavaScript (ES6+).
- **Libraries & Dependencies:** 
  - [`html2pdf.js`](https://ekoopmans.github.io/html2pdf.js/) (For dynamic, single-page PDF generation)
  - [`html2canvas`](https://html2canvas.hertzen.com/) (For high-resolution JPG exports)
- **Data Persistence:** Browser LocalStorage API.

---

## 🗺️ Roadmap & Future Integrations

- [x] Advanced Routine Generator & Manual Builder.
- [x] Bulletproof PDF/JPG Export Engine.
- [ ] **NUBTK Cover Page Generator**: Integration of a smart tool to automate assignment/report cover pages with custom logos, QR code sharing, and auto-fill links.
- [ ] Dark Mode support across the entire portal.
- [ ] Export routines directly to Google Calendar.

---

## 🤝 Contribute

This is an open-source initiative. We highly encourage students, developers, and tech enthusiasts to share ideas, report bugs, or submit pull requests to enhance its development. Please check out the repository issues for more information.

---

## 👨‍💻 Author & Contributors

**Suvro Mollick**
- Digital Agency: [Nexmover](https://suvro.nexmover.com)
- GitHub: [@yourusername](https://github.com/passorbit)

*Special thanks to all contributors and students providing valuable feedback.*

---
*If this portal helped you organize your academic life, please consider giving it a ⭐ on GitHub!*
