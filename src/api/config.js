import axios from "axios";

export const myAxios=axios.create({
    baseURL:"https://react-tt-api.onrender.com/api/"
});
export const addTokenToTheAxios=(token)=>{
    myAxios.defaults.headers['Authorization']=`Bearer ${token}`;  
}