import { Request, Response } from 'express';

export default class WhoAmIController {
  public newUrl = (req: Request, res: Response) => {
    console.log('req body', req.body);
    console.log('req params', req.params);
  };
}
