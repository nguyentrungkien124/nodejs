import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
 export class NhaphanphoiRepository{
    constructor (private db:Database){}
    async getNhaphanphoiAll():Promise<any>{
        try{
            const sql = 'CALL GetAllNhaPhanPhoi()';
            const [results] = await this.db.query(sql,[]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async createNhaphanphoi(nhaphanphoi:any):Promise<any>{
        try{
            const sql = 'CALL CreateNhaPhanPhoi(?,?,?,?,?)';
            await this.db.query(sql,[nhaphanphoi.TenNPP, nhaphanphoi.DiaChi, nhaphanphoi.Email, nhaphanphoi.SoDienThoai, nhaphanphoi.anh]);
            return true;

        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async updateNhaphanphoi(nhaphanphoi:any):Promise<any>{
        try{
            const sql = 'CALL UpdateNhaPhanPhoi(?,?,?,?,?,?)';
            await this.db.query(sql,[nhaphanphoi.MaNPP,nhaphanphoi.TenNPP, nhaphanphoi.DiaChi, nhaphanphoi.Email, nhaphanphoi.SoDienThoai, nhaphanphoi.anh]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async deleteNhaphanphoi(id:any):Promise<any>{
        try{
            const sql = 'CALL DeleteNhaPhanPhoi(?)';
            await this.db.query(sql,[id]);
            return true;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    async getNhaPhanPhoiById(id:any):Promise<any>{
        try{
            const sql = 'CALL GetNhaPhanPhoiById(?)';
            const [results] = await this.db.query(sql,[id]);
            return results;
        }catch(error:any){
            throw new Error(error.message);
        }
    }

 }