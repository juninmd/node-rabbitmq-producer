import MessageRabbit from '../rabbit/message.rabbit';

import * as express from 'express';
import { Queues } from '../enums';
const router = express.Router();
const messageRabbit = new MessageRabbit();

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  await messageRabbit.sendMessage(Queues.log, 'batatinha');
  await messageRabbit.sendMessage(Queues.order, 'batatinha123');
  return res.send(body).status(200);
};

router.get('/', getPing);

export default router;
