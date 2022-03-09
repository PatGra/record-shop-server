import express from 'express';
import cors from 'cors';
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';
import ordersRouter from './routes/orders.routes.js';
import {connectMongoose} from './database-mongoose.js';
import {} from 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI =process.env.DB_URI

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