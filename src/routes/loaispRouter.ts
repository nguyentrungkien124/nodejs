import { Router } from "express";
import { LoaispController } from "../controllers/loaispController";
import { container } from "tsyringe";

const loaispRouter = Router();
const loaispController = container.resolve(LoaispController);
loaispRouter.get('/getall',loaispController.getLoaispAll.bind(loaispController));
loaispRouter.put('/update',loaispController.updateLoaisp.bind(loaispController));
loaispRouter.post('/create',loaispController.createLoaisp.bind(loaispController));
loaispRouter.delete('/delete/:id',loaispController.deleteLoaisp.bind(loaispController));


export default loaispRouter;
