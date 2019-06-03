import * as mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortenedUrl: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Url', UrlSchema);
