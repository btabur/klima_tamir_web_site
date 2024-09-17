import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

console.log(MONGODB_URL);


const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log('Already connected');
    return;
  }

  if (connectionState === 2) {
    console.log('Connecting...');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL, {
      dbName: "klima_tamir",  // Veritabanı adınız doğru mu?
      serverSelectionTimeoutMS: 5000,  // 5 saniye zaman aşımı
      connectTimeoutMS: 10000,  // 10 saniye bağlantı zaman aşımı
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error: ", error);
  }
};

export default connect;
