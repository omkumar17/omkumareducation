// lib/googleSheetService.js
// Lightweight persistence layer using Google Sheets via Google Apps Script.

export async function saveToGoogleSheet(data) {
  const url = process.env.GOOGLE_SCRIPT_URL;

  if (!url) {
    throw new Error(
      "GOOGLE_SCRIPT_URL is not configured. Add it to your environment variables."
    );
  }

  // Apps Script expects JSON in the request body.
  const payload = {
    studentName: data.studentName,
    className: data.className,
    schoolName: data.schoolName,
    city: data.city,
    studentWhatsapp: data.studentWhatsapp,
    parentWhatsapp: data.parentWhatsapp,
    email: data.email, // Optional field, can be empty string if not provided.
    createdAt: data.createdAt,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to save to Google Sheet (HTTP ${res.status}). ${text}`
    );
  }

  // Apps Script should return a JSON body like: { success: true }
//   const result = await res.json().catch(() => ({}));

const text = await res.text();

console.log("Response from Apps Script:");
console.log(text);

return;

// console.log("Apps Script Response:", result);

// if (!result.success) {
//   throw new Error(
//     result.error || "Google Sheet save failed."
//   );
// }

// return { success: true };

//   if (!result.success) {
//     throw new Error("Google Sheet save failed. Please try again.");
//   }

//   return { success: true };
}

