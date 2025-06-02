import { Channel, ChannelModel, connect } from "amqplib";
import EventEmitter from "events";
import Producer from "./producer";
import Consumer from "./consumer";
import rabbitmqConfig from "../../../config/rabbitmq.config";



class AdminRabbitMQClient {

    private static instance: AdminRabbitMQClient;
    private isInitialized = false;

    private producer: Producer | undefined;
    private consumer: Consumer | undefined;
    private connection: ChannelModel | undefined;
    private producerChannel: Channel | undefined;
    private consumerChannel: Channel | undefined;
    private eventEmitter: EventEmitter | undefined;

    private constructor() {

    }

    public static getInstance(): AdminRabbitMQClient {
        if (!AdminRabbitMQClient.instance) {
            AdminRabbitMQClient.instance = new AdminRabbitMQClient();
        }
        return AdminRabbitMQClient.instance;
    }
    public async initialize(): Promise<void> {
        if (this.isInitialized) {
            console.warn("RabbitMqClient is already initialized.");
            return;
        }
        this.connection = this.connection = await connect(rabbitmqConfig.rabbitMQ.url);;
        this.producerChannel = await this.connection.createChannel();
        this.consumerChannel = await this.connection.createChannel();
        const { queue: replyQueueName } = await this.consumerChannel.assertQueue("", { exclusive: true });
        this.eventEmitter = new EventEmitter();
        this.producer = new Producer(this.producerChannel, replyQueueName, this.eventEmitter);
        this.consumer = new Consumer(this.consumerChannel, replyQueueName, this.eventEmitter);
        await this.consumer.consumeMessage();
        this.isInitialized = true;
    }
    async produce(data: any, operation: string) {
        if (!this.isInitialized) {
            await this.initialize()
        }
        try {
            return await this.producer?.produceMessage(data, operation);
        } catch (error) {
            console.error("Error producing message:", error);
            this.eventEmitter?.emit('error', {
                message: "Error producing message",
                error: error,
                operation: operation,
                data: data
            });
            throw error;
        }
    }
}

export default AdminRabbitMQClient.getInstance();