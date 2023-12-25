// import mongoose from "mongoose";

// const connection = {
//   isConnected: false,
// };

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }
//   const db = await mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("db", db);
//   connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect;



// Example: db.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default dbConnect;

