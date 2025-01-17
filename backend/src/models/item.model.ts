import { model, Schema } from "mongoose";

export interface Item{
    id:string;
    name:string;
    price: number;
    tags: string[];
    favorite: boolean;
    imageUrl: string;
    description: string;
}

export const ItemSchema = new Schema<Item>(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        tags: {type: [String], required: false},
        favorite: {type: Boolean, default: false},
        imageUrl: {type: String, required: true},
        description: {type: String, required: true}
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

export const ItemModel = model<Item>('item', ItemSchema);
