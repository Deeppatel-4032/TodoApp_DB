const express = require("express");
const router = express.Router();
const con = require("../controllers/controllers.js");
const upload = require("../middleware/multer_middleware.js")

router.get("/", con.defaultCon);
router.post("/todoCon", upload.single("uploadFile"), con.todoCon);
router.get("/editCon/:id", con.editCon);
router.post("/updateCon/:id", upload.single("uploadFile"), con.updateCon);
router.get("/deleteCon/:id", con.deleteCon);

module.exports = router;