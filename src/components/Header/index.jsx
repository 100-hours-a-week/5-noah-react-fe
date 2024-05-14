import styles from './styles.module.css';
import BackButton from '../BackButton';
import HeaderTitle from '../HeaderTitle';
import UserImage from '../UserImage';

const Header = ({
                    useBackButton,
                    useUserImage,
                    imageSrc,
                }) => {
    return (<div className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.backButtonContainer}>
                {useBackButton && <BackButton/>}
            </div>
            <HeaderTitle/>
            <div className={styles.userImageContainer}>
                {useUserImage && <UserImage src={imageSrc} alt={'사용자 사진'} width={36} height={36}/>}
            </div>
        </div>
    </div>);
};

export default Header;
