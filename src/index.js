const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const User = require('./models/user');
const main = async  () => {
    // const task = await Task.findById('5df6f034b9a41946d1e497c3');
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5df6ef1a7c09b92e87cd57ba');
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);
};
main()
app.listen(port, () => {
    console.log('Server is up on port' + port)
});