import * as amplib from 'amqplib';
import configs from '../configs';

export default class Rabbit {
  private static instance: Rabbit;

  private channel: Promise<amplib.Channel>;

  // Construtor privado: a instância única é controlada por getInstance().
  private constructor() {
    // intencionalmente vazio
  }

  public static getInstance(): Rabbit {
    if (!Rabbit.instance) {
      Rabbit.instance = new Rabbit();
    }
    return Rabbit.instance;
  }

  // Guarda a promise (não o canal) para que chamadas concorrentes reusem
  // a mesma conexão em vez de abrir várias. Falha limpa o cache para retry.
  public getChannel(): Promise<amplib.Channel> {
    if (!this.channel) {
      this.channel = amplib
        .connect(configs.rabbitmq)
        .then((connection) => connection.createChannel())
        .catch((error) => {
          this.channel = undefined;
          throw error;
        });
    }
    return this.channel;
  }
}
