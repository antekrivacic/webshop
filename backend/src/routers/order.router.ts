import { Router } from "express";
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from "../constants/http_statuts";
import { OrderModel } from "../models/order.model";
import { OrderStatusEnum } from "../constants/order_status";
import auth from "../middlewares/auth.mid";

const router = Router();
router.use(auth);

router.post('/create',
    asyncHandler(async (req:any, res:any) => {
        const requestOrder = req.body;

        if(requestOrder.items.length <= 0) {
            res.status(HTTP_BAD_REQUEST).send({message: 'Cart is Empty'});
            return; 
        }

        await OrderModel.deleteOne({
            user: req.user.id,
            stats: OrderStatusEnum.NEW
        });

        const newOrder = new OrderModel({...requestOrder, user: req.user.id});
        await newOrder.save();
        res.send(newOrder);
    })
)

router.get('/newOrderForCurrentUser', asyncHandler( async (req:any, res:any) => {
    const order = await getNewOrderForCurrentUser(req);
    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
})
)

router.post('/pay', asyncHandler(async (req:any, res:any) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order not found');
        return;
    }
    order.paymentId = paymentId;
    order.status = OrderStatusEnum.PAID;
    await order.save();

    res.send(order._id);
}))

async function getNewOrderForCurrentUser(req:any) {
    return await OrderModel.findOne({user: req.user.id, status: OrderStatusEnum.NEW});
}

router.get('/track/:id', asyncHandler(async(req:any, res:any) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
}))

export default router;