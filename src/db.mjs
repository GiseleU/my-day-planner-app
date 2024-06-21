import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const uri = "mongodb+srv://ugisele02:<password>@day-planner-app.wppzjsy.mongodb.net/?retryWrites=true&w=majority&appName=day-planner-app";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }
}

export { connectToDatabase };