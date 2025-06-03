
import { Channel, Connection , connect } from "amqplib";
import rabbitmqConfig from "../../config/rabitmq.config";
import Consumer from "./consumer";
import Producer from "./producer";

class RabbitMQClient {
  private constructor() { }
  private static instance: RabbitMQClient;
  private isInitialized = false;

  private producer: Producer | undefined;
  private consumer: Consumer | undefined;
  private connection: Connection | undefined;
  private producerChannel: Channel | undefined;
  private consumerChannel: Channel | undefined;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new RabbitMQClient();
    }
    return this.instance;
  }

  async initialize() {
    if (this.isInitialized) {
      return;
    }
    try {
      this.connection = await connect(rabbitmqConfig.rabbitMQ.url);

      this.producerChannel = await this.connection.createChannel();
      this.consumerChannel = await this.connection.createChannel();
      if (!this.producerChannel || !this.consumerChannel) {
        throw new Error("Channels are not initialized");
      }
      const { queue: rpcQueue } = await this.consumerChannel.assertQueue(
        rabbitmqConfig.rabbitMQ.queues.userQueue,
        { exclusive: true }
      );
  
      
     
      this.producer = new Producer(this.producerChannel);
      this.consumer = new Consumer(this.consumerChannel, rpcQueue);
      
      this.producer = new Producer(this.producerChannel);
      this.consumer = new Consumer(this.consumerChannel, rpcQueue);

      this.consumer.consumeMessages();

      this.isInitialized = true;
    } catch (error) {
      console.log("rabbitmq error...", error);
    }
  }

  async produce(data: any, correlationId: string, replyToQueue: string) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    return await this.producer?.produceMessages(
      data,
      correlationId,
      replyToQueue
    );
  }

}

export default RabbitMQClient.getInstance();