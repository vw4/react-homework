import axios from "axios";

export async function getCountryData({fields = ['name', 'capital', 'flag', 'translations']} = {}) {
    const {data} = await axios.get(`https://restcountries.com/v3.1/all?fields=${fields.join(',')}`);
    return data;
}

export async function getCountriesByName(officialName) {
    const {data} = await axios.get(`https://restcountries.com/v3.1/name/${officialName}?fullText=true`);
    return data;
}