import { Channel, ChannelModel, Connection, connect } from "amqplib";

import Consumer from "./consumer";
import Producer from "./producer";
import { EventEmitter } from "events";
import rabbitmqConfig from "../config/rabbitmq.config";

class RabbitMQClient {
    private constructor() { }
    private static instance: RabbitMQClient;
    private isInitialized = false;

    private producer: Producer | undefined;
    private consumer: Consumer | undefined;
    private connection: ChannelModel | undefined;
    private producerChannel: Channel | undefined;
    private consumerChannel: Channel | undefined;
    private eventEmitter: EventEmitter | undefined;

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

            const { queue: rpcQueue } = await this.consumerChannel.assertQueue(
                rabbitmqConfig.rabbitMQ.queues.adminQueue,
                { exclusive: true }
            );

            const { queue: replyQueueName } = await this.consumerChannel.assertQueue(
                "",
                { exclusive: true }
            );
            this.eventEmitter = new EventEmitter();

            // this.producer = new Producer(this.producerChannel);
            this.producer = new Producer(
                this.producerChannel,
                replyQueueName,
                this.eventEmitter
            );
            // this.consumer = new Consumer(this.consumerChannel, rpcQueue);
            this.consumer = new Consumer(
                this.consumerChannel,
                rpcQueue,
                replyQueueName,
                this.eventEmitter
            );

            this.consumer.consumeMessagess();
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

    //

    async produceuserMessage(data: any, operation: string) {
        if (!this.isInitialized) {
            await this.initialize();
        }
        return await this.producer?.produceUserMessages(data, operation);
    }
}

export default RabbitMQClient.getInstance();
