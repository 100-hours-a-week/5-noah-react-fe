import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';

const UpdateUserProfileForm = () => {

    return (<div className={styles.updateUserProfileContainer}>
        <BodyTitle text={'회원정보수정'}></BodyTitle>
        <form className={styles.updateUserProfileForm}>
            <p className={styles.updateUserProfileFormLabelText}>프로필 사진 *</p>
            <label htmlFor={'userImageInput'}>
                <img className={styles.updateUserProfileFormLabelImage}
                     src={'/user-images/default-user-image.png'} alt={'사용자 배경 사진'}/>
            </label>
            <input className={styles.updateUserProfileFormUserImageInput} id={'userImageInput'} type={'file'}
                   required={true}/>
            <label className={styles.updateUserProfileFormLabelText}>이메일</label>
            <p className={styles.userEmail}>49ehyeon42@gmail.com</p>
            <label className={styles.updateUserProfileFormLabelText}>닉네임</label>
            <input className={styles.updateUserProfileFormInput} placeholder={'닉네임을 입력해주세요.'}/>
            <p className={styles.updateUserProfileFormHelperText}>* helper text</p>
            <input className={styles.updateUserProfileFormSubmitButton} type={'submit'} value={'수정하기'}/>
        </form>
        <p>회원탈퇴</p>
    </div>);
};

// 토스트 메시지, 모달 창은 이벤트 때 구현

export default UpdateUserProfileForm;
