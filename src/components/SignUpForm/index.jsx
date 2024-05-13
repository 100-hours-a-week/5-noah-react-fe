import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import validateEmail from '../../utils/validateEmail.mjs';
import validatePassword from '../../utils/validatePassword.mjs';
import validateNickname from '../../utils/validateNickname.mjs';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';

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

    return (<div className={styles.signUpContainer}>
        <BodyTitle text={'회원가입'}></BodyTitle>
        <form className={styles.signUpForm}>
            <p className={styles.signUpFormLabelText}>프로필 사진</p>
            <HelperText text={userImageHelperText}/>
            <label htmlFor={'userImageInput'}>
                <img className={styles.signUpFormLabelImage} src={userImageSrc} alt={'사용자 배경 사진'}/>
            </label>
            <input className={styles.signUpFormUserImageInput} id={'userImageInput'} type={'file'}
                   onChange={handleChangeUserImage} required={true}/>
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
            <input className={styles.signUpFormSubmitButton} type={'submit'} value={'회원가입'}
                   disabled={submitButtonDisable}
                   style={{backgroundColor: submitButtonColor}}/>
        </form>
        <p>
            <Link to={'/sign-in'} className={styles.moveSignInText}>로그인하러 가기</Link>
        </p>
    </div>);
};

export default SignUpForm;
