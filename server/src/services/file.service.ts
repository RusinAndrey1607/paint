import fs from 'fs'
import path from 'path'
import { ApiError } from '../exceptions/api.error';

class FileService {
    async writeFile(id: string, imgData: string): Promise<void>  {
        try {
            const data = imgData.replace('data:image/png;base64,', '');
            fs.writeFileSync(path.resolve(__dirname, "..", 'files', `${id}.jpg`), data, 'base64');
        } catch (error) {
            throw ApiError.ServerError("Error ocured while writing file")
            
        }

    };
    async getFile(id: string): Promise<string> {
        try {
            const filePath = path.resolve(__dirname,"..", 'files', `${id}.jpg`);
            const fileData = fs.readFileSync(filePath);
            return `data:image/png;base64,${fileData.toString('base64')}`;
        } catch (error) {
            console.error(error);
            throw ApiError.BadRequest("Can not find file")
        }
    }
}

export const fileService = new FileService()