import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (_, response) => {
  response.json({ message: 'Hello world!' });
});

export default appointmentsRouter;
