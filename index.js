const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple CRUD server is Running");
});

// simpleDBuser
// AGUM5LLrDFw1g1QR

// const uri =
//   "mongodb+srv://simpleDBuser:<db_password>@crudsimpleserver0.ce67hnj.mongodb.net/?appName=CRUDsimpleServer0";

const uri =
  "mongodb+srv://simpleDBuser:AGUM5LLrDFw1g1QR@crudsimpleserver0.ce67hnj.mongodb.net/?appName=CRUDsimpleServer0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Simple CRUD server is running on port ${port}`);
});

/* async function run() {
    // await 
}

run().catch(console.dir)
 */

/* ''
1. at least one user
2. set uri with user and password
3. create a mongodb client
4. add a run function to connect to the database 
5. use try finally inside it to connect the client
6. ping the database to see the server is alive or not 


*/
