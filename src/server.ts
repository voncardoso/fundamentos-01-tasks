import 'dotenv/config';
import express from 'express';
import taskRouter from "./routes/task.ts";
import usersRouter from "./routes/users.ts";

const app = express();
const port = 3333;

app.use(express.json());

app.use('/task', taskRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});