const { MongoClient } = require("mongodb");

// Connection string with the password
const uri =
  "mongodb+srv://admin:tetriplan@cluster0.spo41rp.mongodb.net/tetriplan-tasks";

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Specify database and collection
    const database = client.db();
    const collection = database.collection("tetriplan-tasks"); // Use the correct collection name

    // New task data
    const task = {
      taskID: "67890",
      userID: "12345", // Foreign key
      taskName: "Walk The Dog",
      description: "I need to walk the dog after work",
      category: "Pets",
      date: "2024-05-19",
      startTime: "17:00",
      endTime: "17:40",
      duration: "30 Minutes",
      completionStatus: false,
      tags: ["important", "urgent"],
      label: "Personal",
      priority: "high",
    };

    // Insert the new task document
    const result = await collection.insertOne(task);
    console.log(
      `New task inserted with the following id: ${result.insertedId}`
    );

    // Example: Find the inserted task
    const query = { taskID: "67890" };
    const findResult = await collection.findOne(query);
    console.log("Found task:", findResult);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
