import connectDatabase from "./config/db.config";
import 'dotenv/config'
import RabbitMqClient from "./rabbitmq/client"

class App {
    constructor() {
        connectDatabase();
        RabbitMqClient.initialize()
    }
}

export default App;
