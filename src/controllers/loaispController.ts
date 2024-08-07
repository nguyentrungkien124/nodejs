import { injectable } from "tsyringe";
import { LoaispService } from "../services/loaispService";
import { Request, Response } from 'express';

@injectable()
export class LoaispController {
    constructor(private loaispService: LoaispService) { }

    async getLoaispAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await this.loaispService.getLoaispAll();
            if (data && data.length > 0) {
                res.json(data);
            } else {
                res.json({ message: 'không tìm thấy danh sách' });
            }
        }
        catch (error: any) {
            res.json({ message: error.message });
        }
    }


    async updateLoaisp(req: Request, res: Response): Promise<void> {
        try {
            const loaisp = req.body as { danh_muc_id: any, ten_danh_muc: any, ghi_chu: any };
            const results = await this.loaispService.updateLoaisp(loaisp);
            res.json({message:'Đã cập nhật thành công', results:true})
        }
        catch(error:any) {
            res.json({
                message:error.message,result:false
            });

        }

    }
    async createLoaisp(req: Request, res: Response): Promise<void> {
        try {
            const loaisp = req.body as {  ten_danh_muc: any, ghi_chu: any };
            const results = await this.loaispService.createLoaisp(loaisp);
            res.json({message:'Đã thêm  thành công', results:true})
        }
        catch(error:any) {
            res.json({
                message:error.message,result:false
            });

        }

    }
    async deleteLoaisp(req:Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            const result = await this.loaispService.deleteLoaisp(id);
            res.json({message:'Đã xóa thành công.', success:true});
        }catch(error: any){
            res.json({message:error.message,success:false});
        }
    }
}