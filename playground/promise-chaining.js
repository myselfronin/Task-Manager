require('../src/db/mongoose');

const User =require('../src/models/user');

User.findByIdAndUpdate('5dcb65e0fa05f17d5c012720', {
    age: 1
}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
});
