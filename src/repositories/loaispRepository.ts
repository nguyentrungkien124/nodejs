import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class LoaispRepository{
    constructor (private db:Database){}
    async getLoaispAll(): Promise<any>{
        try{
            const sql = 'CALL GetDanhMucAll()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
            
        }
    }

    async updateLoaisp(loaisp:any): Promise<any>{
        try{
            const sql = 'CALL UpdateDanhMuc(?, ?, ?)';
            await this.db.query(sql,[loaisp.danh_muc_id, loaisp.ten_danh_muc, loaisp.ghi_chu]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async createLoaisp(loaisp:any): Promise<any>{
        try{
            const sql = 'CALL CreateDanhMuc(?, ?)';
            await this.db.query(sql,[loaisp.ten_danh_muc, loaisp.ghi_chu]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    async deleteLoaisp(id:any): Promise<any>{
        try{
            const sql = 'CALL  DeleteDanhMuc(?)';
            await this.db.query(sql,[id]);
        }catch(error:any){
            throw new Error(error.message);

        }
    }
}