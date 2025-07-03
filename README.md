<h1 align="center">🧠 AI Text Summarizer Web App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/backend-Node.js-blue?logo=node.js" />
  <img src="https://img.shields.io/badge/framework-Express.js-black?logo=express" />
  <img src="https://img.shields.io/badge/code-JavaScript-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/frontend-HTML-orange?logo=html5" />
  <img src="https://img.shields.io/badge/style-CSS-blue?logo=css3" />
  <img src="https://img.shields.io/badge/tool-Postman-orange?logo=postman" />
  <img src="https://img.shields.io/badge/API-HuggingFace-yellow?logo=huggingface" />
  
</p>



An AI-powered text summarization full-stack web application that uses the Hugging Face Inference API to generate concise summaries of long texts in real-time. Built as part of the Postman Project-Based Learning Series.

## 🚀 Features

- 🔗 Seamless integration with Hugging Face API
- ⚡ Real-time summarization with fast response time
- 🌐 Full-stack implementation with Node.js backend and interactive frontend
- 📱 Responsive UI with HTML, CSS, and JavaScript
- ☁️ Deployable on Replit or GitHub Codespaces
- 📦 Environment variables support for secure API key handling

---

## 🛠 Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Frontend     | HTML, CSS, JavaScript               |
| Backend      | Node.js, Express.js                 |
| API          | Hugging Face Inference API          |
| Tools        | Postman, GitHub Codespaces / Replit |
| Deployment   | Replit / Codespaces (live preview)  |
| Others       | Axios, dotenv, body-parser, cors    |

---

## 📁 Folder Structure
```bash
ai-text-summarizer/
│
├── public/                  # Frontend files
│   ├── index.html           # Main UI page
│   ├── style.css            # App styling
│   └── script.js            # Frontend JS for API interaction
│
├── server/                  # Backend files
│   └── server.js            # Express server with summarization endpoint
│
├── .env.example             # Sample environment variables file
├── .gitignore               # Node.js & sensitive file exclusions
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation


```
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-text-summarizer.git
cd ai-text-summarizer
```

2. Install Backend Dependencies
```bash
npm install
```
3. Configure Environment Variables
Create a .env file in the root and add your Hugging Face API key:

```env

HUGGINGFACE_API_KEY=your_huggingface_api_key
```
You can get the key from: https://huggingface.co/settings/tokens

4. Run the Application
```bash
node server/server.js
```
Then open public/index.html in your browser (or run the server and open in Replit).

🌐 Live Demo
🔗 Coming soon via Replit/GitHub Pages (or paste your live deployment link here)

📌 Project Credits
This project was built as part of the Postman Project-Based Learning Series.
API integration powered by Hugging Face Inference API.



