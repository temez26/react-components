import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie.json';
import Drink from '../assets/drink.json';
import Square from '../assets/square.json';
import Heart from '../assets/heart.json';
import Heart2 from '../assets/heart2.json';
import Fox from '../assets/fox.json';
import Astronaut from '../assets/astronot.json';
import Rocket from '../assets/rocket.json';
import Yes from '../assets/success.json';
import Cat from '../assets/cat.json';
import Linkedin from '../assets/linkedin.json';
import Github from '../assets/github.json';
import Relax from '../assets/relax.json';

import '../style/lottieAnimation.css';

function Lottief() {
    return (
        <div>
        <h1>Bonkkers icon animations</h1>
        <div className="container">
        
            <div className="row">
                <div className="col">
                    <Lottie animationData={animationData} style={{ width: '250px' }} />
                    <Lottie animationData={Drink} style={{ width: '250px' }} />
                    <Lottie animationData={Square} style={{ width: '250px' }} />
                    <Lottie animationData={Heart} style={{ width: '250px' }} />
                </div>

                <div className="col-2">
                    <Lottie animationData={Yes} style={{ width: '250px' }} />
                    <Lottie animationData={Fox} style={{ width: '250px' }} />
                    <Lottie animationData={Astronaut} style={{ width: '250px' }} />
                    <Lottie animationData={Rocket} style={{ width: '250px' }} />
                </div>

                <div className="col-3">
                    <Lottie animationData={Cat} style={{ width: '250px' }} />
                    <Lottie animationData={Linkedin} style={{ width: '250px' }} />
                    <Lottie animationData={Github} style={{ width: '250px' }} />
                    <Lottie animationData={Relax} style={{ width: '250px' }} />
                </div>




            </div>
        </div>
        </div >
    );
}

export default Lottief;
