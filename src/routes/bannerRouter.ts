import { Router } from "express";
import { BannerController } from "../controllers/bannerController";
import { container } from "tsyringe";
import { UploadService } from "../services/uploadService";
const bannerRouter = Router();
const bannerController = container.resolve(BannerController);
const uploadService = container.resolve(UploadService);
bannerRouter.post('/thembanner',uploadService.UploadNuochoa,bannerController.createBanner.bind(bannerController));
bannerRouter.put('/suabanner',uploadService.UploadNuochoa,bannerController.updateBanner.bind(bannerController));
bannerRouter.get('/getallbanner',bannerController.getAllBanner.bind(bannerController));
bannerRouter.delete('/deletebanner/:id',bannerController.deleteBanner.bind(bannerController));

export default bannerRouter;