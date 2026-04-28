# 🚀 Developer Productivity MVP

AI-powered productivity dashboard that transforms raw engineering metrics into meaningful insights and recommended actions.

## 📌 Problem Statement

Engineering teams often track metrics such as lead time, cycle time, deployment frequency, bug rate, and PR throughput.

However, raw numbers alone do not explain:

- Why performance changed
- What bottlenecks exist
- What actions should be taken next

This MVP solves that gap by converting metrics into decision-support insights.

---

## ✨ Features

### 👨‍💻 Individual Contributor Dashboard

- Developer selector
- Dynamic metrics by user
- Lead Time
- Cycle Time
- Bug Rate
- Deployment Frequency
- PR Throughput

### 🤖 AI Insight Engine

Interprets metrics and explains likely causes.

### ✅ Recommended Actions

Suggests practical next steps such as:

- Reduce work in progress
- Improve testing quality
- Maintain review quality
- Optimize delivery flow

### 📊 Premium Dashboard UI

- Responsive layout
- Modern metric cards
- Insight panels
- Clean UX

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript
- CSS

### Backend
- Spring Boot
- Java 17
- Maven

### Deployment
- Render ( LIVE )

- frontend :  https://developer-productivity-mvp-frontend.onrender.com
- backend  :  https://developer-productivity-mvp-backend.onrender.com
- 
##   backend returns  
    https://developer-productivity-mvp-backend.onrender.com/api/developers

---

## 🏗 Architecture

Frontend (React)  
⬇ REST API  
Backend (Spring Boot)  
⬇  
Metrics Engine + Insight Rules

---

## 📷 Screenshots

### Dashboard

![Dashboard](https://github.com/kumarnitinnkr/developer-productivity-mvp/blob/main/mvp_dashboard.png)

### Metrics View

![Metrics](https://github.com/kumarnitinnkr/developer-productivity-mvp/blob/main/mvp_dashboard.png)



---
Backend

cd backend
mvn spring-boot:run

Runs on:
http://localhost:8080


Frontend

cd frontend
npm install
npm start

Runs on:
http://localhost:3000


🔌 API Endpoints
Get Developers
GET /api/developers
Get Metrics
GET /api/metrics/{id}
Get Insights
GET /api/insights/{id}
🎯 Product Thinking

Instead of building a broad unfinished dashboard, this project focuses on one strong user journey:

Developer → Understand Metrics → Receive Guidance → Improve Productivity

📈 Future Enhancements
Real database integration
Authentication
Historical trends
Team manager dashboard
ML-based recommendations
Notifications


## 🚀 Local Setup

### Clone Repo 
https://github.com/kumarnitinnkr/developer-productivity-mvp


👤 Author

Nitin Kumar
