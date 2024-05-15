import styles from './styles.module.css';
import {useState} from 'react';
import BackButton from '../BackButton';
import HeaderTitle from '../HeaderTitle';
import UserImage from '../UserImage';
import {Link} from 'react-router-dom';

const Header = ({
                    useBackButton,
                    useUserImage,
                    imageSrc,
                }) => {
    const [dropDownState, setDropDownState] = useState(false);

    const handleToggleDropDownState = () => {
        setDropDownState(!dropDownState);
    };


    return (<div className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.backButtonContainer}>
                {useBackButton && <BackButton/>}
            </div>
            <HeaderTitle/>
            <div className={styles.userImageContainer} onClick={handleToggleDropDownState}>
                {useUserImage && <UserImage src={imageSrc} alt={'사용자 사진'} width={36} height={36}/>}
                {dropDownState && <div className={styles.dropdownMenu}>
                    <ul>
                        <li><Link to={'/users/update/profile'} className={styles.LinkText}>회원정보수정</Link></li>
                        <li><Link to={'/users/update/password'} className={styles.LinkText}>비밀번호수정</Link></li>
                        {/* 나중에 로그아웃 로직 구현 */}
                        <li><Link to={'/sign-in'} className={styles.LinkText}>로그아웃</Link></li>
                    </ul>
                </div>}
            </div>
        </div>
    </div>);
};

export default Header;
