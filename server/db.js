const { MongoClient } = require('mongodb')

async function main() {
    const uri = "mongodb+srv://Admin:admin@cluster0.9rp5m.mongodb.net/USER?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    try{
        await client.connect()
        await createListing(client, {
            
        })
    }

    catch(e){
        console.error(e)
    }finally{
        await client.close()
    }
}

main().catch(console.error)

async function findMultipleListing(client, {
    const result = await client.db("Admin").collection("users").insertMany(newListing);
})

async function createListing(client, newListing){
   await client.db("Admin").collection("users").insertOne(newListing)
   console.log("new listing created with the following id: ${result.insertId}")
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases()

    console.log("Databases:")
    databasesList.databases.forEach(db =>{
        console.log(`-${db.name}`)
    })
}
