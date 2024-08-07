import { Router } from "express";
import { HoadonnhapController } from "../controllers/hoadonnhapController";
import { container } from "tsyringe";

const hoadonnhapRouter = Router();
const hoadonnhapController = container.resolve(HoadonnhapController);
hoadonnhapRouter.post('/createHDN',hoadonnhapController.createHoadonnhap.bind(hoadonnhapController));
hoadonnhapRouter.put('/updateHDN',hoadonnhapController.updateHoadonnhap.bind(hoadonnhapController));
hoadonnhapRouter.get('/getall',hoadonnhapController.getHoadonnhapAll.bind(hoadonnhapController));
hoadonnhapRouter.get('/getchitiethdn/:id',hoadonnhapController.getHoadonnhapbyID.bind(hoadonnhapController));
hoadonnhapRouter.delete('/deleteHDN/:id',hoadonnhapController.deleteHoadonnhap.bind(hoadonnhapController));
export default hoadonnhapRouter;