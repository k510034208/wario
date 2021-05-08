import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer} from 'routing-controllers'
import {EventController} from './controller/EventControllers'
import {WebhookController} from './controller/WebhookControllers'

createConnection().then(async () => {

    // create express app
    const app = createExpressServer({
        controllers: [
            EventController,
            WebhookController
        ]
    })

    // start express server
    app.listen(process.env.PORT);

    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
