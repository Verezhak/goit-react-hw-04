import axios from 'axios';

export const fetchData = async (query, page, per_page = 5) => {
    const BASE_URL = 'https://api.unsplash.com/search/photos/';
    const API_KEY = 'client_id=35P5CBZOhyM28nHIMdh9abUTsMDIQDZvb1HlYQhx9js'
    const res = await axios.get(`${BASE_URL}?${API_KEY}`, {
        params: {
            query: query,
            per_page: per_page,
            page: page,
        }
    });
    return res.data;
}

