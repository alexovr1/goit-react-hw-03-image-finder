import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29465617-58b26495e6043c09031550a99';

export const searchImage = async (query, page) => {
    const { data } = await axios(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);
    return data.hits
}
