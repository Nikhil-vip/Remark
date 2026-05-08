const express = require('express');
const router = express.Router(); // Fix 1: 'Router' must be capitalized and called as a function ()
const Messages = require('./modles/message.js');

router.get('/dash', async (req, res) => {
  try {
    const old_messages = await Messages.find({});
    res.status(200).send(old_messages);
  } catch (err) {
    console.log("There was an error:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/add', async (req, res) => {
  try {
    const { name, message } = req.body;

    // Fix 2: Changed 'message' to 'Messages' to match your model import at the top
    const new_message = new Messages({ name, message });

    await new_message.save();
    res.status(201).json(new_message);
  } catch (err) {
    // Fix 3: Added the missing comma in console.log
    console.log("the error was:", err);
    res.status(400).json({ error: "Failed to add message" });
  }
});

module.exports = router;