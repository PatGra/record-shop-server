import db from '../database.js';
import Records from '../model/records.model.js'


export const getRecords = async(req, res) => {
    //const records = db.data.records;
    const records = await Records.find({})
    res.json(records);
};

export const getRecordById = async(req, res) => {
    const { id } = req.params;

   // const record = db.data.records.find((rec) => rec.id === parseInt(id, 10));
   const record = await Records.findByID(id)
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
    try{
        const record = await Records.deleteOne({_id: id});
        res.json(record)
    } catch (err){
        return res.status(400).send('Nicht gefunden');
    }
}