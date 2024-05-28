import styles from './styles.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';
import validateConfirmPassword from '../../utils/validateConfirmPassword.mjs';
import validateNickname from '../../utils/validateNickname.mjs';
import MainContainer from '../MainContainer';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';
import LabeledInputUserImage from '../LabeledInputUserImage';
import LabeledInput from '../LabeledInput';
import SubmitInput from '../SubmitInput';
import Label from '../Label';
import validateUserImageFile from '../../utils/validateUserImageFile.mjs';

const SignUpForm = () => {
    const navigate = useNavigate();

    const [userImageFile, setUserImageFile] = useState(null);
    const [userImageHelperText, setUserImageHelperText] = useState('');
    const [userImageStatus, setUserImageStatus] = useState(false);

    const [email, setEmail] = useState('');
    const [emailHelperText, setEmailHelperText] = useState('');
    const [emailStatus, setEmailStatus] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');
    const [passwordStatus, setPasswordStatus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(false);

    const [nickname, setNickname] = useState('');
    const [nicknameHelperText, setNicknameHelperText] = useState('');
    const [nicknameStatus, setNicknameStatus] = useState(false);

    const [submitInputDisabled, setSubmitInputDisabled] = useState(true);

    const handleChangeUserImageFile = (file) => {
        setUserImageFile(file);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleChangeNickname = (event) => {
        setNickname(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', event.target.image.files[0]);
        formData.append('email', event.target.email.value);
        formData.append('password', event.target.password.value);
        formData.append('nickname', event.target.nickname.value);

        fetch('http://localhost:8000/api/sign-up', {
            method: 'POST',
            body: formData,
        }).then((response) => {
            if (response.ok) {
                navigate('/sign-in');
            } else {
                response.json().then((body) => {
                    if (body.message === 'DUPLICATE_EMAIL') {
                        setEmailHelperText('* 중복된 이메일입니다.');
                        setEmailStatus(false);
                    } else if (body.message === 'DUPLICATE_NICKNAME') {
                        setNicknameHelperText('* 중복된 닉네임입니다.');
                        setNicknameStatus(false);
                    } else {
                        alert(body.message);
                    }
                });
            }
        });
    };

    useEffect(function updateUserImageHelperTextWhenInputUserImage() {
        const {
            status,
            message,
        } = validateUserImageFile(userImageFile);

        setUserImageHelperText(message);
        setUserImageStatus(status);
    }, [userImageFile]);

    useEffect(function updateEmailHelperTextWhenInputEmail() {
        const result = validateEmail(email);

        setEmailHelperText(result.message);
        setEmailStatus(result.status);
    }, [email]);

    useEffect(function updatePasswordHelperTextWhenInputPassword() {
        const result = validatePassword(password);

        setPasswordHelperText(result.message);
        setPasswordStatus(result.status);
    }, [password]);

    useEffect(function updateConfirmPasswordHelperTextWhenInputConfirmPassword() {
        const result = validateConfirmPassword(password, confirmPassword);

        setConfirmPasswordHelperText(result.message);
        setConfirmPasswordStatus(result.status);
    }, [password, confirmPassword]);

    useEffect(function updateNicknameHelperTextWhenInputNickname() {
        const result = validateNickname(nickname);

        setNicknameHelperText(result.message);
        setNicknameStatus(result.status);
    }, [nickname]);

    useEffect(function updateSubmitInputWhenOtherInput() {
        setSubmitInputDisabled(!(userImageStatus && emailStatus && passwordStatus && confirmPasswordStatus && nicknameStatus));
    }, [userImageStatus, emailStatus, passwordStatus, confirmPasswordStatus, nicknameStatus]);

    // 이미 로그인되어 있다면 /posts로 이동, 나중에 HOC로 빼기
    useEffect(function checkAlreadySignIn() {
        fetch('http://localhost:8000/api/check-auth', {
            credentials: 'include',
        })
            .then((response) => {
                console.log('check');

                if (response.ok) {
                    navigate('/posts');
                }
            });
    }, [navigate]);

    return (<MainContainer>
        <BodyTitle text={'회원가입'}></BodyTitle>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <Label labelText={'프로필 사진'}/>
            <HelperText text={userImageHelperText}/>
            <LabeledInputUserImage name={'image'} onChange={handleChangeUserImageFile}/>
            <LabeledInput labelText={'이메일 *'} type={'email'} name={'email'} onChange={handleChangeEmail}
                          placeholder={'이메일을 입력하세요'}/>
            <HelperText text={emailHelperText}/>
            <LabeledInput labelText={'비밀번호 *'} type={'password'} name={'password'} onChange={handleChangePassword}
                          placeholder={'비밀번호를 입력하세요'}/>
            <HelperText text={passwordHelperText}/>
            <LabeledInput labelText={'비밀번호 확인 *'} type={'password'} name={'confirmPassword'}
                          onChange={handleChangeConfirmPassword}
                          placeholder={'비밀번호를 한번 더 입력하세요'}/>
            <HelperText text={confirmPasswordHelperText}/>
            <LabeledInput labelText={'닉네임 *'} type={'text'} name={'nickname'} onChange={handleChangeNickname}
                          placeholder={'닉네임을 입력하세요'}/>
            <HelperText text={nicknameHelperText}/>
            <SubmitInput disabled={submitInputDisabled} value={'회원가입'}/>
        </form>
        <p>
            <Link to={'/sign-in'} className={styles.moveSignInText}>로그인하러 가기</Link>
        </p>
    </MainContainer>);
};

export default SignUpForm;
