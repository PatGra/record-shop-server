import express from 'express';
import cors from 'cors';

import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';

const corsMiddleware = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    next();
  };

const app = express();
const PORT = 4000;

app.use(cors())
app.use(express.json());
app.use(recordsRoutes);
app.use(usersRouter);


// Start server
app.listen(PORT, () => {
    console.log('Server läuft');
});