import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer} from 'routing-controllers'
import {EventController} from './controller/EventControllers'
import {UserController} from './controller/UserController'

createConnection().then(async connection => {

    // create express app
    const app = createExpressServer({
        controllers: [
            EventController,
            UserController
        ]
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
