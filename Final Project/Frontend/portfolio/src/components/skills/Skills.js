import React ,{Component} from 'react';
import Header from '../common/header/Header'

import Footer from '../common/footer/Footer';

import "./Skills.css"

class Skills extends Component {
    render(){
        return (
            <div>
                <Header />
                    <div className="skills__section container">
                            <div className="skill left">
                                <img src="https://i.postimg.cc/66L24P6f/1200px-HTML5-logo-and-wordmark-svg.png"></img><br></br>
                                <span>HTML</span>
                            </div>
                            <div className="skill left">
                                <img src="https://i.postimg.cc/8PZbMck4/css.jpg"></img><br></br>
                                <span>CSS</span>
                            </div>
                            <div className="skill left">
                                 <img src="https://i.postimg.cc/RZcV263Q/js.png"></img><br></br>
                                <span>Javascript</span>
                        </div>
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/RZcV263Q/js.png"></img><br></br>
                                <span>Javascript</span>
                        </div>
                        <div className="skill left">
                                 <img src="https://i.postimg.cc/RZcV263Q/js.png"></img><br></br>
                                <span>Javascript</span>
                        </div>  
                    </div>   



                <Footer/>
            </div>
          
    
        )
    }
}

export default Skills