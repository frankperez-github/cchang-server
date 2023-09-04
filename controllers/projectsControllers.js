const Project = require("../models/projectsModel")

const getProjects = async (req, res)=>{
    const projects = await Project.find()
    res.json(projects)
}

const createProject = async (req,res)=>{
    const {title, principalImage, secondaryImages, description, category, day, month, year, stars, reviews} = req.body

    if (!(title && principalImage && description && day && month && year))
    {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const project = await Project.create({
        principalImage,
        secondaryImages,
        title,
        description,
        category,
        day,
        month,
        year,
        stars,
        reviews
    })
    res.json(project)
}
const getProject = async (req,res)=>{
    const projects = await Project.findById(req.params.id)
    res.json(projects)
}

const updateProject = async (req,res)=>{
    const updated = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updated)
}

const deleteProject = async (req, res)=>{
    const deleted = Project.findById(req.params.id)
    await Project.findByIdAndDelete(req.params.id)
    res.json(deleted)
}

module.exports = {getProject, getProjects, updateProject, createProject, deleteProject}