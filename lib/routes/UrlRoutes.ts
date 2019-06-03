import UrlController from '../controllers/UrlController';

export default class WhoAmIRoutes {
  public urlController: UrlController = new UrlController();
  public routes(app): void {
    app.route('/api/shorturl/new').get(this.urlController.newUrl);
  }
}
