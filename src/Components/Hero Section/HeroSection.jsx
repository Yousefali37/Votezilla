import styles from './HeroSection.module.css';
import PropTypes from 'prop-types';
import GoBackBtn from './../Go Back btn/GoBackBtn';
// import { useState } from 'react';
// import { useEffect } from 'react';

function HeroSection({ title, text }) {

    // const [toggleback, setToggleback] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (scrollY > 100) {
    //             setToggleback(true);
    //         } else {
    //             setToggleback(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className={`${styles['hero-section']} fade-in`}>
            <GoBackBtn />
            <div className={styles['hero-text']}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default HeroSection;