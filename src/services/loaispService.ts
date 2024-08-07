import { injectable } from "tsyringe";
import { LoaispRepository } from "../repositories/loaispRepository";
@injectable()
 export class LoaispService{
    constructor(private loaispRepository: LoaispRepository){}
    async getLoaispAll():Promise<any>{
        return this.loaispRepository.getLoaispAll();

    }
    async updateLoaisp(danhmuc:any):Promise<any>{
        return this.loaispRepository.updateLoaisp(danhmuc);
    }
    async createLoaisp(danhmuc:any):Promise<any>{
        return this.loaispRepository.createLoaisp(danhmuc);
    }
    async deleteLoaisp(id:any): Promise<any>{
        return this.loaispRepository.deleteLoaisp(id);
    }
 }