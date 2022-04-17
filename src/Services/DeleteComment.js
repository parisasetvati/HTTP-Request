import http from "./httpServices";
export const DeleteComment=(commentId)=>{
    return http.delete(`/comments/${commentId}`);
}