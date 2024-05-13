import styles from './styles.module.css';
import BodyTitle from '../BodyTitle';
import HelperText from '../HelperText';

const EditPostForm = ({bodyTitleText}) => {
    // 조건에 따라 hooks이나 이벤트를 바꿀 수 있는가?
    // 게시글 작성과 게시글 수정 폼은 같으나, 선행 API랑 submit 버튼 API가 다를텐데

    return (<div className={styles.editPostContainer}>
        <BodyTitle text={bodyTitleText}></BodyTitle>
        <form className={styles.editPostForm}>
            <label className={styles.editPostFormLabelText}>제목 *</label>
            <input className={styles.editPostFormInput}/>
            <label className={styles.editPostFormLabelText}>내용 *</label>
            <textarea className={styles.editPostFormTextarea}></textarea>
            <HelperText text={'* helper text'}/>
            <label className={styles.editPostFormLabelText}>이미지</label>
            <div className={styles.editPostFormInputImageContainer}>
                <input type={'file'}/>
            </div>
            <input className={styles.editPostFormSubmitButton} type={'submit'} value={'완료'}/>
        </form>
    </div>);
};

export default EditPostForm;
