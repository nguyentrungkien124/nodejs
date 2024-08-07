import { injectable } from "tsyringe";
import { HoadonnhapRepository } from "../repositories/hoadonnhapRepository";

@injectable()
export class HoadonnhapService{
    constructor(private  hoadonnhapRepository: HoadonnhapRepository){}
    async createHoadonnhap(hoadonnhap:any):Promise<any>{
        return this.hoadonnhapRepository.createHoadonnhap(hoadonnhap);
    }

    async updateHoadonnhap(hoadonnhap:any):Promise<any>{
        return this.hoadonnhapRepository.updateHoadonnhap(hoadonnhap);
    }

    async getHoadonnhapAll():Promise<any>{
        return this.hoadonnhapRepository.getHoadonnhapAll();
    }
    async getHoadonnhapbyID(id:any):Promise<any>{
        return this.hoadonnhapRepository.getHoadonnhapbyID(id);
    }

    async deleteHoadonnhap(id:any):Promise<any>{
        return this.hoadonnhapRepository.deleteHoadonnhap(id);
    }
}