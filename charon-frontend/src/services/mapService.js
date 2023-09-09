import axios from 'axios';

const BASE_URL = '/api';

export const getMapData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getMapData`);
        return response.data;
    } catch (error) {
        throw error;
    }
};