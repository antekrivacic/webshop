import { Router } from "express";
import { ReviewModel } from "../models/review.model";


const router = Router();



router.get("/", async (req, res) => {
    const reviews = await ReviewModel.find();
    res.send(reviews);
});

router.get("/reviewByItemId/:itemId", async (req, res) => {
    const reviews = await ReviewModel.find({item: req.params.itemId});
    res.send(reviews);
});


export default router;