import { Router } from 'express';

const usersRouter = new Router();

usersRouter.get('/users', (req, res) => {
    res.send('This is GET /users');
});

export default usersRouter;