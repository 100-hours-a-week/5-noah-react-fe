import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';
import BodyTitle from '../BodyTitle';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');
    const [submitButtonColor, setSubmitButtonColor] = useState('#ACA0EB');
    const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(function updateSubmitButtonWhenInput() {
        const validateEmailResult = validateEmail(email);

        if (!validateEmailResult.status) {
            setHelperText(validateEmailResult.message);
            setSubmitButtonColor('#ACA0EB');
            setSubmitButtonDisable(true);
            return;
        }

        const validatePasswordResult = validatePassword(password);

        if (!validatePasswordResult.status) {
            setHelperText(validatePasswordResult.message);
            setSubmitButtonColor('#ACA0EB');
            setSubmitButtonDisable(true);
            return;
        }

        setHelperText('');
        setSubmitButtonColor('#7F6AEE');
        setSubmitButtonDisable(false);
    }, [email, password]);

    // 나중에 fetch 추가, 로그인 실패 시 help text를 통해 사용자에게 결과 알림
    const handleSignIn = (event) => {
        event.preventDefault();

        console.log('email: ', email, 'password:', password);
    };

    return (<div className={styles.signInContainer}>
        <BodyTitle text={'로그인'}></BodyTitle>
        <form className={styles.signInForm} onSubmit={handleSignIn}>
            <label className={styles.signInFormLabelText}>이메일</label>
            <input className={styles.signInFormInput} onChange={handleEmailChange} type={'email'}
                   placeholder={'이메일을 입력하세요'}/>
            <label className={styles.signInFormLabelText}>비밀번호</label>
            <input className={styles.signInFormInput} onChange={handlePasswordChange} type={'password'}
                   placeholder={'비밀번호를 입력하세요'}/>
            <p className={styles.signInFormHelperText}>{helperText}</p>
            <input className={styles.signInFormSubmitButton} type={'submit'} value={'로그인'}
                   style={{backgroundColor: submitButtonColor}} disabled={submitButtonDisable}></input>
        </form>
        <p>
            <Link to={'/sign-up'} className={styles.moveSignUpText}>회원가입</Link>
        </p>
    </div>);
};

export default SignInForm;
