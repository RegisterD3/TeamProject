import React from 'react'
import Card from './CardUi'

// import IMG_1 from 'https://media-exp1.licdn.com/dms/image/C5103AQEFNvlsjPks7w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9O_lO6MZ_rLRwc5Ilmy10WWlaMQ_CXI5n2ZLHPVJO1Q';
import Derrick_Register from './Assets/Derrick_Register.jpg'



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state={};

    }

  
      

    render() {
        return(
            <div className= "container-fluid1 d-flex justify-content-center">
               
                    <div className="col-lx">
                        <Card imgsrc={Derrick_Register} title= "Derrick Register" text="Junior Developer"/>
                        <a  className="links" href="https://www.linkedin.com/in/derrick-register/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                   
                </div>
        );
    }
}

export default Cards;