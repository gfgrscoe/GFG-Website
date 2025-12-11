// models/weeklyConcept.js
import mongoose from "mongoose";

const weeklyConceptSchema = new mongoose.Schema(
  {
    week: { type: String, required: true },          // "Week 1 - December 2025"
    category: { type: String, required: true },      // "Data Structures"
    title: { type: String, required: true },         // "Binary Search Trees"
    difficulty: { type: String, default: "Beginner" },
    description: { type: String, required: true },

    keyPoints: [{ type: String }],

    code: { type: String }, // code snippet as string

    // better: resources with name + link
    resources: [
      {
        label: { type: String, required: true },   // "GeeksforGeeks Article"
        link: { type: String, required: true },    // "https://www.geeksforgeeks.org/..."
      },
    ],

    // optional but powerful: time based selection
    weekStart: { type: Date }, // e.g. 2025-12-01
    weekEnd: { type: Date },   // e.g. 2025-12-07

    // OR you can simply rely on createdAt (timestamps)
    isFeatured: { type: Boolean, default: false }, // if you want one active concept
  },
  { timestamps: true }
);

const WeeklyConcept = mongoose.model("WeeklyConcept", weeklyConceptSchema);
export default WeeklyConcept;
