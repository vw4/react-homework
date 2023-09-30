import axios from "axios";

const COUNTRIES_API_ENDPOINT = 'https://restcountries.com/v3.1/';

const axiosInstance = axios.create({
    baseURL: COUNTRIES_API_ENDPOINT,
});

export const restcountries = {
    getAll: async ({fields = ['name', 'capital', 'flag', 'translations']} = {}) => {
        const {data} = await axiosInstance.get('all', {params: {fields: fields.join(',')}});
        return data;
    },
    getByName: async (officialName) => {
        const {data} = await axiosInstance.get(`name/${officialName}`, {params: {fullText: true}});
        return data;
    }
}