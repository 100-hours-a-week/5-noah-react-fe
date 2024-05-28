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

const EditPostForm = ({
                          postId,
                          bodyTitleText,
                          onSubmit,
                      }) => {
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

    // 야매 코드
    useEffect(function getPostInfo() {
        if (postId) {
            fetch(`http://localhost:8000/api/posts/${postId}`)
                .then((response) => {
                    if (response.ok) {
                        response.json().then((body) => {
                            setTitle(body.title);
                            setContent(body.content);
                        });
                    } else {
                        alert('ERROR');
                    }
                });
        }
    }, [postId]);

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
        <form className={styles.editPostForm} encType={'multipart/form-data'} onSubmit={onSubmit}>
            <LabeledInput labelText={'제목 *'} type={'text'} name={'title'} placeholder={'제목을 입력해주세요 (최대 26글자)'}
                          maxLength={26} onChange={handleChangeTitle} value={title}/>
            <LabeledTextarea labelText={'내용 *'} textareaHeight={'300px'} name={'content'} placeholder={'내용을 입력해주세요'}
                             onChange={handleChangeContent} value={content}/>
            <HelperText text={helperText}/>
            <Label labelText={'이미지'}/>
            <div className={styles.editPostFormInputImageContainer}>
                <input type={'file'} name={'image'}/>
            </div>
            <SubmitInput disabled={submitInputDisabled} value={'완료'}></SubmitInput>
        </form>
    </MainContainer>);
};

export default EditPostForm;
