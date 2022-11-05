import { Product } from "../../data/products";
import axios from "axios"
const API_PATH = "http://localhost:5000";

export const getProducts = async () => {
    const response = await axios.get<any>(API_PATH + "/api/v1/products");

    console.log(response.data);

    if(response.status === 200){
        return response.data;
    }


}

const productsService = {
    getProducts
}

export {
    productsService
}

