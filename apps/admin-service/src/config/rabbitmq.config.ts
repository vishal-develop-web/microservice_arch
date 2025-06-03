
import 'dotenv/config'

(() => {
    if (!process.env.RABBITMQ_LINK) {
        throw new Error("RABBITMQ_LINK environment variable is not set");
    }
})();
export default {
    rabbitMQ: {
        url: String(process.env.RABBITMQ_LINK),
        queues: {
            adminQueue: "admin_queue",
            userQueue: "user_queue"
        },
    },
};

