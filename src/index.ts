import express, { Application, Request, Response } from 'express';

const app:Application = express();


const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');


app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
}
);

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);


const port: number = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

