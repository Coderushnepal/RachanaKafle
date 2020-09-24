import http from '../utils/http';

export const fetchBlogs = async () => {
    console.log("Fetching")
    // call async api
    const {data}=await http.get("/blogs");
    console.log(data.data);
    return  data.data;


};



export const fetchBlogsById  = async (blogId) => {
    //call single blogs async api
    const {data} =await http.get(`/blogs/${blogId}`);
    console.log(data)
    return data.data;  
}


export const deleteBlogs =async (blogId) => {
    const {data} =await http.delete(`/blogs/${blogId}`);
    console.log(data)
    return data.data[0];  

}
