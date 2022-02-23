import express from 'express';
import cors from 'cors';
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';

const mongoose= require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // <- unsicher
app.use(express.json());

app.use(recordsRoutes);
app.use(usersRouter);


// Start server
app.listen(PORT, () => {
    console.log('Server läuft auf Port: ' + PORT);
});