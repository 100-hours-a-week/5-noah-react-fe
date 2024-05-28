import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';
import SubmitInput from '../SubmitInput';
import {useEffect, useState} from 'react';
import validatePassword from '../../utils/validatePassword.mjs';
import validateConfirmPassword from '../../utils/validateConfirmPassword.mjs';
import ToastMessage from '../ToastMessage';

const UpdateUserPasswordForm = () => {
    // 이럴 때 커스텀 훅 쓰는건가? 너무 중복되는데??

    const [password, setPassword] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');
    const [passwordStatus, setPasswordStatus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(false);

    const [submitInputDisabled, setSubmitInputDisabled] = useState(true);

    const [toast, setToast] = useState(false);

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/users/update/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
            }),
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                setToast(true);
            } else {
                alert('ERROR');
            }
        });
    };

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

    useEffect(function updateSubmitInputWhenOtherInput() {
        setSubmitInputDisabled(!(passwordStatus && confirmPasswordStatus));
    }, [passwordStatus, confirmPasswordStatus]);

    return (<MainContainer>
        <BodyTitle text={'비밀번호 수정'}></BodyTitle>
        <form className={styles.updateUserPasswordForm} onSubmit={handleSubmit}>
            <LabeledInput labelText={'비밀번호'} type={'password'} name={'password'} placeholder={'비밀번호를 입력하세요'}
                          onChange={handleChangePassword}/>
            <HelperText text={passwordHelperText}/>
            <LabeledInput labelText={'비밀번호 확인'} type={'password'} name={'confirmPassword'}
                          placeholder={'비밀번호를 한번 더 입력하세요'} onChange={handleChangeConfirmPassword}/>
            <HelperText text={confirmPasswordHelperText}/>
            <SubmitInput disabled={submitInputDisabled} value={'수정하기'}/>
        </form>

        {toast && <ToastMessage setToast={setToast} text={'수정완료'}/>}
    </MainContainer>);
};

export default UpdateUserPasswordForm;
