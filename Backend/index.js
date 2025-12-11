import express from 'express'
import cors from 'cors'
import connectDB from './services/mongo.js'
import dotenv from 'dotenv';
dotenv.config()
import multer from 'multer';
import userrouter from './routes/authRoutes.js';
import weeklyConceptRouter from "./routes/weeklyConceptRoutes.js";
import { protect } from './middleware/auth.js';




const upload = multer();
const app = express();
app.use(cors());

connectDB().catch(err => console.error('DB connection error:', err));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

app.get('/', (req, res) => {
    res.send('API is running....');
})

app.cors = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use('/api/admin', userrouter);
app.use("/api/greenbyte",weeklyConceptRouter);



app.listen(PORT, () => console.log("Server Started on port", PORT));