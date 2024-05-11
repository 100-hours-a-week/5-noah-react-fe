import './index.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';
import validateNickname from '../../utils/validateNickname.mjs';

const SignUpForm = () => {
    const DEFAULT_USER_IMAGE_PATH = '/etc-images/sign-up-default-background-image.png';

    const fileReader = new FileReader();

    const [userImageSrc, setUserImageSrc] = useState(DEFAULT_USER_IMAGE_PATH);
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

    const [submitButtonDisable, setSubmitButtonDisable] = useState(true);
    const [submitButtonColor, setSubmitButtonColor] = useState('#ACA0EB');

    const handleChangeUserImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            fileReader.onload = () => {
                if (typeof fileReader.result === 'string') {
                    setUserImageSrc(fileReader.result);
                }
            };

            fileReader.readAsDataURL(event.target.files[0]);
        } else {
            setUserImageSrc(DEFAULT_USER_IMAGE_PATH);
        }
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

    useEffect(function updateUserImageHelperTextWhenInputUserImage() {
        // 재사용 어려워서 분리 X
        if (userImageSrc !== DEFAULT_USER_IMAGE_PATH) {
            setUserImageHelperText('');
            setUserImageStatus(true);
        } else {
            setUserImageHelperText('* 프로필 사진을 추가해주세요.');
            setUserImageStatus(false);
        }
    }, [userImageSrc]);

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
        // 비밀번호 확인 로직은 재사용이 적기 때문에 분리 X
        if (confirmPassword.length === 0) {
            setConfirmPasswordHelperText('* 비밀번호를 한번 더 입력해주세요.');
            setConfirmPasswordStatus(false);
        } else if (password !== confirmPassword) {
            setConfirmPasswordHelperText('* 비밀번호가 다릅니다.');
            setConfirmPasswordStatus(false);
        } else {
            setConfirmPasswordHelperText('');
            setConfirmPasswordStatus(true);
        }
    }, [password, confirmPassword]); // ESLint 경고 떠서 password 추가

    useEffect(function updateNicknameHelperTextWhenInputNickname() {
        // 닉네임 중복 처리는 API 연결 후 구현

        const result = validateNickname(nickname);

        setNicknameHelperText(result.message);
        setNicknameStatus(result.status);
    }, [nickname]);

    useEffect(function updateSubmitButtonWhenInput() {
        if (userImageStatus && emailStatus && passwordStatus && confirmPasswordStatus && nicknameStatus) {
            setSubmitButtonDisable(false);
            setSubmitButtonColor('#7F6AEE');
        } else {
            setSubmitButtonDisable(true);
            setSubmitButtonColor('#ACA0EB');
        }
    }, [userImageStatus, emailStatus, passwordStatus, confirmPasswordStatus, nicknameStatus]);

    return (<div className={'container-sign-up'}>
        <p id={'txt-title-container-sign-up'}>회원가입</p>
        <form id={'form-sign-up'}>
            <p className={'txt-label-form-sign-up'}>프로필 사진</p>
            <label htmlFor={'input-user-image-form-sign-up'}>
                <img id={'img-label-form-sign-up'} src={userImageSrc}
                     alt={'사용자 배경 사진'}/>
            </label>
            <input id={'input-user-image-form-sign-up'} type={'file'} onChange={handleChangeUserImage} required={true}/>
            <p className={'txt-helper'} id={'txt-helper-image'}>{userImageHelperText}</p>
            <label className={'txt-label-form-sign-up'}>이메일 *</label>
            <input className={'input-form-sign-up'} onChange={handleChangeEmail}/>
            <p className={'txt-helper'} id={'txt-helper-email'}>{emailHelperText}</p>
            <label className={'txt-label-form-sign-up'}>비밀번호 *</label>
            <input className={'input-form-sign-up'} onChange={handleChangePassword} type={'password'}/>
            <p className={'txt-helper'}>{passwordHelperText}</p>
            <label className={'txt-label-form-sign-up'}>비밀번호 확인 *</label>
            <input className={'input-form-sign-up'} onChange={handleChangeConfirmPassword} type={'password'}/>
            <p className={'txt-helper'}>{confirmPasswordHelperText}</p>
            <label className={'txt-label-form-sign-up'}>닉네임 *</label>
            <input className={'input-form-sign-up'} onChange={handleChangeNickname}/>
            <p className={'txt-helper'}>{nicknameHelperText}</p>
            <input id={'btn-submit-sign-up'} type={'submit'} value={'회원가입'} disabled={submitButtonDisable}
                   style={{backgroundColor: submitButtonColor}}/>
        </form>
        <Link to={'/sign-in'} id={'txt-move-sign-up'}>로그인하러 가기</Link>
    </div>);
};

export default SignUpForm;
