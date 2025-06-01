import  express  from 'express';
import cors from 'cors';
import authRoutes from './Routes/routes.js';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});
import './Db/db.config.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes)




// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));