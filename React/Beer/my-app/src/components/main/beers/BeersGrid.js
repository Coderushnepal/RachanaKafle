import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Beer from "./Beer";
import * as toast from "../../../utils/toast";
import { Header, Spinner } from "../../comman";
import { fetchBeers } from "../../../services/beerServices";

 class BeerGrid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    beers:[],
    // pageInfo:{page:0,size:5},
    pageInfo:{page:0,size:25},
    hasMore: true,
    searchFor:"",
    hasFilter: false,
  };
}


scrollPartnerRef=null;

// api call
fetchBeers = async () => {
  try {
      const { beers, pageInfo, searchFor, hasFilter } = this.state;
      let { page, size } = pageInfo;

      if (hasFilter) {
        page = 0;
      }

      const data = await fetchBeers(page + 1, size, searchFor);
      this.setState({
          beers: hasFilter ? data : [...beers, ...data],
          pageInfo:{
            ...this.state.pageInfo,
            page:data.length? page+1:page,
          },
          hasMore: !!data.length,
          hasFilter: false,
      });
      // toast.success({
      // title:"Yay!!",
      // message:"Beer aayo!!"
  // });
  } catch (error){
      const errorMsg=error.response.data.message;
      toast.error({
          title:"on Snap",
          message:errorMsg
      });
  }
};

setSearchText = (searchText) => {
  this.setState(
    {
      searchFor: searchText,
      hasFilter: true,
  
    },
    () => {
      this.fetchBeers();
    }  
  );
};

componentDidMount() {
  this.fetchBeers();

} 

   render(){
    const { beers ,hasMore } = this.state;
       return(
         <div>
        <Header setSearchText={this.setSearchText}  />
           <main>
          <div className="container" ref={(r) =>(this.scrollPartnerRef=r)}>
            <InfiniteScroll
              dataLength={beers.length}
              next={this.fetchBeers}
              hasMore={hasMore} 
              loader={<Spinner />} >
            {this.state.beers.map(beer => (
              <Beer key={beer.id} info={beer} /> 
            ))}          
            </InfiniteScroll>
          </div>
        </main> 
        </div>
       ); 
   }
 }
 export default BeerGrid