import http from '../utils/http';

export const fetchBlogs = async () => {
    console.log("Fetching")
    // call async api
    const {data}=await http.get("/blogs");
    console.log(data.data);
    return  data.data;
};



export const fetchBlogsById  = async (id) => {
    //call single beer async api
    const {data} =await http.get(`/blogs/${id}`);
    return data[0];

    
}

