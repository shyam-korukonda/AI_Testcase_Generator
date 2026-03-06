# 🚀 AI Test Case Generator (FastAPI + React + Ollama)

A **Full Stack AI-powered QA Tool** that automatically generates software test cases from feature descriptions.

This project demonstrates **AI integration, prompt engineering, backend APIs, and modern React UI** in a real-world application.

---

# 📌 Project Overview

The **AI Test Case Generator** helps QA engineers and developers automatically create structured test cases.

Instead of manually writing test cases, users can simply describe a feature such as:

```
Login page with username and password
```

The AI will generate:

* Positive Test Cases
* Negative Test Cases
* Edge Cases

Each test case includes:

* Test Case ID
* Description
* Steps
* Expected Result

---

# 🧠 Technologies Used

## Frontend

* React
* Axios
* CSS Dashboard UI

## Backend

* FastAPI
* Python
* Pydantic

## AI Layer

* Ollama (Local LLM)
* Prompt Engineering

---

# 🏗 System Architecture

```
User
  ↓
React Frontend
  ↓
FastAPI Backend
  ↓
Prompt Engineering Layer
  ↓
Ollama AI Model
  ↓
Generated Test Cases
  ↓
React Dashboard Display
```

---

# ✨ Features

### 🤖 AI Test Case Generation

Generate structured QA test cases automatically.

---

### 📊 Professional Dashboard UI

* Sidebar navigation
* Clean dashboard layout
* Styled test case table

---

### 🌙 Dark Mode

Toggle between **light mode and dark mode**.

---

### 📜 Test Case History

Generated test cases are saved in **local storage**.

Users can reload previous test cases from the sidebar.

---

### 📥 CSV Export

Download generated test cases as a **CSV file**.

---

# 📂 Project Structure

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
│   │   ├── api
│   │   │   └── api.js
│   │   │
│   │   ├── components
│   │   │   ├── TestCaseGenerator.jsx
│   │   │   └── HistoryPanel.jsx
│   │   │
│   │   ├── styles
│   │   │   └── dashboard.css
│   │   │
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```
git clone https://github.com/your-username/AI_Testcase_Generator.git
cd AI_Testcase_Generator
```

---

# 🖥 Backend Setup

### Navigate to Backend

```
cd backend
```

### Create Virtual Environment

```
python -m venv venv
```

### Activate Environment

Windows:

```
venv\Scripts\activate
```

Mac/Linux:

```
source venv/bin/activate
```

### Install Dependencies

```
pip install -r requirements.txt
```

---

# 🧠 Install Ollama

Download Ollama:

https://ollama.com/download

Run the AI model:

```
ollama run phi
```

---

# 🚀 Run Backend Server

```
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

# 💻 Frontend Setup

Open another terminal:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start React server:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🧪 Example Input

```
Login page with username and password
```

---

# 📋 Example Output

| ID   | Description                         | Steps                       | Expected Result    |
| ---- | ----------------------------------- | --------------------------- | ------------------ |
| TC01 | Verify login with valid credentials | Enter username and password | Login successful   |
| TC02 | Verify login with invalid password  | Enter wrong password        | Error message      |
| TC03 | Verify empty username               | Leave username blank        | Validation message |

---

# 🎯 Skills Demonstrated

This project demonstrates:

* AI Integration
* Prompt Engineering
* FastAPI Development
* React Frontend Development
* REST API Communication
* Local LLM Usage
* SaaS-style UI Design

---

# 🚀 Future Improvements

Possible upgrades:

* Export test cases as PDF
* Save test cases in database
* Add authentication system
* Add AI model selection
* Add test case risk analysis

---

# 👨‍💻 Author

Built as a **portfolio AI + Full Stack project** to demonstrate modern development skills.

---

⭐ If you like this project, consider giving it a star on GitHub.
