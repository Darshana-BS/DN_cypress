const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, "credentials.json"))
);

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

const SPREADSHEET_ID = "11mArhOOyMiCGwbuco7ftl5GB91zj6TlTthYhBnHqpz4";

app.post("/submit", async (req, res) => {
  const { wentWell, improve, action } = req.body;
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "RAW",
      resource: { values: [[wentWell, improve, action]] },
    });

    res.json({ message: "Row added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
