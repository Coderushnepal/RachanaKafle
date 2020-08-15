import React, { Component } from "react";
import Beer from "./Beer";
import * as toast from "../../../utils/toast";
import { Header, Spinner } from "../../comman";
import { fetchBeers } from "../../../services/beerServices";

 class BeerGrid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    isLoading:true,
    //array ma data rakhne
    beers:[],
  };
}

scrollPartnerRef=null

// api call
fetchBeers = async () => {
  try {
      const data =await fetchBeers();
      this.setState({
          beers:data,
          isLoading:false,
      });
      toast.success({
      title:"Yay!!",
      message:"Beer aayo!!"
  });
  } catch (error){
      const errorMsg=error.response.data.message;
      toast.error({
          title:"on Snap",
          message:"errorMsg"
      });
  }
};



componentDidMount() {
  this.fetchBeers();

} 

   render(){
    const { isLoading } = this.state;
       return(
         <div>
        <Header />
        {isLoading?(
          <Spinner />
        ):(
           <main>
          <div className="container" 
          ref={(r) =>(this.scrollPartnerRef=r)}>
            {this.state.beers.map(beer => (
              <Beer key={beer.id} info={beer} /> 
            ))}
          </div>
        </main> 
         ) }
        </div>
       ); 
   }
 }
 export default BeerGrid