import axios from '@/config/axios'
type Url = 'starships' | 'movies' | 'characters' | 'planets'

export const getAll = async (page: number, url: Url) => {
    try {
        const response = await axios.get(`/${url}?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getSpecific = async (id: string, url: Url) => {
    try {
        const response = await axios.get(`/${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}