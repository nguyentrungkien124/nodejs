import { injectable } from "tsyringe";
import multer from "multer";
import path from 'path';
import fs from 'fs';
@injectable()

export class UploadService{
    private upload = multer({
        storage: multer.diskStorage({
            destination: (req, file, cb)=>{
                const date = new Date();
                const year = date.getFullYear().toString();
                const moth = (date.getMonth() + 1).toString().padStart(2,'0');
                const day = date.getDate().toString().padStart(2,'0');
                const uploadNuochoa = `uploads/${year}-${moth}-${day}`;
                if(!fs.existsSync(uploadNuochoa)){
                    fs.mkdirSync(uploadNuochoa, {recursive: true});
                }
                cb(null, uploadNuochoa);
            },
            filename:(req, file, cb) =>{
                const filename = path.parse(file.originalname).name + '-' + Math.round(Math.random()* 1E9);
                const extension = path.extname(file.originalname);
                cb(null, filename + extension);
            },

        })
    }).array('files');

    get UploadNuochoa(){
        return this.upload;
    }
    
}