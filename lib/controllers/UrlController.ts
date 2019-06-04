import { Request, Response } from 'express';
import Url from '../models/Url';

export default class WhoAmIController {
  public isValidUrl = (url: string) => {
    const test = url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return test === null ? false : true;
  };
  public generateNum = () => {
    const num = Math.floor(Math.random() * 1000000000);
    Url.findOne({ shortenUrl: num }, function(_err, result) {
      if (result) {
        return this.generateNum();
      } else {
        return num;
      }
    });
  };
  public newUrl = async (req: Request, res: Response) => {
    const { url: original_url } = req.body;
    if (this.isValidUrl(original_url)) {
      const shortUrl = this.generateNum();
      const url = await new Url({ originalUrl: original_url, shortUrl });
      url
        .save()
        .then(() => {
          res.json({ original_url, shortUrl });
        })
        .catch(error => res.json({ error }));
    } else {
      res.json({ error: 'invalid URL' });
    }
  };
}
