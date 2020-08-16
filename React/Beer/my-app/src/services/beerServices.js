import http from '../utils/http';

export const fetchBeers = async (page=1,size=25) => {
    const params= {
        page:page,
        per_page:size,
    };
    //call async api
    const {data}=await http.get("/beers",{params});
    // console.log(data);
    return  data;
};

export const fetchBeerById  = async (id) => {
    //call single beer async api
    const {data} =await http.get(`/beers/${id}`);
    return data[0];

    
}