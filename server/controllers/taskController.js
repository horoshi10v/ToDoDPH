const Task = require('../models/Task');
const Category = require("../models/Category");


const taskController= {
    getAllTask: async (req, res) => {
        try {
            const task = await Task.find();
            res.json(task);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    createTask: async (req, res) => {
        const task = new Task({
            title: req.body.title,
            category: req.body.category,
            is_completed: false,
        });
        try {
            const newTask = await task.save();
            res.status(201).json(newTask);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    updateTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (task) {
                task.title = req.body.title;
                const updatedTask = await task.save();
                res.json(updatedTask);
            } else {
                res.status(404).json({ message: 'task not found' });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (task) {
                await task.remove();
                res.json({ message: 'task deleted' });
            } else {
                res.status(404).json({ message: 'task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    completeTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (task) {
                task.is_completed = !task.is_completed;
                const updatedTask = await task.save();
                res.json(updatedTask);
            } else {
                res.status(404).json({ message: 'task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    taskByCategory: async (req, res) => {
        try {
            const task = await Task.findByParam(req.params.);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

};
module.exports = taskController;
