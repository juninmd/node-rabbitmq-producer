import * as amplib from 'amqplib';
import configs from '../configs';

export default class Rabbit {
  private static instance: Rabbit;

  private channel: amplib.Channel;

  private constructor() { };

  public static getInstance(): Rabbit {
    if (!Rabbit.instance) {
      Rabbit.instance = new Rabbit();
    }
    return Rabbit.instance;
  }

  public async getChannel() {
    if (!this.channel) {
      const connection = await amplib.connect(configs.rabbitmq);
      this.channel = await connection.createChannel();
    }
    return this.channel;
  }

}