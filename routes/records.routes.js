import { Router } from 'express';
import { getRecords, addRecord } from '../controller/records.controller.js';

const router = new Router();

router.route('/records')
    .get(getRecords)
    .post(addRecord);

// app.delete('/records', ...);

// router.route('/records/:id')
//     .get()
//     .post() // update record
//     .delete();

router.get('/records/top10', (req, res)=> {
    console.log('Not yet implemented');
    res.send('Not yet implemented');
 });

export default router;