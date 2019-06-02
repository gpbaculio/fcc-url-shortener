import WhoAmIController from '../controllers/WhoAmIController';

export default class WhoAmIRoutes {
  public whoAmIController: WhoAmIController = new WhoAmIController();
  public routes(app): void {
    app.route('/api/whoami').get(this.whoAmIController.handleWhoAmI);
  }
}
