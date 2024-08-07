import { injectable } from "tsyringe";
import { NhaphanphoiRepository } from "../repositories/nhaphanphoiRepository";

@injectable()
 export class NhaphanphoiService{
    constructor (private nhaphanphoiRepository: NhaphanphoiRepository){}
    async getNhaphanphoiAll():Promise<any>{
        return this.nhaphanphoiRepository.getNhaphanphoiAll();
    }
    async createNhaphanphoi(nhaphanphoi:any):Promise<any>{
        return this.nhaphanphoiRepository.createNhaphanphoi(nhaphanphoi);

    }
    async updateNhaphanphoi(nhaphanphoi:any):Promise<any>{
        return this.nhaphanphoiRepository.updateNhaphanphoi(nhaphanphoi);
    }
    async deleteNhaphanphoi(id:any):Promise<any>{
        return this.nhaphanphoiRepository.deleteNhaphanphoi(id);

    }
    async getNhaPhanPhoiId(id:any):Promise<any>{
        return this.nhaphanphoiRepository.getNhaPhanPhoiById(id);
    }
 }