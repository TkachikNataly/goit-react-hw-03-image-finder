import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, currentPage) => {
    const { data } = await axios.get(
        `/?q=${query}&page=${currentPage}&key=25760251-3970e02ca371c5f8341f48ac2&q&image_type=photo&orientation=horizontal&per_page=12`
    );

    return data;
};

export default fetchImages;