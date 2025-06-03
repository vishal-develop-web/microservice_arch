import { Channel } from "amqplib";
import EventEmitter from "events";


class Consumer {
    private channel: Channel;
    private replyQueueName: string;
    private eventEmitter: EventEmitter;

    constructor(channel: Channel, replyQueueName: string, eventEmitter: EventEmitter) {
        this.channel = channel;
        this.replyQueueName = replyQueueName;
        this.eventEmitter = eventEmitter;
    }

    public async consumeMessage() {
        try {
            await this.channel.consume(this.replyQueueName, (msg) => {
                if (msg !== null) {
                    this.eventEmitter.emit(msg.properties.correlationId, msg);
                }
            }, { noAck: true });
            console.log(`Consumer is listening on queue: ${this.replyQueueName}`);
        } catch (error) {
            console.error("Error consuming message:", error);
            this.eventEmitter.emit('error', {
                message: "Error consuming message",
                error: error
            });
        }
    }
}

export default Consumer;