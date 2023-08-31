const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    principalImage:{
        type: String,
        required: [true, "Please introduce a principal image"]
    },
    secondaryImages:{
        type: Array,
        required: [true, "Introduce at least one secondary image"]
    },
    title:{
        type: Array,
        required: [true, "Introduce the title"]
    },
    description: {type: String},
    category: {type: String},
    day: {type: Number},
    month: {type: Number},
    year: {type: Number},
    stars: {type: Number},
    reviews: {type: Array}
})

module.exports = mongoose.model("project", projectSchema)