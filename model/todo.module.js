const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema(
    {
        text:
            {
                type: String,
                required: true,
                trim: true,
                minlength: 3,
                max: 255,
            },
        completed:
            {
                type: Boolean,
                required: false,
                default: false,
            },
        createdAt:
            {
                type: Date,
                default: Date.now
            }
    });

const TodoModule = mongoose.model("TodoModule", todoSchema);

module.exports = TodoModule;
