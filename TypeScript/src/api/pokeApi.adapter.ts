import axios from "axios";

export interface HttpAdapter {
    get<T>(url:string):Promise<T>

}
export class PokeApiAdapter  implements HttpAdapter{

    private readonly axios = axios

    async get<T>(url:string): Promise<T>{
        const {data} = await this.axios.get<T>(url);
        return data;
    }

    async post(url:string, data: any){

    }

    async patch(url:string, data: any){

    }

    async delete(url:string, data: any){

    }

}
