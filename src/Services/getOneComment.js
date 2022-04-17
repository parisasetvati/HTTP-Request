import http from "./httpServices";
export const getOneComment=(id)=>{
    return http.get(`/comments/${id}`);
}