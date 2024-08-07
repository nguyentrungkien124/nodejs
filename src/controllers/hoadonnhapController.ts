import { injectable } from "tsyringe";
import { HoadonnhapService } from "../services/hoadonnhapService";
import { Request, Response } from 'express';
@injectable()
export class HoadonnhapController{
    constructor(private hoadonnhapService:HoadonnhapService){}
    async createHoadonnhap(req:Request,res:Response):Promise<any>{
        try{
            let hoadonnhap:any= {};
            hoadonnhap.maNPP = req.body.maNPP,
            hoadonnhap.kieuthanhtoan = req.body.kieuthanhtoan,
            hoadonnhap.maTaiKhoan = req.body.maTaiKhoan,
            hoadonnhap.tongtien = req.body.tongtien,
            hoadonnhap.list_json_chitiet_hoadonnhap = JSON.stringify(req.body.list_json_chitiet_hoadonnhap);
            const results = await this.hoadonnhapService.createHoadonnhap(hoadonnhap);
            res.json({message:'Đã thêm thành công hóa đơn nhập'})

        }catch(error:any){
            res.json({message: error.message});
        }
    }

    async updateHoadonnhap(req:Request,res:Response):Promise<any>{
        try{     
            let hoadonnhap:any={};
            hoadonnhap.maHDN = req.body.maHDN,
            hoadonnhap.maNPP = req.body.maNPP,
            hoadonnhap.kieuthanhtoan = req.body.kieuthanhtoan,
            hoadonnhap.maTaiKhoan = req.body.maTaiKhoan,
            hoadonnhap.tongtien = req.body.tongtien,
            hoadonnhap.list_json_chitiet_hoadonnhap = JSON.stringify(req.body.list_json_chitiet_hoadonnhap);
            const results = await this.hoadonnhapService.updateHoadonnhap(hoadonnhap);
            res.json({message:'Đã sửa thành công '})
        }catch(error:any){
            res.json({message:error.message})
        }
   

    }
    async getHoadonnhapAll(req:Request,res:Response):Promise<any>{
        try{
            const data = await this.hoadonnhapService.getHoadonnhapAll();
            if(data && data.length>0){
                res.json(data);
            }else{
                res.json({message:'không tìm thấy dữ liệu'});
            }
        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async getHoadonnhapbyID(req:Request,res:Response):Promise<void>{
        try{
            const id = req.params.id;
            const hoadonnhap = await this.hoadonnhapService.getHoadonnhapbyID(id);
            if(hoadonnhap){
                res.json(hoadonnhap);
            }else{
                res.json({message:'Bản ghi không còn tồn tại'})
            }
        }
        catch(error:any){
            res.json({message:error.message});
        }
    }

    async deleteHoadonnhap(req:Request,res:Response):Promise<any>{
        try{
            const id = req.params.id;
            const results = await this.hoadonnhapService.deleteHoadonnhap(id);
            res.json({message:'Đã xóa thành công hóa đơn nhập', success:true});
        }catch(error:any){
            res.json({message:error.message,success:false});
        }
    }
}