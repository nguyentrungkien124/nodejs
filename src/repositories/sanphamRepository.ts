import { injectable } from "tsyringe";
import { Database } from "../config/database";
@injectable()

export class SanphamRepository {
    constructor(private db: Database) { }
    async getSanphamAll(): Promise<any> {
        try {
            const sql = 'CALL GetSanPhamAll()';
            const [results] = await this.db.query(sql, []);
            return results;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getSanphamCM(danhmuc_id:number, pageIndex:number, pageSize:number):Promise<any>{
        try{
            const sql = 'CALL SearchSanPhamCM(?,?,?)';
            const[results] = await this.db.query(sql,[danhmuc_id, pageIndex,pageSize]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async getSanphamByID(id:string):Promise<any>{
        try{
            const sql = 'CALL GetSanPhamById(?)';
            const [results] = await this.db.query(sql,[id]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async createSanpham(sanpham: any): Promise<any> {
        try {
            const sql = 'CALL CreateSanPham(?, ?, ?, ?, ?, ?, ?, ?)';
            await this.db.query(sql, [sanpham.tensp, sanpham.danhmuc_id, sanpham.tenhang, sanpham.mota, sanpham.gia, sanpham.giakm, sanpham.anh, sanpham.soluong]);
            return true;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

     async updateSanpham(sanpham: any): Promise<any>{
        try{
            const sql = 'CALL UpdateSanPham(?, ?, ?, ?, ?, ?, ?, ?, ?)';
            await this.db.query(sql, [sanpham.id, sanpham.tensp, sanpham.danhmuc_id, sanpham.tenhang, sanpham.mota, sanpham.gia, sanpham.giakm, sanpham.anh, sanpham.soluong]);
            return true;
        }
        catch(error:any){
            throw new Error(error.message);
        }
     }

     async deleteSanpham(id:any): Promise<any>{
        try{
            const sql = 'CALL DeleteSanPham(?)';
            await this.db.query(sql,[id]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
     }
}

