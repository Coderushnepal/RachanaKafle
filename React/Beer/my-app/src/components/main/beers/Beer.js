import React,{Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import BeerModal from './BeerModal';
import { dummyBeersData as favorites} from '../../../constants/dummyData';

class Beer extends Component {
    constructor(props){
        super(props); 

        this.state = {
        showMadal:false,    
        isFavorite:false,
        };
    }
        handleModalOpen = () =>{
            this.setState ({
                showMadal:true,
            })
        }

        handleModalClose = () =>{
            this.setState ({
                showMadal:false,
            })
        }

    render(){
        const {isFavorite,showMadal}=this.state;
        const{id,name,description,image_url}=this.props.info;
        // console.log(this.props.info)
        const findBeer=favorites.findBeer(beer => beer.id ===id)
        return (
            <Fragment>
            {showMadal? (
            <BeerModal
             show={showMadal} 
             handleClose={this.handleModalClose}
             beerId={id}
             />
            ):null}
            <div className="card">
                <span className={'favourite ${isFavorite? "active":""}'}>
                    <i className="far fa-star"/>
                </span>
                <div className="card__imgcontainer" 
                style={{backgroundImage : `url(${image_url})` }}/>
                <h2 onClick={this.handleModalOpen}> 
                   {name}</h2>
                {/* <h2>{this.props.info.name}</h2> */}
                <span className="card__description">
                    {/* {this.props.info.description} */}
                    {description}
                </span>

            </div>
            {/* )} */}
            </Fragment>
        );
    }

}
Beer.propTypes={
    info:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        description:PropTypes.string,
        image_url:PropTypes.string,
    }), 
};



export default Beer