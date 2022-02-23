import db from '../database.js';
const usersModel = require('../models/users.model.js')

export const getUsers = (req, res) => {
    const users = db.data.users;
    res.json(users);
};

export const getUserById = (req, res) => {
    const { id } = req.params.id;

    const user = db.data.users.find((entry) => entry.id === parseInt(id, 10));
    if (!user) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(user);
};

export const addUser = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.title || !data.artist || !data.year || !data.price) {
        return res.status(400).send('Falsche Daten');
    }
    
    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    };

    db.data.users.push(user);
    //
    await db.write(); // async

    res.send(user);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params.id;
    const user = db.data.users.find((entry) => entry.id === parseInt(id, 10));
    if (!user) {
        return res.status(400).send('Nicht gefunden');
    }
    db.data.users = db.data.users.filter((entry) => entry.id !== id);
    await db.write(); // async

    res.json(user);
}