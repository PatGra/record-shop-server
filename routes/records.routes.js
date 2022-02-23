import { Router } from 'express';
import { getRecords, addRecord, getRecordById, deleteRecord } from '../controller/records.controller.js';

const router = new Router();

router.route('/records')
    .get(getRecords)
    .post(addRecord);

router.route('/records/:id')
    .get(getRecordById)
    .delete(deleteRecord);


export default router;