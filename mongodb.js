//Crud create read update detele

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
//Destructuring object (which is same as above)
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.getTimestamp());
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Ronin',
    //     age: 24
    // },(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //     })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 22
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents');
    //     }
    //
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Node js tutorial',
    //         completed: false
    //     }, {
    //         description: 'Vue js tutorial',
    //         completed: false
    //     }, {
    //         description: 'Attar Logo Design',
    //         completed: true
    //     }
    // ],(error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents');
    //     } else {
    //         console.log(result.ops);
    //     }
    // })
});
















