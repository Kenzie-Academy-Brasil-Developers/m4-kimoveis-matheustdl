import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './error';
import userRoutes from './routes/users.routes';
import loginRouter from './routes/login.routes';
import realEstateRoutes from './routes/realEstate.routes';
import categoriesRoutes from './routes/categories.routes';
import schedulesRoutes from './routes/schedules.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRouter);
app.use('/realEstate', realEstateRoutes);
app.use('/categories', categoriesRoutes);
app.use('/schedules', schedulesRoutes);

app.use(handleErrors);

export default app;
