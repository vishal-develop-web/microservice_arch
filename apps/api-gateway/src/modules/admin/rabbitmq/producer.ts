import { Channel } from "amqplib";
import { randomUUID } from "crypto";
import EventEmitter from "events";
import rabbitmqConfig from "../../../config/rabbitmq.config";


class Producer {
    private channel: Channel;
    private replyQueueName: string;
    private eventEmitter: EventEmitter;

    constructor(channel: Channel, replyQueueName: string, eventEmitter: EventEmitter) {
        this.channel = channel;
        this.replyQueueName = replyQueueName;
        this.eventEmitter = eventEmitter;
    }
    public produceMessage(data: any, operation: string): Promise<any> {
        try {
            const uuid = randomUUID();
            this.channel.sendToQueue(rabbitmqConfig.rabbitMQ.queues.adminQueue, Buffer.from(JSON.stringify(data)), {
                correlationId: uuid,
                replyTo: this.replyQueueName,
                expiration: '60000', // 60 seconds
                headers: {
                    function: operation
                }
            })
            return new Promise((res, rej) => {
                this.eventEmitter.once(uuid, async (data) => {

                    const reply = JSON.parse(data.content.toString());

                    if (reply.error) {
                        rej(new Error("RabbitMQ error"));
                    } else {
                        res(data);
                    }
                });
            });

        } catch (error) {
            console.error("Error producing message:", error);
            this.eventEmitter.emit('error', {
                message: "Error producing message",
                error: error,
                operation: operation,
                data: data
            });
            return Promise.reject(error); // ✅ Fix: Return a rejected Promise
        }
    }


}


export default Producer;