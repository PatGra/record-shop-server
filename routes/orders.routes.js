import { Router } from 'express';
import { getOrders, addOrder, getOrderById, deleteOrder } from '../controller/orders.controller.js';

const router = new Router();

router.route('/orders')
    .get(getOrders)
    .post(addOrder);

router.route('/orders/:id')
    .get(getOrderById)
    .delete(deleteOrder);

export default router;