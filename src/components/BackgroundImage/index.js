import background from '../../assets/background.png';
import './styles.css';

const BackgroundImg = () => {
    return (
        <img src={background} className="background" alt="background app" />
    );
};

export default BackgroundImg;