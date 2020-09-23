import React ,{Component} from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header'
import "./resume.css"

class Resume extends Component {
    render(){
        return (
            <div>
                <Header />
                <div>
                    <img style={{width:"70%",marginLeft:"200px",marginTop:"20px"}} src="https://i.postimg.cc/Qt3R48cc/IMG-3739.jpg"></img>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Resume