import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import fish from '../assets/land.png';
import car from '../assets/maa.jpg';
import cat from '../assets/cat.gif';
import '../style/springAnimation.css';

function Spring() {

    const ref = useRef();

    return (
        <div>

            <Parallax pages={4} ref={ref}>
           

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${car})`,
                        backgroundSize: '2000px, 1000px',
                    }}
                />


                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${fish})`,
                        backgroundSize: 'cover',
                    }}
                ></ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 0.9, end: 2.5 }}
                    style={{ textAlign: 'center' }}
                >
                    <img src={cat} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <h2>Welcome to Bonkkers</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={2}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <h2>Bonkkers is awesome</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Spring;
