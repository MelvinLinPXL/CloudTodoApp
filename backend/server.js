require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const healthRoutes = require('./routes/health.routes');
const todoRoutes = require('./routes/todo.routes');
const carrouselRoutes = require('./routes/carrousel.routes');
const db = require('./db');
const PORT = 8090;

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/todo', cors(), todoRoutes);
app.use('/carrousel', cors(), carrouselRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
