import { Router } from 'express';
import { getUsers,signUpUser,logInUser, getUserById, deleteUser } from '../controller/users.controller.js';


const router = new Router();

router.route('/users')
    .get(getUsers)
    .post(signUpUser)
    .post(logInUser);

router.route('/users/:id')
    .get(getUserById)
    .delete(deleteUser);

export default router;