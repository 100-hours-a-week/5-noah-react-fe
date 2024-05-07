import './index.css';
import {useNavigate} from 'react-router-dom';

const Title = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/posts');
    };

    return (<>
        <span className={'txt'} onClick={onClick}>아무 말 대잔치</span>
    </>);
};

export default Title;
