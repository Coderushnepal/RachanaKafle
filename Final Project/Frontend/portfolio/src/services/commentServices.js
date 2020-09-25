import http from '../utils/http'

export const fetchComments = async () => {
    console.log("Fetching comment")
    // call async api
    const {data}=await http.get("/comment");
    console.log('fetch data from service',data.data);
    return  data.data.data;
};


export async function postComment(commented_by, comment) {
    const { data } = await http.post('/comment', {
      commented_by,
      comment
    });
    console.log(data.data)
    return data.data
  }