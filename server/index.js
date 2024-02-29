import express from "express";
import connectToMongo from "./db.js";
import cors from "cors";
import Email from "./emailModel.js";

const app = express();
const port = 8000;

connectToMongo();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the XYZ Industries!");
});

app.post("/email", async (req, res) => {
  const { email } = req.body;

  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).send("Email already exists");
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    res.send("Email saved successfully");
  } catch (error) {
    console.error("Error saving email:", error.message);
    res.status(500).send("Error saving email");
  }
});

app.listen(port, () => {
  console.log(`\n Server listening on port ${port}`);
});
