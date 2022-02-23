import { Router } from 'express';
import { getUsers, addUser, getUserById, deleteUser } from '../controller/users.controller.js';

const router = new Router();

router.route('/users')
    .get(getUsers)
    .post(addUser);

router.route('/users/:id')
    .get(getUserById)
    .delete(deleteUser);

export default router;