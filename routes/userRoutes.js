const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers")

router.post("/users", userController.createApplicant);
router.get("/users", userController.getApplicants);
router.put("/users/:id", userController.updateApplicant);
router.delete("/users/:id", userController.deleteApplicant);

module.exports = router;
