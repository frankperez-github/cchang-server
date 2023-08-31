const Project = require("../models/projectsModel")

const getProjects = async (req, res)=>{
    const projects = await Project.find()
    res.json(projects)
}

const createProject = async (req,res)=>{
    const {title, principalImage, secondaryImages, description, category, day, month, year, stars, reviews} = req.body

    if (!(title && principalImage && description && day && month && year && stars))
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

const updateProject = async (req,res)=>{
    await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(req.body)
}

const deleteProject = async (req, res)=>{
    const project = Project.findById(req.params.id)
    await Project.findByIdAndDelete(req.params.id)
    res.send(project+" deleted")
}

module.exports = {getProjects, updateProject, createProject, deleteProject}