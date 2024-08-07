import { injectable } from "tsyringe";
import { BannerService } from "../services/bannerService";
import { Request, Response } from 'express';
@injectable() 
 export class BannerController{
    constructor(private bannerService:BannerService){}
    async createBanner(req:Request, res:Response):Promise<any>{
        try{
            let banner = req.body as {anh:string, moTa:string, maTaiKhoan:string}
            if(Array.isArray(req.files)){
                banner.anh = req.files[0].path;
            }
            const results = await this.bannerService.createBanner(banner);
            res.json({message:'đã thêm banner thành công'});

        }catch(error:any){
            res.json({message: error.message});
        }
    }

    async updateBanner(req:Request, res:Response):Promise<any>{
        try{
            let banner = req.body as {maSlide:string,anh:string, moTa:string, maTaiKhoan:string}
            if(Array.isArray(req.files)){
                banner.anh = req.files[0].path;
            }
            const results = await this.bannerService.updateBanner(banner);
            res.json({message:'Đã sửa banner thành công'})
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async getAllBanner(req:Request, res:Response):Promise<any>{
        try{
            let data = await this.bannerService.getAllBanner();
            if(data && data.length>0){
                res.json(data);
            } else{
                res.json({message:'Không tìm thấy danh sách'})
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }
    async deleteBanner(req:Request, res:Response):Promise<any>{
        try{
            const id = req.params.id;
            const result = await this.bannerService.deleteBanner(id);
            res.json({message:'Đã xóa thành công', success:true});

        }catch(error:any){
            res.json({message:error.message,success:false});
        }
    }
 }