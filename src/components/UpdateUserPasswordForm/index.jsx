import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';

const UpdateUserPasswordForm = () => {

    return (<div className={styles.updateUserPasswordContainer}>
        <BodyTitle text={'비밀번호 수정'}></BodyTitle>
        <form className={styles.updateUserPasswordForm}>
            <label className={styles.updateUserPasswordFormLabelText}>비밀번호</label>
            <input className={styles.updateUserPasswordFormInput} type={'password'} placeholder={'비밀번호를 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <label className={styles.updateUserPasswordFormLabelText}>비밀번호 확인</label>
            <input className={styles.updateUserPasswordFormInput} type={'password'} placeholder={'비밀번호를 한번 더 입력하세요'}/>
            <HelperText text={'* helper text'}/>
            <input className={styles.updateUserPasswordFormSubmitButton} type={'submit'} value={'수정하기'}/>
        </form>
    </div>);
};

export default UpdateUserPasswordForm;
