import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import LabeledInput from '../LabeledInput';
import HelperText from '../HelperText';
import SubmitInput from '../SubmitInput';
import LabeledTextarea from '../LabeledTextarea';
import MainContainer from '../MainContainer';
import Label from '../Label';
import {useEffect, useState} from 'react';

// 이 컴포넌트에서만 사용하기 때문에 분리 X
const validateTitle = (title) => {
    if (title.length === 0 || !title) {
        return {
            status: false,
            message: '* 제목을 입력해주세요.',
        };
    } else if (title.length > 26) {
        return {
            status: false,
            message: '* 제목은 최대 26글자 입니다.',
        };
    } else {
        return {
            status: true,
            message: null,
        };
    }
};

// 이 컴포넌트에서만 사용하기 때문에 분리 X
const validateContent = (content) => {
    if (content.length === 0) {
        return {
            status: false,
            message: '* 내용을 입력해주세요.',
        };
    } else {
        return {
            status: true,
            message: null,
        };
    }
};

const EditPostForm = ({bodyTitleText}) => {
    // 자문자답
    // Q. 조건에 따라 hooks이나 이벤트를 바꿀 수 있는가?, 게시글 작성과 게시글 수정 폼은 같으나, 선행 API랑 submit 버튼 API가 다를텐데
    // A. 상위 컴포넌트에서 전달한다.

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [helperText, setHelperText] = useState('');
    const [submitInputDisabled, setSubmitInputDisabled] = useState(true);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    useEffect(function updateHelperTextWhenInput() {
        const titleResult = validateTitle(title);

        if (titleResult.status) {
            const contentResult = validateContent(content);

            setHelperText(contentResult.message);
            setSubmitInputDisabled(!contentResult.status);
        } else {
            setHelperText(titleResult.message);
            setSubmitInputDisabled(true);
        }
    }, [title, content]);

    return (<MainContainer>
        <BodyTitle text={bodyTitleText}></BodyTitle>
        <form className={styles.editPostForm}>
            <LabeledInput labelText={'제목 *'} type={'text'} name={'title'} placeholder={'제목을 입력해주세요 (최대 26글자)'}
                          maxLength={26} onChange={handleChangeTitle}/>
            <LabeledTextarea labelText={'내용 *'} textareaHeight={'300px'} name={'content'} placeholder={'내용을 입력해주세요'}
                             onChange={handleChangeContent}/>
            <HelperText text={helperText}/>
            <Label labelText={'이미지'}/>
            <div className={styles.editPostFormInputImageContainer}>
                <input type={'file'}/>
            </div>
            <SubmitInput disabled={submitInputDisabled} value={'완료'}></SubmitInput>
        </form>
    </MainContainer>);
};

export default EditPostForm;
