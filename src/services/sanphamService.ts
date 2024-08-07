import { injectable } from "tsyringe";
import { SanphamRepository } from "../repositories/sanphamRepository";
import { LoaispRepository } from "../repositories/loaispRepository";

@injectable()

export class SanphamService{
    constructor (private sanphamRepository: SanphamRepository){}
    async getSanphamAll():Promise<any>{
        return this.sanphamRepository.getSanphamAll();
    }

    async createSanpham(sanpham: any): Promise<any>{
        return this.sanphamRepository.createSanpham(sanpham);
    }

    async updateSanpham(sanpham:any): Promise<any>{
        return this.sanphamRepository.updateSanpham(sanpham);
    }

    async deleteSanpham(id:any): Promise<any>{
        return this.sanphamRepository.deleteSanpham(id);
    }
   
    async getSanphamCM(pageIndex:number,pageSize:number, danhmuc_id:number): Promise<any> {
        return this.sanphamRepository.getSanphamCM(pageIndex,pageSize,danhmuc_id);
      }

      async getSanphamByID(id:string):Promise<any>{
        return this.sanphamRepository.getSanphamByID(id);
      }

}