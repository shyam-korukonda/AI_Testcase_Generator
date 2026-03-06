# 🤖 AI Test Case Generator

An AI-powered web application that automatically generates **software test cases** from a feature description using **FastAPI, React, and a Local LLM (Ollama)**.

This project demonstrates how **AI can assist QA engineers and developers** by automatically generating:

* ✅ Positive Test Cases
* ❌ Negative Test Cases
* ⚠️ Edge Test Cases

---

# 🚀 Project Demo

User enters a feature description like:

```
Login page with username and password
```

The AI generates structured test cases automatically.

Example Output:

```
1. Positive Test Case
Verify login with valid username and password.

2. Negative Test Case
Verify login with invalid password.

3. Edge Case
Verify login with empty username and password fields.
```

---

# 🏗️ System Architecture

```
User
  ↓
React Frontend
  ↓
Axios API Request
  ↓
FastAPI Backend
  ↓
Prompt Engineering Layer
  ↓
Ollama Local AI Model
  ↓
Generated Test Cases
  ↓
Displayed in UI + CSV Export
```

---

# 🧠 Tech Stack

## Frontend

* React
* Axios
* JavaScript
* HTML
* CSS

## Backend

* Python
* FastAPI
* Uvicorn

## AI Layer

* Ollama
* Local LLM (TinyLlama / Phi)
* Prompt Engineering

---

# 📂 Project Folder Structure

```
AI_Testcase_Generator
│
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── ai_service.py
│   │   ├── prompt_template.py
│   │   └── models.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── TestCaseGenerator.jsx
│   │   │
│   │   ├── api
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/AI_Testcase_Generator.git
```

```
cd AI_Testcase_Generator
```

---

# 🖥️ Backend Setup (FastAPI)

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment:

### Windows

```
venv\Scripts\activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Start FastAPI server:

```
uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup (React)

Open another terminal.

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start React app:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🧠 Setup Ollama (Local AI)

Install Ollama from:

https://ollama.com

Pull a lightweight model:

```
ollama pull tinyllama
```

Or

```
ollama pull phi
```

Check installed models:

```
ollama list
```

Ollama runs on:

```
http://localhost:11434
```

---

# 📤 Export Test Cases

The application allows users to **download generated test cases as a CSV file**.

Steps:

1. Generate test cases
2. Click **Download CSV**
3. File downloads automatically

---

# 💡 Features

* Generate AI-based test cases
* Positive / Negative / Edge test scenarios
* FastAPI backend
* React frontend
* Local LLM integration (Ollama)
* Prompt engineering
* CSV export functionality

---

# 🔮 Future Improvements

Possible improvements:

* Export test cases to **PDF**
* Save test cases to **database**
* Add **user authentication**
* Improve UI with **tables**
* Add **test case categorization**
* Deploy the project to **cloud**

---

# 🎯 Skills Demonstrated

This project demonstrates:

* Full Stack Development
* FastAPI Backend Development
* React Frontend Development
* REST API Design
* Prompt Engineering
* AI Integration
* CSV File Export
* Local LLM Deployment

---

# 👨‍💻 Author

Shyam Korukonda

GitHub:
https://github.com/your-username

---

# ⭐ If you like this project

Give the repository a **star ⭐ on GitHub**.
