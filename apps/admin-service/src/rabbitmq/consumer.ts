import { Channel, ConsumeMessage } from "amqplib";

import EventEmitter from "events";
import MessageHandler from "./message_handler";

export default class Consumer {
    constructor(
        private channel: Channel,
        private rpcQueue: string,
        private replyQueueName: string,
        private eventEmitter: EventEmitter
    ) { }

    async consumeMessages() {
        console.log("Ready to consume-admin messages...");
        this.channel.consume(
            this.rpcQueue,
            async (message: ConsumeMessage | null) => {
                if (message) {
                    if (message.properties) {
                        const { correlationId, replyTo } = message.properties;
                        const operation = message.properties.headers?.function;
                        if (!correlationId || !replyTo) {
                            console.log("Missing some properties...");
                        }

                        if (message.content) {
                            await MessageHandler.handle(
                                operation,
                                JSON.parse(message.content.toString()),
                                correlationId,
                                replyTo
                            );
                        } else {
                            console.log("Received message content is null or undefined.");
                        }
                    } else {
                        console.log("Received message is null.");
                    }
                } else {
                    console.log("missing message properties ");
                }
            },
            { noAck: true }
        );
    }

    async consumeMessagess() {
        console.log("Ready to consume admin messages...");
        this.channel.consume(
            this.replyQueueName,
            (message: ConsumeMessage | null) => {
                if (message) {
                    this.eventEmitter.emit(
                        message.properties.correlationId.toString(),
                        message
                    );
                }
            },
            {
                noAck: true,
            }
        );
    }
}
