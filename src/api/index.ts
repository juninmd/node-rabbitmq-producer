import MessageRabbit from '../rabbit/message.rabbit';

import * as express from 'express';
import { Queues } from '../enums';
const router = express.Router();
const messageRabbit = new MessageRabbit();

const getPing = async (_req, res) => {
  try {
    await messageRabbit.sendMessage(Queues.log, 'batatinha');
    await messageRabbit.sendMessage(Queues.order, 'batatinha123');
    return res.status(200).send({ message: 'hello' });
  } catch (error) {
    console.error(`getPing failed: ${(error as Error).message}`);
    return res.status(500).send({ message: 'rabbitmq unavailable' });
  }
};

router.get('/', getPing);

export default router;
