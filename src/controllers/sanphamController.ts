import { injectable } from "tsyringe";
import { SanphamService } from "../services/sanphamService";
import { Request, Response } from 'express';

@injectable() 
export class SanphamCotroller{
    constructor(private sanphamService:SanphamService){}
    async getSanphamAll(req:Request,res:Response): Promise<void>{
        try{
            const data = await this.sanphamService.getSanphamAll();
            if(data && data.length>0){
                res.json(data);
            }else{
                res.json({message:'không tìm thấy danh sách sản phẩm'});

            }
        }
        catch(error:any){
            res.json({message:error.message});
        }
    }

    async getSanphamByID(req:Request,res:Response):Promise<void>{
        try{
            const id = req.params.id;
            const sanpham = await this.sanphamService.getSanphamByID(id);
            if(sanpham){
                res.json(sanpham);
            }else{
                res.json({message:'Bản ghi không còn tồn tại '})
            }

        }catch(error:any){
            res.json({message:error.message});
        }
    }

    async createSanpham(req: Request, res: Response): Promise<any>{
        try
        {
            let sanpham = req.body as {tensp:string, danhmuc_id:string, tenhang:string, mota:string, gia:string, giakm:string, anh:string, soluong:string};
            if(Array.isArray(req.files)){
                sanpham.anh = req.files[0].path;
            }

            const results = await this.sanphamService.createSanpham(sanpham);
            res.json({message:'Đã thêm sản phẩm thành công'})
        }catch(error: any){
            res.json({message: error.message});
        }
    }

    async updateSanpham(req:Request,res:Response):Promise<any>{
        try{
            let sanpham = req.body as {id: string, tensp:string, danhmuc_id:string, tenhang:string, mota:string, gia:string, giakm:string, anh:string, soluong:string};
            if(Array.isArray(req.files)){
                sanpham.anh = req.files[0].path;
            }

            const results = await this.sanphamService.updateSanpham(sanpham);
            res.json({message:'Đã sửa sản phẩm thành công'})
        }catch(error:any){
            res.json({message: error.message});
        }
    }

    async deleteSanpham(req:Request, res:Response):Promise<any>{
        try{
            let id = req.params.id;
            const results = await this.sanphamService.deleteSanpham(id);
            res.json({message:'Đã xóa thành công', success:true})
        }catch(error:any){
            res.json({message:error.message, success:false})
        }
    }
    async getSanphamCM(req: Request, res: Response): Promise<void> {
        try {
            // Chuyển đổi các giá trị từ string sang number
            const danhmuc_id = parseInt(req.params.danhmuc_id, 10);
            const pageIndex = parseInt(req.params.pageIndex, 10);
            const pageSize = parseInt(req.params.pageSize, 10);
    
            // Kiểm tra xem các giá trị đã chuyển đổi có hợp lệ hay không
            if (isNaN(danhmuc_id) || isNaN(pageIndex) || isNaN(pageSize)) {
                res.status(400).json({ message: 'Thông tin đầu vào không hợp lệ.' });
                return;
            }
    
            // Gọi service với các giá trị đã được chuyển đổi
            const sanpham = await this.sanphamService.getSanphamCM(danhmuc_id, pageIndex, pageSize);
    
            // Kiểm tra và trả về kết quả
            if (sanpham) {
                res.json(sanpham);
            } else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    
    
    
}