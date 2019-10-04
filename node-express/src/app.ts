import express, {Application, Response, Request, NextFunction} from 'express';
const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello');
});


app.listen(3000, () => console.log(('Server is Running')));
