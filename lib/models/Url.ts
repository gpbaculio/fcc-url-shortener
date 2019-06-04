import * as mongoose from 'mongoose';

export interface UrlInterface extends mongoose.Document {
  originalUrl: String;
  shortUrl: Number;
}

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortUrl: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<UrlInterface>('Url', UrlSchema);
