// ============================================================
// index.js — Main entry point for the Joke Explorer app
// Built with Express.js + Axios + EJS
// ============================================================

// --- 1. Import Dependencies ---
// 'express' is the web framework that handles routing and HTTP requests.
// 'axios'   is the HTTP client used to call the external JokeAPI.
import express from "express";
import axios from "axios";

// --- 2. App Initialisation ---
const app = express();         // Create an Express application instance
const PORT = 3000;             // The port our local server will listen on

// --- 3. Configure EJS as the Templating Engine ---
// EJS (Embedded JavaScript) lets us embed dynamic data into HTML files.
// Express will look for template files inside the "views/" folder by default.
app.set("view engine", "ejs");

// --- 4. Serve Static Files (CSS, images, etc.) ---
// Any file placed in the "public/" folder will be accessible from the browser.
// e.g., /public/style.css → http://localhost:3000/style.css
app.use(express.static("public"));

// ============================================================
// 5. Default GET Route  "/"
//    This is the homepage. When a user visits the root URL,
//    we immediately fetch a fresh joke from JokeAPI and
//    render it inside our EJS template.
// ============================================================
app.get("/", async (req, res) => {

  // We'll populate these variables before rendering.
  let joke = null;      // Will hold the joke object on success
  let error = null;     // Will hold an error message string on failure

  try {
    // --- 5a. Call the JokeAPI ---
    // We request a "Any" category joke in the "twopart" or "single" format.
    // The "safe-mode" flag ensures family-friendly content.
    // Docs: https://jokeapi.dev/
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart,single"
    );

    // axios puts the parsed JSON body on response.data
    joke = response.data;

    // Log a quick summary to the server console (useful for debugging)
    console.log(`✅ Fetched joke #${joke.id} [${joke.type}] from JokeAPI`);

  } catch (err) {
    // --- 5b. Error Handling ---
    // If the API is down or the network fails, we catch the error here
    // so the whole server doesn't crash.

    // Log the full error on the server for developer visibility
    console.error("❌ Failed to fetch joke from JokeAPI:", err.message);

    // Set a friendly, human-readable message to show on the frontend
    error = "Oops! We couldn't fetch a joke right now. Please try again later.";
  }

  // --- 5c. Render the EJS Template ---
  // res.render() compiles views/index.ejs and sends the HTML to the browser.
  // We pass 'joke' and 'error' as template variables (available as EJS locals).
  res.render("index", { joke, error });
});

// ============================================================
// 6. Start the Server
//    app.listen() binds the Express app to the specified PORT
//    and begins accepting incoming connections.
// ============================================================
app.listen(PORT, () => {
  console.log(`🚀 Joke Explorer is running at http://localhost:${PORT}`);
});
