# Engineered Portfolio – Satish Sahu

A high-performance, dark-tech aesthetic portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Featuring real-time coding profile stats, smooth animations, and a modern typography system.

## 🚀 Key Features
- **Modern UI/UX**: Dark mode, glassmorphism, and neon-cyan accents.
- **Dynamic Animations**: System-boot loader and scroll-triggered content reveals.
- **Live Stats**: Integration with GitHub, LeetCode, and HackerRank APIs.
- **Responsive Design**: Optimized for all screen sizes.
- **Custom Typography**: Powered by the **Ranade** sans-serif font.

---

## 🛠️ How to Run Locally

Follow these steps to get a local copy of the project up and running.

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine.
- [Download Node.js](https://nodejs.org/)

### 2. Clone the Repository
```bash
git clone https://github.com/sahusateesh8737/porfolio.git
cd porfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your API keys:
```env
# Required for the Contact Form
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here

# Required for GitHub Stats (to avoid rate limits)
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token_here
```
> [!TIP]
> Get a Web3Forms key [here](https://web3forms.com/) and a GitHub Token [here](https://github.com/settings/tokens).

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🏗️ Building for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

## 📄 License
This project is open-source. Feel free to fork and use it for your own portfolio!
