import express from 'express';
const router = express.Router();
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from '../controllers/todoController.js';

router
  .get('/', getAll)
  .get('/:id', getById)
  .post('/', create)
  .put('/:id', update)
  .delete('/:id', remove);

export default router;
