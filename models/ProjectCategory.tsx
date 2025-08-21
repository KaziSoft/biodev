//models/ProjectCategory
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IProjectCategory extends Document {
    title: string;
    hoverTitle: string;
    hoverText: string;
    location: string;
    status: 'residential' | 'commercial' | 'landowner';
    description: string;
    size: string;
    units: number;
    floors: number;
    amenities: string[];
    image: string;
}

const ProjectCategorySchema = new Schema<IProjectCategory>({
    title: { type: String, required: true },
    hoverTitle: { type: String, required: true },
    hoverText: { type: String, required: true },
    location: { type: String, required: true },
    status: {
      type: String,
      enum: ['residential', 'commercial', 'landowner'],
      required: true,
    },
    description: { type: String, required: true },
    size: { type: String, required: true },
    units: { type: Number, required: true },
    floors: { type: Number, required: true },
    amenities: { type: [String], required: true },
    image: { type: String, required: true },
}, { timestamps: true });

export const Project = models.Project || model<IProjectCategory>('Project', ProjectCategorySchema);