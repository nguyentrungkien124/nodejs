import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable() 
export class BannerRepository{
    constructor (private db:Database){}
    async createBanner(banner:any): Promise<any>{
        try{
            const sql = 'CALL CreateBanner(?,?,?)';
            await this.db.query(sql,[banner.anh,banner.moTa,banner.maTaiKhoan]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async updateBanner(banner:any): Promise<any>{
        try{
            const sql ='CALL UpdateBanner(?,?,?,?)';
            await this.db.query(sql,[banner.maSlide,banner.anh,banner.moTa,banner.maTaiKhoan]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async getAllBanner():Promise<any>{
        try{
            const sql = 'CALL GetAllBanner()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    
    async deleteBanner(id:any):Promise<any>{
        try{
            const sql = 'CALL DeleteBanner(?)';
            await this.db.query(sql,[id]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
}