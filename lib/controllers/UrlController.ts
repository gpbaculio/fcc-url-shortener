import { Request, Response } from 'express';

export default class WhoAmIController {
  public isValidURL(url: string) {
    const test = url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return test === null ? false : true;
  }
  public newUrl = (req: Request, res: Response) => {
    const { url: original_url } = req.body;
    if (this.isValidURL(original_url)) {
      res.json({ original_url });
    } else {
      res.json({ error: 'invalid URL' });
    }
  };
}
