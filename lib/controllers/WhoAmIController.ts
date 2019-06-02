import { Request, Response } from 'express';

export default class WhoAmIController {
  public handleWhoAmI = (req: Request, res: Response) => {
    const ipaddress = req.ip;
    const languages = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.json({ ipaddress, languages, software });
  };
}
