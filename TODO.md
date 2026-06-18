# TODO - Google Sheets Registration Migration

- [x] 1. Create `lib/googleSheetService.js` to POST registration payload to `process.env.GOOGLE_SCRIPT_URL`.
- [x] 2. Create `lib/registerService.js` with `saveStudent(data)` abstraction (Google Sheets implementation for now).
- [x] 3. Update `lib/validation.js` to use `className` (instead of `studentClass`) and require `studentName`, `className`, `studentWhatsapp`, `parentWhatsapp`.
- [x] 4. Update `components/Register.jsx` to submit `className` and implement requested success flow:
  - show toast "Registration Successful"
  - wait 1 second
  - redirect to WhatsApp group link
  - keep button disabled + spinner while submitting
- [x] 5. Update `app/api/register/route.js` to remove MongoDB, validate with Zod, call `saveStudent()` and return `{ success: true }`.
- [ ] 6. Generate Google Apps Script `doPost(e)` code snippet (for the user to deploy).
- [ ] 7. Quick verification: run lint/build and ensure the registration form posts successfully.

