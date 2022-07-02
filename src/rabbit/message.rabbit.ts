import { Queues } from '../enums';
import Rabbit from '.'
export default class MessageRabbit {

  async sendMessage(queue: Queues, message: string) {
    const ch = await Rabbit.getInstance().getChannel();
    await ch.assertQueue(queue, { durable: true });
    ch.sendToQueue(queue, Buffer.from(message));
  }
}