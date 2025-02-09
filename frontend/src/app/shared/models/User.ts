export class User{
    id!: string;
    email!: string;
    password: string = '';
    name!: string;
    address!: string;
    token!: string;
    isAdmin!: boolean;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}