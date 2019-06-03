"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhoAmIController {
    constructor() {
        this.newUrl = (req, res) => {
            console.log('req body', req.body);
            console.log('req params', req.params);
            res.json('hehe');
        };
    }
}
exports.default = WhoAmIController;
//# sourceMappingURL=UrlController.js.map