// routes/weeklyConceptRoutes.js
import express from "express";
import WeeklyConcept from "../models/greenByte.js";
import { protect } from "../middleware/auth.js";// your auth middleware

const router = express.Router();

// CREATE new weekly concept (admin)
router.post("/add",protect, async (req, res) => {
  try {
    const {
      week,
      category,
      title,
      difficulty,
      description,
      keyPoints,
      code,
      resources,
      weekStart,
      weekEnd,
    } = req.body;

    // OPTIONAL: unset previous featured
    await WeeklyConcept.updateMany({}, { $set: { isFeatured: false } });

    const concept = await WeeklyConcept.create({
      week,
      category,
      title,
      difficulty,
      description,
      keyPoints,
      code,
      resources,
      weekStart,
      weekEnd,
      isFeatured: true,
    });

    res.status(201).json({
      success: true,
      message: "Weekly concept created",
      concept,
    });
  } catch (err) {
    console.error("Create Weekly Concept error:", err);
    res.status(500).json({ success: false, message: "Failed to create concept" });
  }
});

// routes/weeklyConceptRoutes.js  (add this below POST)
router.get("/latest", async (req, res) => {
  try {
    // find most recent document
    const concept = await WeeklyConcept.findOne().sort({ createdAt: -1 }).lean();

    if (!concept) {
      return res.status(404).json({ success: false, message: "No concept found" });
    }

    // shape it like your currentWeekConcept object if you want:
    const currentWeekConcept = {
      week: concept.week,
      category: concept.category,
      title: concept.title,
      difficulty: concept.difficulty,
      description: concept.description,
      keyPoints: concept.keyPoints,
      code: concept.code,
      resources: concept.resources, // array of {label, link}
    };

    res.json({ success: true, data: currentWeekConcept });
  } catch (err) {
    console.error("Get latest Weekly Concept error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch concept" });
  }
});


export default router;
