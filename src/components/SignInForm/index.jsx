import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';
import BodyTitle from '../BodyTitle';
import LabeledInput from '../LabeledInput';
import HelperText from '../HelperText';
import SubmitInput from '../SubmitInput';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');
    const [submitInputColor, setSubmitInputColor] = useState('');
    const [submitInputDisable, setSubmitInputDisable] = useState(true);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    useEffect(function updateSubmitInputWhenInput() {
        const validateEmailResult = validateEmail(email);

        if (!validateEmailResult.status) {
            setHelperText(validateEmailResult.message);
            setSubmitInputColor('#ACA0EB');
            setSubmitInputDisable(true);
            return;
        }

        const validatePasswordResult = validatePassword(password);

        if (!validatePasswordResult.status) {
            setHelperText(validatePasswordResult.message);
            setSubmitInputColor('#ACA0EB');
            setSubmitInputDisable(true);
            return;
        }

        setHelperText('');
        setSubmitInputColor('#7F6AEE');
        setSubmitInputDisable(false);
    }, [email, password]);

    // 나중에 fetch 추가, 로그인 실패 시 help text를 통해 사용자에게 결과 알림
    const handleSignIn = (event) => {
        event.preventDefault();

        console.log('email: ', email, 'password:', password);
    };

    return (<div className={styles.signInContainer}>
        <BodyTitle text={'로그인'}></BodyTitle>
        <form className={styles.signInForm} onSubmit={handleSignIn}>
            <LabeledInput labelText={'이메일'} name={'email'} type={'email'} onChange={handleChangeEmail}
                          placeholder={'이메일을 입력하세요'}/>
            <LabeledInput labelText={'비밀번호'} name={'password'} type={'password'} onChange={handleChangePassword}
                          placeholder={'비밀번호를 입력하세요'}/>
            <HelperText text={helperText}/>
            <SubmitInput backgroundColor={submitInputColor} disabled={submitInputDisable} value={'로그인'}/>
        </form>
        <p>
            <Link to={'/sign-up'} className={styles.moveSignUpText}>회원가입</Link>
        </p>
    </div>);
};

export default SignInForm;
