import styles from './HeroSection.module.css';
import PropTypes from 'prop-types';

function HeroSection({ title, text}) {

    return (
        <div className={`${styles['hero-section']} fade-in`}>
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