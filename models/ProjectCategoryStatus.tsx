//models/ProjectCategoryStatus
import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IProjectCategoryStatus extends Document {
  image: string;
  title: string;
  location: string;
  status: 'residential' | 'commercial' | 'landowner';
}

const ProjectCategoryStatusSchema = new Schema<IProjectCategoryStatus>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['residential', 'commercial', 'landowner'],
      required: true,
    },
  },
  { timestamps: true }
);

export default models.ProjectCategoryStatus || model<IProjectCategoryStatus>('ProjectCategoryStatus', ProjectCategoryStatusSchema);