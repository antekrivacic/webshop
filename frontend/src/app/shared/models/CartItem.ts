import { Item } from "./Item";


export class CartItem{
    quantity: number = 1;
    price: number;

    constructor(public item: Item){
        this.price = item.price;
    }
}