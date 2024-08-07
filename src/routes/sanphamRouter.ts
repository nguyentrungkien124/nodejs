import { Router } from "express";
import { SanphamCotroller } from "../controllers/sanphamController";
import { container } from "tsyringe";
import { UploadService } from "../services/uploadService";
const sanphamRouter = Router();
const sanphamController = container.resolve(SanphamCotroller);
const uploadService = container.resolve(UploadService);
sanphamRouter.get('/getallsp',sanphamController.getSanphamAll.bind(sanphamController));
sanphamRouter.post('/themsp',uploadService.UploadNuochoa,sanphamController.createSanpham.bind(sanphamController));
sanphamRouter.put('/suasp',uploadService.UploadNuochoa,sanphamController.updateSanpham.bind(sanphamController));
sanphamRouter.delete('/xoasp/:id',sanphamController.deleteSanpham.bind(sanphamController));
sanphamRouter.get('/getspcm/:danhmuc_id/:pageIndex/:pageSize', sanphamController.getSanphamCM.bind(sanphamController));
sanphamRouter.get('/getbyidsp/:id', sanphamController.getSanphamByID.bind(sanphamController));

export default sanphamRouter;