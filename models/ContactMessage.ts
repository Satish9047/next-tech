import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IContactMessage extends Document {
  fullName: string;
  email: string;
  contact?: string;
  serviceRequired: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    // Keep optional for backward compatibility with old documents
    contact: { type: String, required: false, trim: true },
    serviceRequired: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    isRead: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

ContactMessageSchema.index({ createdAt: -1 });

export const ContactMessage: Model<IContactMessage> =
  (mongoose.models.ContactMessage as Model<IContactMessage>) ||
  mongoose.model<IContactMessage>("ContactMessage", ContactMessageSchema);
