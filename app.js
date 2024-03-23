const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessages,
  addMessage,
  getMessage,
  updateMessage, 
  deleteMessage,
  deleteAllMessages
} = require("./controller");


app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Messages
app.get("/messages", getMessages);

// POST a new message
app.post("/messages", addMessage);

// GET a single message
app.get("/messages/:id", getMessage);

// Update message using PUT
app.put("/messages/:id", updateMessage);

// DELETE a message
app.delete("/messages/:id", deleteMessage);

// DELETE all messages
app.delete("/messages", deleteAllMessages);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});