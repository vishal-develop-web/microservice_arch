import express, { Application } from 'express';
import http from 'node:http';
import cors from 'cors';
import adminRoute from './modules/admin/routes/admin.routes';

class App {

    private app: Application;
    private server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.applyMiddleware();
        this.app_routes();
    }

    private applyMiddleware(): void {
        const corsOption = {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }
        this.app.use(express.json({ limit: "50mb" }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors(corsOption))
    }
    private app_routes(): void {
        this.app.get('/', (_, res) => {
            res.send('API Gateway is running');
        });

        //Import Routes
        this.app.use("/api/v1/admin", adminRoute);
    }
    public startServer(port: number): void {
        this.server.listen(port, () => {
            console.log(`API-Gateway is running  on ${port}`);
        });
    }
}

export default App;