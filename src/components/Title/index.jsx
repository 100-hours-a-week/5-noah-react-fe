import {useNavigate} from 'react-router-dom';

import styles from './styles.module.css';

const Title = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/posts');
    };

    return (<>
        <span className={styles.titleText} onClick={onClick}>아무 말 대잔치</span>
    </>);
};

export default Title;
