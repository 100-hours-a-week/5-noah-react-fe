import styles from './styles.module.css';
import UserImage from '../UserImage';
import SmallButton from '../SmallButton';
import updateNumberByUnit from '../../utils/updateNumberByUnit.mjs';

const Post = ({
                  postTitle,
                  authorImageSrc,
                  authorName,
                  createdDate,
                  postImageSrc,
                  postContent,
                  views,
                  comments,
              }) => {

    return (<div>
        <div>
            <p className={styles.postTitle}>{postTitle}</p>
            <div className={styles.topContainer}>
                <div className={styles.authorContainer}>
                    <UserImage src={authorImageSrc} alt={'댓글 작성자 사진'} width={36} height={36}/>
                    <span className={styles.authorName}>{authorName}</span>
                    <span>{createdDate}</span>
                </div>
                <div>
                    <SmallButton value={'수정'}/>
                    <SmallButton value={'삭제'}/>
                </div>
            </div>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.contentContainer}>
            <img src={postImageSrc} alt={'게시글 사진'} width={544} height={306}/>
            <p className={styles.postContent}>{postContent}</p>
            <div className={styles.contentSubContainer}>
                <div className={styles.contentSubInfoContainer}>
                    <p className={styles.postSubInfoText}>{updateNumberByUnit(views)}</p>
                    <p className={styles.postSubInfoText}>조회수</p>
                </div>
                <div className={styles.contentSubInfoContainer}>
                    <p className={styles.postSubInfoText}>{updateNumberByUnit(comments)}</p>
                    <p className={styles.postSubInfoText}>댓글</p>
                </div>
            </div>
        </div>
        <hr className={styles.horizontalRule}></hr>

    </div>);
};

export default Post;