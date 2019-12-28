import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import { ApiController } from './controllers';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

class ApiServer extends Server {

    private readonly SERVER_STARTED = 'API server started on port: ';
    private readonly DEV_MSG = 'Server is running in development mode. No front-end content is being served.';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        super.addControllers(new ApiController());

        // Point to front-end code
        if (process.env.NODE_ENV !== 'production') {
            this.app.get('*', (req, res) => res.send(this.DEV_MSG));
        } else {
            this.serveFrontEndProd();
        }
    }

    private serveFrontEndProd(): void {
        const dir = path.join(__dirname, 'public/react/');
        // Set the static and views directory
        this.app.set('views',  dir);
        this.app.use(express.static(dir));
        // Serve front-end content
        this.app.get('*', (req, res) => {
            res.sendFile('index.html', {root: dir});
        });
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default ApiServer;
