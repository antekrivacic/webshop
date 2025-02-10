import { Item } from "./Item";

export class Review{
    id!: string;
    user!: string;
    item!: string;
    rating!: number;
    comment!: string;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}