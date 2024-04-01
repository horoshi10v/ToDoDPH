const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' // Reference the Category model
    },
    is_completed: Boolean,
});


module.exports = mongoose.model('Task', TaskSchema);
