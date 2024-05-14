import styles from './styles.module.css';
import Comment from '../Comment';

const CommentContainer = () => {
    return (<div className={styles.commentContainer}>
        <form className={styles.createCommentForm}>
            <textarea className={styles.textarea} placeholder={'댓글을 남겨쥬세요!'}/>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.createCommentFormSubmitButtonContainer}>
                <button className={styles.createCommentFormSubmitButton}>댓글 등록</button>
            </div>
        </form>
        <div className={styles.comments}>
            <Comment authorImageSrc={'/user-images/default-user-image.png'} authorName={'더미 작성자1'}
                     createdDate={'2021-01-01 00:00:00'}
                     content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque vel felis at scelerisque. Nulla volutpat vulputate mattis. Morbi ullamcorper, odio in pretium tincidunt, nunc nisi elementum nibh, a commodo elit metus quis lectus. Etiam gravida felis ut enim vehicula scelerisque. Nulla sagittis metus at turpis laoreet, quis molestie nisi suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu metus at nisi imperdiet vestibulum vel pharetra elit. In gravida leo quis elementum ullamcorper. In malesuada sit amet massa et cursus. Integer viverra gravida vulputate. Morbi mollis dui in cursus pharetra.'}></Comment>
            <Comment authorImageSrc={'/user-images/default-user-image.png'} authorName={'더미 작성자1'}
                     createdDate={'2021-01-01 00:00:00'}
                     content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque vel felis at scelerisque. Nulla volutpat vulputate mattis. Morbi ullamcorper, odio in pretium tincidunt, nunc nisi elementum nibh, a commodo elit metus quis lectus. Etiam gravida felis ut enim vehicula scelerisque. Nulla sagittis metus at turpis laoreet, quis molestie nisi suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu metus at nisi imperdiet vestibulum vel pharetra elit. In gravida leo quis elementum ullamcorper. In malesuada sit amet massa et cursus. Integer viverra gravida vulputate. Morbi mollis dui in cursus pharetra.'}></Comment>
            <Comment authorImageSrc={'/user-images/default-user-image.png'} authorName={'더미 작성자1'}
                     createdDate={'2021-01-01 00:00:00'}
                     content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque vel felis at scelerisque. Nulla volutpat vulputate mattis. Morbi ullamcorper, odio in pretium tincidunt, nunc nisi elementum nibh, a commodo elit metus quis lectus. Etiam gravida felis ut enim vehicula scelerisque. Nulla sagittis metus at turpis laoreet, quis molestie nisi suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu metus at nisi imperdiet vestibulum vel pharetra elit. In gravida leo quis elementum ullamcorper. In malesuada sit amet massa et cursus. Integer viverra gravida vulputate. Morbi mollis dui in cursus pharetra.'}></Comment>
        </div>

    </div>);
};

export default CommentContainer;
