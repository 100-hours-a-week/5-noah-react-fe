import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';

const UpdateUserPasswordForm = () => {

    return (<div className={styles.updateUserPasswordContainer}>
        <BodyTitle text={'비밀번호 수정'}></BodyTitle>
        <form className={styles.updateUserPasswordForm}>
            <LabeledInput labelText={'비밀번호'} type={'password'} name={'password'} placeholder={'비밀번호를 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <LabeledInput labelText={'비밀번호 확인'} type={'password'} name={'confirmPassword'}
                          placeholder={'비밀번호를 한번 더 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <input className={styles.updateUserPasswordFormSubmitButton} type={'submit'} value={'수정하기'}/>
        </form>
    </div>);
};

export default UpdateUserPasswordForm;
