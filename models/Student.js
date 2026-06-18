import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    studentClass: { type: String, required: true, trim: true },
    schoolName: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    studentWhatsapp: { type: String, required: true, trim: true },
    parentWhatsapp: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true},
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
