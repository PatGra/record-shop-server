import db from '../database.js';

export const getRecords = (req, res) => {
    const records = db.data.records;
    res.json(records);
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