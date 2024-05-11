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
        <div className={'container-header'}>
            <div className={'container-btn-header'}>
                {useBackButton && <BackButton/>}
            </div>
            <Title/>
            <div className={'container-img-header'}>
                {useUserImage && <UserImage src={imageSrc} alt={'사용자 사진'} width={36} height={36}/>}
            </div>
        </div>
    </div>);
};

export default Header;
