import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: 'https://l2-assignment-5-server.vercel.app',
    credentials: true,
  }),
);
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

app.use(express.text());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To Meeting Room Booking System!');
});

app.use('/api', router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
