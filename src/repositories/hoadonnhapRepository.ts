import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class HoadonnhapRepository {
    constructor (private db:Database){}
    async createHoadonnhap(hoadonnhap:any):Promise<any>{
        try{
            const sql = 'CALL CreateHoaDonNhap(?,?,?,?,?)';
            await this.db.query(sql,[hoadonnhap.maNPP, hoadonnhap.kieuthanhtoan, hoadonnhap.maTaiKhoan,hoadonnhap.tongtien,hoadonnhap.list_json_chitiet_hoadonnhap]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async updateHoadonnhap(hoadonnhap:any):Promise<any>{
        try{
            const sql = 'CALL UpdateHoaDonNhap(?,?,?,?,?,?)';
            await this.db.query(sql,[hoadonnhap.maHDN,hoadonnhap.maNPP, hoadonnhap.kieuthanhtoan, hoadonnhap.maTaiKhoan,hoadonnhap.tongtien,hoadonnhap.list_json_chitiet_hoadonnhap]);
            return true;

        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async getHoadonnhapAll():Promise<any>{
        try{
            const sql = 'CALL GetHoaDonNhapAll()';
            const[results]= await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.message)
        }
    }

    async getHoadonnhapbyID(id:any):Promise<any>{
        try{
            const sql = 'CALL GetChiTietHoaDonNhapByID(?)';
            const[results] = await this.db.query(sql,[id]);
            return results;
        }catch(error:any){
            throw new Error(error.message)
        }
    }

    async deleteHoadonnhap(id:any):Promise<any>{
        try{
            const sql = 'CALL DeleteHoaDonNhap(?)';
             await this.db.query(sql,[id]);
            return true;
            
        }catch(error:any){
            throw new Error(error.message);
        }
    }
}