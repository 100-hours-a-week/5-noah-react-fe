import {useNavigate} from 'react-router-dom';
import './index.css';

const BackButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(-1);
    };

    return (<>
        <button className={'btn-move-back'} onClick={onClick}>
            <span className={'txt-btn-move-back'}>
                &lt;
            </span>
        </button>
    </>);
};

export default BackButton;
