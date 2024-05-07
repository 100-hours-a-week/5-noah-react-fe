import './index.css';
import BackButton from '../BackButton';
import Title from '../Title';
import UserImage from '../UserImage';

const Header = ({
                    useBackButton,
                    useUserImage,
                    imageSrc,
                }) => {
    return (<div className={'header'}>
        {useBackButton && <div className={'container-btn-header'}>
            <BackButton/>
        </div>}
        <Title/>
        {useUserImage && <div className={'container-img-header'}>
            <UserImage src={imageSrc} alt={'사용자 사진'} width={36} height={36}/>
        </div>}
    </div>);
};

export default Header;
