import './index.css';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';

const SignInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');
    const [buttonColor, setButtonColor] = useState('#ACA0EB');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleMoveSignUpPage = () => {
        navigate('/sign-up');
    };

    useEffect(() => {
        const validateEmailResult = validateEmail(email);

        if (!validateEmailResult.status) {
            setHelperText(validateEmailResult.message);
            setButtonColor('#ACA0EB');
            setButtonDisabled(true);
            return;
        }

        const validatePasswordResult = validatePassword(password);

        if (!validatePasswordResult.status) {
            setHelperText(validatePasswordResult.message);
            setButtonColor('#ACA0EB');
            setButtonDisabled(true);
            return;
        }

        setHelperText('');
        setButtonColor('#7F6AEE');
        setButtonDisabled(false);
    }, [email, password]);

    // 나중에 fetch 추가, 로그인 실패 시 help text를 통해 사용자에게 결과 알림
    const handleSignIn = (event) => {
        event.preventDefault();

        console.log('email: ', email, 'password:', password);
    };

    return (<>
        <p id={'txt-title-container-sign-in'}>로그인</p>
        <form id={'form-sign-in'} onSubmit={handleSignIn}>
            <label className={'txt-label-form-sign-in'}>이메일</label>
            <input className={'input-form-sign-in'} onChange={handleEmailChange} type={'email'}
                   placeholder={'이메일을 입력하세요'}/>
            <label className={'txt-label-form-sign-in'}>비밀번호</label>
            <input className={'input-form-sign-in'} onChange={handlePasswordChange} type={'password'}
                   placeholder={'비밀번호를 입력하세요'}/>
            <p className={'txt-helper'}>{helperText}</p>
            <input id={'btn-submit-sign-in'} type={'submit'} value={'로그인'}
                   style={{backgroundColor: buttonColor}} disabled={buttonDisabled}></input>
        </form>
        <p id={'txt-move-sign-in'} onClick={handleMoveSignUpPage}>회원가입</p>
    </>);
};

export default SignInForm;
