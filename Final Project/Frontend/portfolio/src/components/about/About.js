import React ,{Component} from 'react';
import { Header } from '../common';
import "./About.css"

class About extends Component {
    render(){
        return (
            <div>
                 <Header /> 
                 <div className="container__about">
                     <div className="description">
                         <p>
                         I have completed a bachelor’s degree in BSc.CSIT from Tribhuwan University.
                         I love to share my experience, knowledge, and thought.
                         I will post all types of blogs on this website such as related to programming, technology, travel, and health.
                         Nulla lectus metus, lobortis nec odio nec, pretium malesuada lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc volutpat fermentum libero, et posuere nunc pellentesque suscipit. Mauris a orci turpis. Donec blandit imperdiet eros, sed interdum nulla euismod at. Duis blandit eu enim sit amet fringilla. Ut condimentum lorem justo. Integer enim felis, varius et commodo et, euismod in enim. Aenean pellentesque sed justo ac maximus. Nunc pulvinar nulla libero. Aliquam sed auctor quam. Vivamus ultricies libero mi, nec lobortis magna porta et. Pellentesque sed arcu eu neque pretium eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer libero velit, ornare nec lectus aliquam, eleifend porttitor nisi.
                        </p>        
                     </div>
                     <div className="profile">
                        <img src="https://i.postimg.cc/vmtgXb4N/profile.jpg" alt="Rachana kafle"></img>
                     </div>
                 </div>
            </div>
        )
    }
}

export default About