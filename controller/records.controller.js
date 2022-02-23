import db from '../database.js';
const recordsModel = require('../models/records.model.js')

export const getRecords = (req, res) => {
    const records = db.data.records;
    res.json(records);
};

export const getRecordById = (req, res) => {
    const { id } = req.params.id;

    const record = db.data.records.find((rec) => rec.id === parseInt(id, 10));
    if (!record) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(record);
};

export const addRecord = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.title || !data.artist || !data.year || !data.price) {
        return res.status(400).send('Falsche Daten');
    }

    const record = {
        title: data.title,
        artist: data.artist,
        year: data.year,
        price: data.price,
        cover: '',
    };

    db.data.records.push(record);
    //
    await db.write(); // async

    res.send(record);
}

export const deleteRecord = async (req, res) => {
    const { id } = req.params.id;
    const record = db.data.records.find((rec) => rec.id === parseInt(id, 10));
    if (!record) {
        return res.status(400).send('Nicht gefunden');
    }
    db.data.records = db.data.records.filter((rec) => rec.id !== id);
    await db.write(); // async

    res.json(record);
}