import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import BodyTitle from '../BodyTitle';
import Label from '../Label';
import LabeledInputUserImage from '../LabeledInputUserImage';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';
import SubmitInput from '../SubmitInput';

const UpdateUserProfileForm = () => {

    return (<MainContainer>
        <BodyTitle text={'회원정보수정'}></BodyTitle>
        <form className={styles.updateUserProfileForm}>
            <Label labelText={'프로필 사진 *'}/>
            {/* 나중에 handler 추가 */}
            <LabeledInputUserImage name={'userImage'}/>
            <Label labelText={'이메일'}/>
            <p className={styles.userEmail}>49ehyeon42@gmail.com</p>
            <LabeledInput labelText={'닉네임'} type={'text'} name={'nickname'} placeholder={'닉네임을 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            {/* 상태 추가 시 동적으로 변경 */}
            <SubmitInput backgroundColor={'#ACA0EB'} disabled={false} value={'수정하기'}/>
        </form>
        <p>회원탈퇴</p>
    </MainContainer>);
};

// 토스트 메시지, 모달 창은 이벤트 때 구현

export default UpdateUserProfileForm;