import styles from './styles.module.css';
import {Link} from 'react-router-dom';
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

const SignUpForm = () => {
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

    const [submitInputDisable, setSubmitInputDisable] = useState(true);
    const [submitInputBackgroundColor, setSubmitInputBackgroundColor] = useState('#ACA0EB');

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

    useEffect(function updateUserImageHelperTextWhenInputUserImage() {
        if (userImageFile) {
            setUserImageHelperText('');
            setUserImageStatus(true);
        } else {
            setUserImageHelperText('* 프로필 사진을 추가해주세요.');
            setUserImageStatus(false);
        }
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
        // 닉네임 중복 처리는 API 연결 후 구현

        const result = validateNickname(nickname);

        setNicknameHelperText(result.message);
        setNicknameStatus(result.status);
    }, [nickname]);

    useEffect(function updateSubmitInputWhenOtherInput() {
        if (userImageStatus && emailStatus && passwordStatus && confirmPasswordStatus && nicknameStatus) {
            setSubmitInputDisable(false);
            setSubmitInputBackgroundColor('#7F6AEE');
        } else {
            setSubmitInputDisable(true);
            setSubmitInputBackgroundColor('#ACA0EB');
        }
    }, [userImageStatus, emailStatus, passwordStatus, confirmPasswordStatus, nicknameStatus]);

    return (<MainContainer>
        <BodyTitle text={'회원가입'}></BodyTitle>
        <form className={styles.signUpForm}>
            <Label labelText={'프로필 사진'}/>
            <HelperText text={userImageHelperText}/>
            <LabeledInputUserImage name={'userImage'} onChange={handleChangeUserImageFile}/>
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
            <SubmitInput backgroundColor={submitInputBackgroundColor} disabled={submitInputDisable} value={'회원가입'}/>
        </form>
        <p>
            <Link to={'/sign-in'} className={styles.moveSignInText}>로그인하러 가기</Link>
        </p>
    </MainContainer>);
};

export default SignUpForm;
