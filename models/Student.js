import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true },
    className: { type: String, required: true, trim: true },
    schoolName: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    studentWhatsapp: { type: String, required: true, trim: true },
    parentWhatsapp: { type: String, default: "0000000000", trim: true },
    email: { type: String, default: "0000000000", trim: true},
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
