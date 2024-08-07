import { injectable } from "tsyringe";
import { NhaphanphoiService } from "../services/nhaphanphoiService";
import { Request, Response } from 'express';

@injectable()

export class NhaphanphoiController{
    constructor(private nhaphanphoiService:NhaphanphoiService){}
    async getNhaphanphoiAll(req:Request,res:Response):Promise<void>{
        try{
            const data = await this.nhaphanphoiService.getNhaphanphoiAll();
            if(data && data.length>0){
                res.json(data);

            }else{
                res.json({message:'không tìm thấy danh sách nhà phân phối'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async createNhaphanphoi(req:Request, res:Response):Promise<any>{
        try{
            let nhaphanphoi = req.body as { TenNPP:string, DiaChi:string, Email:string, SoDienThoai:string, anh:string};
            if(Array.isArray(req.files)){
                nhaphanphoi.anh = req.files[0].path;
            }
            const results = await this.nhaphanphoiService.createNhaphanphoi(nhaphanphoi);
            res.json({message:'Đã thêm nhà phân phối thành công'});
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async updateNhaphanphoi(req:Request, res:Response):Promise<any>{
        try{
            let nhaphanphoi = req.body as {MaNPP:string, TenNPP:string, DiaChi:string, Email:string, SoDienThoai:string, anh:string};
            if(Array.isArray(req.files)){
                nhaphanphoi.anh = req.files[0].path;
            }
            const results = await this.nhaphanphoiService.updateNhaphanphoi(nhaphanphoi);
            res.json({message:'Đã sửa nhà phân phối thành công'});
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async deleteNhaphanphoi(req:Request, res:Response):Promise<any>{
        try{
            let id = req.params.id;
            const results = await this.nhaphanphoiService.deleteNhaphanphoi(id);
            res.json({message:'Đã xóa nhà phân phối thành công',success:true});
        }catch(error:any){
            res.json({message:error.message,success:false});
        }
    }

    async getNhaPhanPhoiById(req:Request,res:Response):Promise<any>{
        try{
            let id = req.params.id;
            const nhaphanphoi = await this.nhaphanphoiService.getNhaPhanPhoiId(id);
            if(nhaphanphoi){
                res.json(nhaphanphoi);
            }else{
                res.json({message:'Bản ghi không tồn tại'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }
}