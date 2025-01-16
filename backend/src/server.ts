import express from "express";
import cors from "cors";
import { sample_items, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/items", (req, res) => {
    res.send(sample_items);
})

app.get("/api/items/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const items = sample_items
    .filter(item => item.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(items);
})

app.get("/api/items/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("api/items/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const items = sample_items
    .filter(item => item.tags?.includes(tagName));
    res.send(items);
})

app.get("/api/items/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const item = sample_items.find(item => item.id == itemId);
    res.send(item);
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password);

    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("User name or password is not valid");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRadnomText", {
        expiresIn: "1h"
    })

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})