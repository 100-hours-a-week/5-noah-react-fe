import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import LabeledInput from '../LabeledInput';
import HelperText from '../HelperText';
import SubmitInput from '../SubmitInput';
import LabeledTextarea from '../LabeledTextarea';
import MainContainer from '../MainContainer';

const EditPostForm = ({bodyTitleText}) => {
    // 조건에 따라 hooks이나 이벤트를 바꿀 수 있는가?
    // 게시글 작성과 게시글 수정 폼은 같으나, 선행 API랑 submit 버튼 API가 다를텐데

    return (<MainContainer>
        <BodyTitle text={bodyTitleText}></BodyTitle>
        <form className={styles.editPostForm}>
            <LabeledInput labelText={'제목 *'} type={'text'} name={'title'} placeholder={'제목을 입력해주세요 (최대 26글자)'}
                          maxLength={26}/>
            <LabeledTextarea labelText={'내용 *'} textareaHeight={'300px'} name={'content'} placeholder={'내용을 입력해주세요'}/>
            <HelperText text={'* helper text'}/>
            <label className={styles.editPostFormLabelText}>이미지</label>
            <div className={styles.editPostFormInputImageContainer}>
                <input type={'file'}/>
            </div>
            {/* 이벤트 추가 시 동적으로 활용 */}
            <SubmitInput backgroundColor={'#ACA0EB'} disabled={true} value={'완료'}></SubmitInput>
        </form>
    </MainContainer>);
};

export default EditPostForm;
