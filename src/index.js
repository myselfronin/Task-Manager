const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disable')
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const jwt = require('jsonwebtoken');
//
// const myFunction = async () => {
//     const token = jwt.sign( { _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'});
//     console.log(token);
//
//     const data =jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// };
// myFunction();

app.listen(port, () => {
    console.log('Server is up on port' + port)
});