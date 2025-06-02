import 'dotenv/config'

(() => {
    if (!process.env.RabbitMQ_Link) {
        throw new Error("RabbitMQ_Link environment variable is not set");
    }
})();

// RabbitMQ configuration file
export default {
    rabbitMQ: {
        url: String(process.env.RabbitMQ_Link),
        queues: {
            instructorQueue: "instructor_queue",
            courseQueue: "course_queue",
            adminQueue: "admin_queue",
            orderQueue: "order_queue",
            notificationQueue: "notification_queue"
        },
    },
};