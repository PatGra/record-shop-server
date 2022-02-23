import express from 'express';
import cors from 'cors';
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';
import ordersRouter from './routes/orders.routes.js';
import {connectMongoose} from './database-mongoose.js'

const mongoose= require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI ="mongodb://localhost:27017"

connectMongoose(DB_URI)

app.use(cors()); // <- unsicher
app.use(express.json());


app.use(recordsRoutes);
app.use(usersRouter);
app.use(ordersRouter)


// Start server
app.listen(PORT, () => {
    console.log('Server läuft auf Port: ' + PORT);
});