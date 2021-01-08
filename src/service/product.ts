import axios from 'axios';
import { BASE_URL, ERROR_MESSAGE } from '../core/constants';
import { IProduct } from '../core/types';

export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || ERROR_MESSAGE);
    }
};
