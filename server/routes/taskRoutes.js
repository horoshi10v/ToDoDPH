const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTask);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id/complete', taskController.completeTask);
router.get('/:category/',taskController.taskByCategory);

module.exports = router;
