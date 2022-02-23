import db from '../database.js';
const ordersModel = require('../models/orders.model.js')

export const getOrders = async (req, res) => {
    //const orders = db.data.orders;
    const orders = await ordersModel.find({})
    res.json(orders);
};

export const getOrderById = (req, res) => {
    const { id } = req.params.id;

    const order = db.data.orders.find((entry) => entry.id === parseInt(id, 10));
    if (!order) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(order);
};

export const addOrder = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.title || !data.artist || !data.year || !data.price) {
        return res.status(400).send('Falsche Daten');
    }
    
    const order = {
        recordId: data.recordId,
        quantity: data.quantity,
    };

    db.data.orders.push(order);
    //
    await db.write(); // async

    res.send(order);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params.id;
    const order = db.data.orders.find((entry) => entry.id === parseInt(id, 10));
    if (!order) {
        return res.status(400).send('Nicht gefunden');
    }
    db.data.orders = db.data.orders.filter((entry) => entry.id !== id);
    await db.write(); // async

    res.json(order);
}