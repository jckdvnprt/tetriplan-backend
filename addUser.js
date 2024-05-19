const { MongoClient } = require("mongodb");

// Connection string with the password
const uri =
  "mongodb+srv://admin:tetriplan@cluster0.spo41rp.mongodb.net/tetriplan-users";

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Specify database and collection
    const database = client.db(); // No need to specify database name here
    const collection = database.collection("tetriplan-users"); // Use the correct collection name

    // New user data
    const user = {
      userID: "12345",
      username: "johndoe",
      email: "johndoe@example.com", // This field is optional
    };

    // Insert the new user document
    const result = await collection.insertOne(user);
    console.log(
      `New user inserted with the following id: ${result.insertedId}`
    );

    // Example: Find the inserted user
    const query = { userID: "12345" };
    const findResult = await collection.findOne(query);
    console.log("Found user:", findResult);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
