import * as mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortUrl: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Url', UrlSchema);
