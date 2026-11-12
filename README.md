# 🎭 Joke Explorer

A **Node.js Capstone Project** that demonstrates full-stack web development by integrating a live public REST API into an Express.js application rendered with EJS templates.

---

## 📸 What It Does

Every time a user visits the homepage (`/`), the server uses **Axios** to call the [JokeAPI v2](https://jokeapi.dev/) and fetches a random, safe-mode joke. The retrieved data is then passed into an **EJS** template and rendered as a polished, dynamic web page. If the API is unavailable, a friendly error message is shown instead.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ES Modules) |
| Web Framework | Express.js |
| HTTP Client | Axios |
| Templating | EJS (Embedded JavaScript) |
| Public API | [JokeAPI v2](https://v2.jokeapi.dev/) |

---

## 📁 Project Structure

```
joke-explorer/
├── views/
│   └── index.ejs       # EJS template (HTML + dynamic data)
├── index.js            # Express server + Axios API call
├── package.json        # Project metadata & dependencies
└── README.md           # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed:

```bash
node -v
npm -v
```

### 1. Clone or Download the Project

```bash
# If you have git:
git clone <your-repo-url>
cd joke-explorer

# Or simply navigate into the downloaded folder:
cd joke-explorer
```

### 2. Install Dependencies

```bash
npm i
```

This installs:
- `express` — web server framework
- `axios` — HTTP client for calling the JokeAPI
- `ejs` — templating engine
- `nodemon` — dev tool that auto-restarts on file changes (devDependency)

### 3. Run the Server

**For development** (auto-restarts on save — recommended):

```bash
nodemon index.js
```

**For a one-time run:**

```bash
node index.js
```

### 4. Open in Browser

```
http://localhost:3000
```

Click **"Get Another Joke"** to fetch a fresh one!

---

## ⚙️ How It Works

1. A `GET /` request hits the Express router in `index.js`.
2. Inside an `async` handler, **Axios** calls `https://v2.jokeapi.dev/joke/Any?safe-mode`.
3. The JSON response (`joke` object) is passed to `res.render("index", { joke, error })`.
4. EJS evaluates the template: if `error` is truthy it shows an error card; otherwise it displays the joke content.
5. The browser receives fully-rendered HTML — no client-side JS frameworks needed.

---

## 🌐 API Reference

This project uses the free, no-authentication **JokeAPI v2**:

- **Endpoint:** `GET https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart,single`
- **Docs:** https://jokeapi.dev/

---

## 📄 License

MIT — free to use, modify, and distribute.
