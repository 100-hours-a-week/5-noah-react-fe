import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import LabeledInput from '../LabeledInput';
import HelperText from '../HelperText';
import SubmitInput from '../SubmitInput';
import LabeledTextarea from '../LabeledTextarea';
import MainContainer from '../MainContainer';
import Label from '../Label';
import {useEffect, useState} from 'react';
import useInput from '../../hooks/useInput';
import useValidation from '../../hooks/useValidation';

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
    const {
        value: title,
        onChangeWithEvent: onChangeTitleWithEvent,
        onChangeWithValue: onChangeTitleWithValue,
    } = useInput('');
    const {
        value: content,
        onChangeWithEvent: onChangeContentWithEvent,
        onChangeWithValue: onChangeContentWithValue,
    } = useInput('');

    const [submitInputDisable, setSubmitInputDisable] = useState(true);

    const titleValidation = useValidation(title, validateTitle);
    const contentValidation = useValidation(content, validateContent);

    // 야매 코드, HOC로 분리 가능할 듯
    useEffect(function getPostInfo() {
        if (postId) {
            fetch(`http://localhost:8000/api/posts/${postId}`)
                .then((response) => {
                    if (response.ok) {
                        response.json().then((body) => {
                            onChangeTitleWithValue(body.title);
                            onChangeContentWithValue(body.content);
                        });
                    } else {
                        alert('ERROR');
                    }
                });
        }
    }, [postId]);

    useEffect(function updateSubmitInputWhenOtherInput() {
        setSubmitInputDisable(!(titleValidation.isValid && contentValidation.isValid));
    }, [titleValidation.isValid, contentValidation.isValid]);

    return (<MainContainer>
        <BodyTitle text={bodyTitleText}></BodyTitle>
        <form className={styles.editPostForm} encType={'multipart/form-data'} onSubmit={onSubmit}>
            <LabeledInput labelText={'제목 *'} type={'text'} name={'title'} placeholder={'제목을 입력해주세요 (최대 26글자)'}
                          maxLength={26} onChange={onChangeTitleWithEvent} value={title}/>
            <LabeledTextarea labelText={'내용 *'} textareaHeight={'300px'} name={'content'} placeholder={'내용을 입력해주세요'}
                             onChange={onChangeContentWithEvent} value={content}/>
            <HelperText text={titleValidation.helperText || contentValidation.helperText}/>
            <Label labelText={'이미지'}/>
            <div className={styles.editPostFormInputImageContainer}>
                <input type={'file'} name={'image'}/>
            </div>
            <SubmitInput disabled={submitInputDisable} value={'완료'}></SubmitInput>
        </form>
    </MainContainer>);
};

export default EditPostForm;
