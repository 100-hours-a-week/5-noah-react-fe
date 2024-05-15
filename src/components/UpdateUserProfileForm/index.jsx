import styles from './styles.module.css';
import MainContainer from '../MainContainer';
import BodyTitle from '../BodyTitle';
import Label from '../Label';
import LabeledInputUserImage from '../LabeledInputUserImage';
import HelperText from '../HelperText';
import LabeledInput from '../LabeledInput';
import SubmitInput from '../SubmitInput';
import {useEffect, useState} from 'react';
import validateNickname from '../../utils/validateNickname.mjs';
import validateUserImageFile from '../../utils/validateUserImageFile.mjs';
import ToastMessage from '../ToastMessage';
import Modal from '../Modal';

const UpdateUserProfileForm = () => {
    const [userImageFile, setUserImageFile] = useState(null);
    const [userImageFileStatus, setUserImageFileStatus] = useState(false);

    const [nickname, setNickname] = useState('');
    const [nicknameStatus, setNicknameStatus] = useState(false);

    const [helperText, setHelperText] = useState('');

    const [submitInputDisabled, setSubmitInputDisabled] = useState(true);

    const [toast, setToast] = useState(false);

    const [modal, setModal] = useState(false);

    const handleChangeUserImageFile = (file) => {
        setUserImageFile(file);
    };

    const handleChangeNickname = (event) => {
        setNickname(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // 나중에 fetch API 추가

        setToast(true);
    };

    const handleOpenModal = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleDeleteUser = () => {
        console.log('회원 탈퇴');

        // 나중에 fetch API 추가
        setModal(false);
    };

    useEffect(function updateHelperTextWhenInput() {
        const userImageFileResult = validateUserImageFile(userImageFile);

        setHelperText(userImageFileResult.message);
        setUserImageFileStatus(userImageFileResult.status);

        if (userImageFileResult.status) {
            const {
                status,
                message,
            } = validateNickname(nickname);

            setHelperText(message);
            setNicknameStatus(status);
        }
    }, [userImageFile, nickname]);

    useEffect(function updateSubmitInputWhenOtherInput() {
        setSubmitInputDisabled(!(userImageFileStatus && nicknameStatus));
    }, [userImageFileStatus, nicknameStatus]);

    return (<MainContainer>
        <BodyTitle text={'회원정보수정'}></BodyTitle>
        <form className={styles.updateUserProfileForm} onSubmit={handleSubmit}>
            <Label labelText={'프로필 사진 *'}/>
            <LabeledInputUserImage name={'userImage'} onChange={handleChangeUserImageFile}/>
            <Label labelText={'이메일'}/>
            <p className={styles.userEmail}>49ehyeon42@gmail.com</p>
            <LabeledInput labelText={'닉네임'} type={'text'} name={'nickname'} placeholder={'닉네임을 입력하세요'}
                          onChange={handleChangeNickname}/>
            <HelperText text={helperText}/>
            <SubmitInput disabled={submitInputDisabled} value={'수정하기'}/>
        </form>
        <p onClick={handleOpenModal}>회원탈퇴</p>

        {toast && <ToastMessage setToast={setToast} text={'수정완료'}/>}

        {modal && <Modal title={'회원탈퇴 하시겠습니까?'} content={'작성된 게시글과 댓글은 삭제됩니다.'} onCancel={handleCloseModal}
                         onConfirm={handleDeleteUser}/>}
    </MainContainer>);
};

export default UpdateUserProfileForm;
