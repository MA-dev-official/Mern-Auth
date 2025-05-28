import mongoose from 'mongoose';

function dbCon() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.error(`DB connection failed: ${err.message}`);
    process.exit(1);
  });
}

dbCon();
