import http from "./httpServices";
export const addNewComment=(data)=>{
    return  http
    .post("/comments", data);
}