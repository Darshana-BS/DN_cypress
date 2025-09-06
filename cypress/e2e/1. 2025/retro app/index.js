const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// Load service account credentials
const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, "credentials.json"))
);

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

const SPREADSHEET_ID = "11mArhOOyMiCGwbuco7ftl5GB91zj6TlTthYhBnHqpz4";

async function appendRow(wentWell, improve, action) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:C", // assumes data goes into columns A, B, C
    valueInputOption: "RAW",
    resource: {
      values: [[wentWell, improve, action]],
    },
  });

  console.log("Row added successfully!");
}

// Example call
appendRow("Teamwork improved", "Need better testing", "Set up CI/CD pipeline");
