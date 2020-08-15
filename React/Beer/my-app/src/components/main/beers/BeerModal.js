import React,{Component, Children} from 'react';
import PropTypes from 'prop-types';
import {Modal,Spinner} from "../../comman";
import * as toast from '../../../utils/toast';
import {fetchBeerById} from "../../../services/beerServices";


class BeerModal  extends Component {
    constructor(props) {
        super(props)
    
    this.state ={
     isLoading:true,
     beer:{},
    } 

}

fetchBeer = async () => {
    try {
        const data =await fetchBeerById(this.props.beerId);
        this.setState({
            beer:data,
            isLoading:false,
        });
        toast.success({
        title:"Yay!!",
        message:"Beer successfully retrieved"
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
    this.fetchBeer();
}

    render(){
        const { isLoading,beer} = this.state;
        const {name,description,tagline,image_url,ibu,abv,ebc,food_pairing}=beer
        const { handleClose, show } = this.props;

        return(
            <Modal show={show} handleClose={handleClose}>
              {isLoading ? ( <Spinner />
              ):(
                <div className="DescriptionModal clearfix">
                   <div>
                       <div> 
                            <div className="DescriptionModal__left">
                                <div 
                                  className="DescriptionModal__left__imgcontainer" 
                                  style={{backgroundImage : `url(${image_url})` }}
                                />
                            </div>
                           <div className="DescriptionModal__right">
                                   <h1>{name}</h1> 
                                   <span className="DescriptionModal__right__title">
                                       {tagline}
                                   </span>
                                   <ul>
                                       <li>
                                           <span className="bold">IBU</span>{ibu}
                                       </li>
                                       <li>
                                           <span className="bold">IBU</span>{abv}
                                       </li>
                                       <li>
                                           <span className="bold">IBU</span>{ebc}
                                       </li>
                                   </ul> 
                                    <p>{description}</p>
                                    {food_pairing ?(
                                   <div className="DescriptionModal__right__list">
                                   <span>Best served with:</span>
                                       <ul>
                                           {food_pairing.map((food, index) =>
                                            <li key={index}> {food}</li>   
                                       )}
                                       </ul> 
                                   </div>
                                    ):null}                               
                           </div>                
                       </div>
                   </div>   
               </div> 
              )}        
            </Modal>    
        )
    }
}

BeerModal.propTypes = {
    beerId:PropTypes.number,
    handleClose:PropTypes.func,
    show:PropTypes.bool,
};
export default BeerModal;