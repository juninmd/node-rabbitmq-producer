import ExchangeRabbit from '../rabbit/message.rabbit';

import * as express from 'express';
import { Queues } from '../enums';
const router = express.Router();
const exchangeRabbit = new ExchangeRabbit();

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  await exchangeRabbit.sendMessage(Queues.log, 'batatinha');
  await exchangeRabbit.sendMessage(Queues.order, 'batatinha123');
  return res.send(body).status(200);
};

router.get('/', getPing);

export default router;
