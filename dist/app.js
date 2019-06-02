"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const WhoAmIRoute_1 = require("./routes/WhoAmIRoute");
const ViewsRoutes_1 = require("./routes/ViewsRoutes");
class App {
    constructor() {
        this.app = express();
        this.whoAmIRoutes = new WhoAmIRoute_1.default();
        this.viewsRoutes = new ViewsRoutes_1.default();
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
        this.app.use(bodyParser.json());
        this.whoAmIRoutes.routes(this.app);
        this.viewsRoutes.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map