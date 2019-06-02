import * as express from 'express';
const bodyParser = require('body-parser');
var cors = require('cors');

import WhoAmIRoute from './routes/WhoAmIRoute';
import ViewsRoutes from './routes/ViewsRoutes';

class App {
  public app: express.Application = express();
  public whoAmIRoutes: WhoAmIRoute = new WhoAmIRoute();
  public viewsRoutes: ViewsRoutes = new ViewsRoutes();
  constructor() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
    this.app.use(bodyParser.json());
    this.whoAmIRoutes.routes(this.app);
    this.viewsRoutes.routes(this.app);
  }
}

export default new App().app;
