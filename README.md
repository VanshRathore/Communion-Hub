# ⚛️ React + Vite

A minimal setup to kickstart your **React** app using **Vite** with **HMR (Hot Module Replacement)** and basic **ESLint** rules.

> ⚡ Fast build. 🔥 Instant updates. 🧹 Clean code.

🌐 [Live Demo](https://communion-hub-neon-nine.vercel.app/)

---

## 🧩 Plugins Included

Currently, two official plugins are available for React in Vite:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)  
  → Uses [Babel](https://babeljs.io/) for Fast Refresh.

- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc)  
  → Uses [SWC](https://swc.rs/) for even faster compilation.

---

## 🧹 Expanding the ESLint Configuration

If you're building a production-grade app, it's highly recommended to use **TypeScript** with **type-aware linting**.

Check out:

- 🧠 The official [React + TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
- 🔍 [`typescript-eslint`](https://typescript-eslint.io) to enable advanced lint rules

---

## 🚀 Quick Start

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
