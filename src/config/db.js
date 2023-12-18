import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db", db);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
