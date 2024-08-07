import { injectable } from "tsyringe";
import { BannerRepository } from "../repositories/bannerRepository";

@injectable() 
export class BannerService{
    constructor (private bannerRepository: BannerRepository){}
    async createBanner(banner:any):Promise<any>{
        return this.bannerRepository.createBanner(banner);
    }

    async updateBanner(banner:any):Promise<any>{
        return this.bannerRepository.createBanner(banner);
    }

    async getAllBanner():Promise<any>{
        return this.bannerRepository.getAllBanner();
    }
    async deleteBanner(id:any):Promise<any>{
        return this.bannerRepository.deleteBanner(id);
    }
}