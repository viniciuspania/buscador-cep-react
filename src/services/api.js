import axios from 'axios'; 

// https://viacep.com.br/ws/15994754/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
}); 

export default api; 