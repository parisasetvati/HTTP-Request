import http from "./httpServices";
export const getAllCommentServises=()=>{
    return http.get("comments");
}