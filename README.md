# ☕ Tech Café - Apache Container Landing Page

This project is a landing page for a gourmet coffee shop, developed to practice front-end development skills and container orchestration with Docker.

<br>

## 🚀 Technologies Used

* **Docker & Docker Compose:** For containerization and environment isolation.
* **Apache HTTP Server (httpd):** High-performance web server to host the application.
* **HTML5 & CSS3:** Semantic structure, layout, and styling.
* **JavaScript:** Interaction logic for the coffee preparation simulation and smooth navigation.

<br>

## 🛠️ Project Architecture

The application runs inside a Docker container using the official Apache image. The volume is mapped so that any changes to the local code are instantly reflected on the server.

> **Note on Volume:** If changes do not appear instantly, use `Ctrl + F5` in your browser to clear the cache. Volume mapping ensures that you don't need to restart the container to see style or structure updates.

<br>

## 🔧 How to Run

1. Make sure you have **Docker** and **Docker Compose** installed.
2. Clone this repository.
3. In the terminal, inside the project folder, run:
   ```bash
   docker-compose up -d
