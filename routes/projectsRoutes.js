const express = require("express")
const router = express.Router()
const {getProjects, updateProject, createProject, deleteProject} = require("../controllers/projectsControllers")


router.route("/").get(getProjects).post(createProject)
router.route("/:id").put(updateProject).delete(deleteProject)

module.exports = router;