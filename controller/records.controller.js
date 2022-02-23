import db from '../database.js';
import Records from '../model/records.models.js';
const recordsModel = require('../models/records.model.js')

export const getRecords = async(req, res) => {
    //const records = db.data.records;
    const records = await recordsModel.find({})
    res.json(records);
};

export const getRecordById = async(req, res) => {
    const { id } = req.params;

   // const record = db.data.records.find((rec) => rec.id === parseInt(id, 10));
   const record = await recordsModel.findByID(id)
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

    const record = new Records({
        title: data.title,
        artist: data.artist,
        year: data.year,
        price: data.price,
        cover: '',
    });
    await record.save();

   /* const record = {
        title: data.title,
        artist: data.artist,
        year: data.year,
        price: data.price,
        cover: '',
    };

    db.data.records.push(record);
    //
    await db.write(); // async*/

    res.send(record);
}

export const deleteRecord = async (req, res) => {
    const { id } = req.params;
    const record = db.data.records.find((rec) => rec.id === parseInt(id, 10));
    if (!record) {
        return res.status(400).send('Nicht gefunden');
    }
    db.data.records = db.data.records.filter((rec) => rec.id !== id);
    await db.write(); // async

    res.json(record);
}