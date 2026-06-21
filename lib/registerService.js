// lib/registerService.js
// Future-proof abstraction: switch persistence implementation here only.

import { saveToGoogleSheet } from "@/lib/googleSheetService";

export async function saveStudent(data) {
  // For now, persist into Google Sheets.
  console.log("Saving student data to Google Sheet:", data);
  return await saveToGoogleSheet(data);

  // FUTURE (MongoDB) migration example:
  // import Registration from "@/models/Student" or a dedicated model.
  // return await Registration.create(data);
}

