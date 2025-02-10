import mongoose, { model, Schema } from 'mongoose';

export interface Review{
    id: number;
    user: mongoose.Schema.Types.ObjectId;
    item: mongoose.Schema.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
}

export const ReviewSchema = new Schema<Review>(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
        item: {type: mongoose.Schema.Types.ObjectId, ref: 'item', required: true},
        rating: {type: Number, required: true},
        comment: {type: String, required: true},

    }, {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const ReviewModel = model<Review>('review', ReviewSchema);