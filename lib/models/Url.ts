import * as mongoose from 'mongoose';

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

export default mongoose.model('Url', UrlSchema);
