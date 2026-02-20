const express = require("express");
const {
    addExpanse,
    getAllExpanse,
    deleteExpanse,
    downloadExpanseExcel
} = require("../controllers/expanseController");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/add", protect, addExpanse);
router.get("/get", protect, getAllExpanse);
router.get("/downloadExcel",protect, downloadExpanseExcel);
router.delete("/:id",protect,deleteExpanse);


module.exports = router;