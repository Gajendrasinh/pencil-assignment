const { MONGO_URI } = process.env;

const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {
        console.log('Error in database connection', err.message);
    } else {
        console.log('Database is connected');
        databaseSeeder();
    }
}); 

const client = mongoose.connection;


 async function databaseSeeder() {
    try {
        const collection = await client.collection('roles');
        const roleList = collection.find();
        if(await roleList.count() > 1) {
           return;
        }
        collection.drop();
        const roles = [{name: 'admin'}];
        collection.insertMany(roles);
        console.log('Database is seeded successfully');
    } catch (error) {
        console.log(error);
    }
}

client.on('error', (err) => {
    console.log( `Mongo db connection error: ${err}`);
});


module.exports = client;