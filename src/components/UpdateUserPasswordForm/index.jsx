import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';
import SubmitInput from '../SubmitInput';

const UpdateUserPasswordForm = () => {

    return (<MainContainer>
        <BodyTitle text={'비밀번호 수정'}></BodyTitle>
        <form className={styles.updateUserPasswordForm}>
            <LabeledInput labelText={'비밀번호'} type={'password'} name={'password'} placeholder={'비밀번호를 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <LabeledInput labelText={'비밀번호 확인'} type={'password'} name={'confirmPassword'}
                          placeholder={'비밀번호를 한번 더 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <SubmitInput backgroundColor={'#ACA0EB'} disabled={true} value={'수정하기'}/>
        </form>
    </MainContainer>);
};

export default UpdateUserPasswordForm;
