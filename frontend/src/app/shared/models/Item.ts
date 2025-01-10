export class Item{
    id!:string;
    name!:string;
    price!:number;
    tags?: string[];
    favorite!: boolean;
    imageUrl!: string;
    description!: string;
}