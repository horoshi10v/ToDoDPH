const Category = require('../models/Category');

// Controller functions
const categoryController = {
    getAllCategory: async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (category) {
                res.json(category);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    createCategory: async (req, res) => {
        const category = new Category({
            name: req.body.name
        });
        try {
            const newCategory = await category.save();
            res.status(201).json(newCategory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (category) {
                category.name = req.body.name;
                const updatedCategory = await category.save();
                res.json(updatedCategory);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (category) {
                await category.remove();
                res.json({ message: 'Category deleted' });
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = categoryController;
