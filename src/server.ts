import express from 'express';
import taskRouter from "./routes/task.ts";

const app = express();
const port = 3333;

app.use('/task', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});